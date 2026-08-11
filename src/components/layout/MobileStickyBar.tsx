"use client";

import Link from "next/link";
import { business } from "@/data/business";
import { smsHref, telHref } from "@/lib/utils";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-[var(--color-cream)]/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={telHref(business.phoneTel)}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--color-ink)] text-sm font-semibold text-[var(--color-cream)]"
        >
          Call
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--color-green)] text-sm font-semibold text-white"
        >
          Get Quote
        </Link>
      </div>
      <a
        href={smsHref(
          business.phoneSms,
          "Hi All Goode — I'd like a quote. I'll send photos of the job.",
        )}
        className="mt-1.5 block text-center text-xs font-medium text-[var(--color-muted)] underline-offset-2 hover:underline"
      >
        Or text photos for a quote
      </a>
    </div>
  );
}
