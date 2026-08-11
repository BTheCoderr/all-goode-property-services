export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function telHref(phoneTel: string) {
  return `tel:${phoneTel}`;
}

export function smsHref(phoneSms: string, body?: string) {
  const base = `sms:${phoneSms}`;
  if (!body) return base;
  return `${base}?&body=${encodeURIComponent(body)}`;
}
