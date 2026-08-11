import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { quoteServiceOptions, timeframeOptions } from "@/data/services";

export const runtime = "nodejs";

const MAX_FILES = 12;
const MAX_FILE_BYTES = 8 * 1024 * 1024;
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
        { ok: false, message: "Too many requests. Please call us instead." },
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

    const photos = form
      .getAll("photos")
      .filter((item): item is File => item instanceof File && item.size > 0);

    if (photos.length > MAX_FILES) {
      return NextResponse.json(
        { ok: false, message: "Please upload 12 photos or fewer." },
        { status: 400 },
      );
    }

    for (const photo of photos) {
      if (!photo.type.startsWith("image/")) {
        return NextResponse.json(
          { ok: false, message: "Only image uploads are allowed." },
          { status: 400 },
        );
      }
      if (photo.size > MAX_FILE_BYTES) {
        return NextResponse.json(
          { ok: false, message: "Each photo must be under 8MB." },
          { status: 400 },
        );
      }
    }

    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const folder = path.join(process.cwd(), "data", "quote-submissions", `${stamp}-${safe(name)}`);
    await mkdir(folder, { recursive: true });

    const payload = {
      receivedAt: new Date().toISOString(),
      ip,
      name,
      phone,
      email: email || null,
      service,
      address: address || null,
      details,
      timeframe: timeframe || null,
      photoCount: photos.length,
      photoNames: photos.map((p) => p.name),
    };

    await writeFile(path.join(folder, "request.json"), JSON.stringify(payload, null, 2), "utf8");

    await Promise.all(
      photos.map(async (photo, index) => {
        const bytes = Buffer.from(await photo.arrayBuffer());
        const ext = extensionFor(photo.type, photo.name);
        await writeFile(path.join(folder, `photo-${String(index + 1).padStart(2, "0")}${ext}`), bytes);
      }),
    );

    // Optional email relay when configured
    if (process.env.RESEND_API_KEY && process.env.QUOTE_TO_EMAIL) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.QUOTE_FROM_EMAIL || "All Goode Website <onboarding@resend.dev>",
            to: [process.env.QUOTE_TO_EMAIL],
            subject: `New quote request: ${service} — ${name}`,
            text: [
              `Name: ${name}`,
              `Phone: ${phone}`,
              `Email: ${email || "n/a"}`,
              `Service: ${service}`,
              `Address: ${address || "n/a"}`,
              `Timeframe: ${timeframe || "n/a"}`,
              `Photos: ${photos.length}`,
              "",
              details,
            ].join("\n"),
          }),
        });
      } catch {
        // Submission already saved locally — don't fail the user.
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not send your request. Please call 401-201-7670." },
      { status: 500 },
    );
  }
}

function safe(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 40) || "lead";
}

function extensionFor(mime: string, filename: string) {
  if (mime === "image/jpeg") return ".jpg";
  if (mime === "image/png") return ".png";
  if (mime === "image/webp") return ".webp";
  if (mime === "image/heic") return ".heic";
  const fromName = path.extname(filename);
  return fromName || ".img";
}
