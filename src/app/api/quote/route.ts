import { NextResponse } from "next/server";
import { quoteServiceOptions, timeframeOptions } from "@/data/services";

export const runtime = "nodejs";

const rateMap = new Map<string, number[]>();

function getIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const max = 8;
  const recent = (rateMap.get(ip) || []).filter((t) => now - t < windowMs);
  recent.push(now);
  rateMap.set(ip, recent);
  return recent.length > max;
}

function isValidService(value: string) {
  return (quoteServiceOptions as readonly string[]).includes(value);
}

function isValidTimeframe(value: string) {
  return (timeframeOptions as readonly string[]).includes(value);
}

export async function POST(request: Request) {
  try {
    const ip = getIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, message: "Too many requests. Please call or text us instead." },
        { status: 429 },
      );
    }

    const form = await request.formData();

    // Honeypot
    const website = String(form.get("website") || "");
    if (website.trim()) {
      return NextResponse.json({ ok: true });
    }

    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const service = String(form.get("service") || "").trim();
    const address = String(form.get("address") || "").trim();
    const details = String(form.get("details") || "").trim();
    const timeframe = String(form.get("timeframe") || "").trim();

    if (!name || name.length > 120) {
      return NextResponse.json({ ok: false, message: "Valid name is required." }, { status: 400 });
    }
    if (phone.replace(/\D/g, "").length < 10 || phone.length > 40) {
      return NextResponse.json({ ok: false, message: "Valid phone is required." }, { status: 400 });
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, message: "Email looks invalid." }, { status: 400 });
    }
    if (!isValidService(service)) {
      return NextResponse.json({ ok: false, message: "Select a valid service." }, { status: 400 });
    }
    if (!details || details.length < 10 || details.length > 5000) {
      return NextResponse.json(
        { ok: false, message: "Please describe the job in a bit more detail." },
        { status: 400 },
      );
    }
    if (timeframe && !isValidTimeframe(timeframe)) {
      return NextResponse.json({ ok: false, message: "Invalid timeframe." }, { status: 400 });
    }

    const uploadedPhotos = form
      .getAll("photos")
      .filter((item): item is File => item instanceof File && item.size > 0);

    if (uploadedPhotos.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please text job photos to 401-201-7670 instead of uploading them here.",
        },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.QUOTE_TO_EMAIL;

    if (!apiKey || !toEmail) {
      return NextResponse.json(
        {
          ok: false,
          message: "Online quote delivery is temporarily unavailable. Please call or text 401-201-7670.",
        },
        { status: 503 },
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.QUOTE_FROM_EMAIL || "All Goode Website <onboarding@resend.dev>",
        to: [toEmail],
        ...(email ? { reply_to: email } : {}),
        subject: `New quote request: ${service} — ${name}`,
        text: [
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email || "n/a"}`,
          `Service: ${service}`,
          `Address: ${address || "n/a"}`,
          `Timeframe: ${timeframe || "n/a"}`,
          "",
          details,
        ].join("\n"),
      }),
    });

    if (!emailResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: "We could not deliver your quote request. Please call or text 401-201-7670.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not send your request. Please call or text 401-201-7670." },
      { status: 500 },
    );
  }
}
