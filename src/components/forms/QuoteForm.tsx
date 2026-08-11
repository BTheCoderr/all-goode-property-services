"use client";

import { useMemo, useState } from "react";
import { quoteServiceOptions, timeframeOptions } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

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
  const [files, setFiles] = useState<File[]>([]);
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
    if (files.length > 12) next.files = "Please upload 12 photos or fewer.";
    for (const file of files) {
      if (file.size > 8 * 1024 * 1024) {
        next.files = "Each photo must be under 8MB.";
        break;
      }
      if (!file.type.startsWith("image/")) {
        next.files = "Only image files are accepted.";
        break;
      }
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
    files.forEach((file) => body.append("photos", file));

    try {
      const res = await fetch("/api/quote", { method: "POST", body });
      const data = (await res.json()) as { ok: boolean; message?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Something went wrong. Please call us.");
      }
      setStatus("success");
      setForm(starting);
      setFiles([]);
    } catch (err) {
      setStatus("error");
      setServerMessage(err instanceof Error ? err.message : "Please try again or call us.");
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
          Your request was sent to All Goode Property Services. We&apos;ll review the details and
          get back to you.
        </p>
        <Button
          type="button"
          className="mt-6"
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
          />
        </Field>
        <Field label="Email" error={errors.email} hint="Optional">
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            autoComplete="email"
          />
        </Field>
        <Field label="Service Needed" error={errors.service}>
          <select
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            className={inputClass}
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
          />
        </Field>
        <Field
          label="Photo Upload"
          error={errors.files}
          hint="Multiple images welcome"
          className="sm:col-span-2"
        >
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setFiles(Array.from(e.target.files || []))}
            className="block w-full text-sm text-[var(--color-muted)] file:mr-3 file:rounded-md file:border-0 file:bg-[var(--color-ink)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[var(--color-cream)]"
          />
          {files.length > 0 ? (
            <p className="mt-2 text-xs text-[var(--color-muted)]">
              {files.length} photo{files.length === 1 ? "" : "s"} selected
            </p>
          ) : null}
        </Field>
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
