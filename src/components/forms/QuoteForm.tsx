"use client";

import { useMemo, useState } from "react";
import { business } from "@/data/business";
import { quoteServiceOptions, timeframeOptions } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { cn, smsHref } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  address: string;
  details: string;
  timeframe: string;
  website: string; // honeypot
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "Junk Removal",
  address: "",
  details: "",
  timeframe: "As Soon As Possible",
  website: "",
};

type Props = {
  defaultService?: string;
  className?: string;
};

export function QuoteForm({ defaultService, className }: Props) {
  const starting = useMemo(
    () => ({
      ...initial,
      service:
        defaultService &&
        (quoteServiceOptions as readonly string[]).includes(defaultService)
          ? defaultService
          : initial.service,
    }),
    [defaultService],
  );

  const [form, setForm] = useState<FormState>(starting);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) {
      next.phone = "Enter a valid phone number.";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email or leave it blank.";
    }
    if (!form.service) next.service = "Select a service.";
    if (!form.details.trim() || form.details.trim().length < 10) {
      next.details = "Tell us a bit about the job (at least a sentence).";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setServerMessage("");

    const body = new FormData();
    Object.entries(form).forEach(([key, value]) => body.append(key, value));

    try {
      const res = await fetch("/api/quote", { method: "POST", body });
      const contentType = res.headers.get("content-type") || "";
      let data: { ok?: boolean; message?: string } = {};

      if (contentType.includes("application/json")) {
        data = (await res.json()) as { ok?: boolean; message?: string };
      } else {
        await res.text();
      }

      if (!res.ok || !data.ok) {
        throw new Error(
          data.message || "We could not send your request. Please call or text us instead.",
        );
      }

      setStatus("success");
      setForm(starting);
    } catch (err) {
      setStatus("error");
      setServerMessage(
        err instanceof Error
          ? err.message
          : "We could not send your request. Please call or text us instead.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-xl border border-[var(--color-green)]/30 bg-white p-6 sm:p-8",
          className,
        )}
        role="status"
      >
        <p className="font-display text-2xl text-[var(--color-ink)]">Thanks — we got it.</p>
        <p className="mt-3 text-[var(--color-muted)]">
          Your quote request was delivered to All Goode Property Services. We&apos;ll review the
          details and get back to you.
        </p>
        <a
          href={smsHref(
            business.phoneSms,
            "Hi All Goode — I just sent a quote request from the website. Here are the job photos.",
          )}
          className="mt-4 inline-flex min-h-11 items-center font-semibold text-[var(--color-green)] underline underline-offset-4"
        >
          Text job photos
        </a>
        <Button
          type="button"
          className="mt-6 block"
          variant="secondary"
          onClick={() => setStatus("idle")}
        >
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "relative rounded-xl border border-black/8 bg-white p-5 shadow-sm sm:p-8",
        className,
      )}
      noValidate
    >
      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            name="website"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
        <Field label="Email" error={errors.email} hint="Optional">
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field label="Service Needed" error={errors.service}>
          <select
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.service)}
          >
            {quoteServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Property Address / City" className="sm:col-span-2">
          <input
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
            className={inputClass}
            autoComplete="street-address"
            placeholder="Street address or city in Rhode Island"
          />
        </Field>
        <Field
          label="Tell Us About the Job"
          error={errors.details}
          className="sm:col-span-2"
        >
          <textarea
            required
            rows={4}
            value={form.details}
            onChange={(e) => update("details", e.target.value)}
            className={cn(inputClass, "resize-y")}
            placeholder="What needs to be removed, cleaned up, or handled?"
            aria-invalid={Boolean(errors.details)}
          />
        </Field>

        <div className="sm:col-span-2 rounded-lg border border-black/10 bg-[var(--color-cream)] p-4">
          <p className="text-sm font-semibold text-[var(--color-ink)]">Have job photos?</p>
          <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
            Keep the web form fast and reliable — send photos by text after you submit.
          </p>
          <a
            href={smsHref(
              business.phoneSms,
              "Hi All Goode — I'd like a quote. Here are the job photos.",
            )}
            className="mt-2 inline-flex min-h-11 items-center font-semibold text-[var(--color-green)] underline underline-offset-4"
          >
            Text photos to {business.phoneDisplay}
          </a>
        </div>

        <Field label="Desired Timeframe" className="sm:col-span-2">
          <div className="grid gap-2 sm:grid-cols-2">
            {timeframeOptions.map((option) => (
              <label
                key={option}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-md border px-3 py-3 text-sm",
                  form.timeframe === option
                    ? "border-[var(--color-green)] bg-[var(--color-green)]/5"
                    : "border-black/10",
                )}
              >
                <input
                  type="radio"
                  name="timeframe"
                  value={option}
                  checked={form.timeframe === option}
                  onChange={() => update("timeframe", option)}
                  className="accent-[var(--color-green)]"
                />
                {option}
              </label>
            ))}
          </div>
        </Field>
      </div>

      {status === "error" ? (
        <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {serverMessage}
        </p>
      ) : null}

      <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Get My Free Quote"}
      </Button>

      <p className="mt-4 max-w-xl text-xs leading-relaxed text-[var(--color-muted)]">
        We use the information you submit only to review and respond to your quote request.
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-md border border-black/12 bg-[var(--color-cream)] px-3 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-green)] focus:ring-2 focus:ring-[var(--color-green)]/20";

function Field({
  label,
  error,
  hint,
  className,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 flex items-baseline justify-between gap-2 text-sm font-medium text-[var(--color-ink)]">
        <span>{label}</span>
        {hint ? <span className="text-xs font-normal text-[var(--color-muted)]">{hint}</span> : null}
      </span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
