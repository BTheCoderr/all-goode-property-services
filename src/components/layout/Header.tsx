"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { business, navLinks } from "@/data/business";
import { ButtonLink } from "@/components/ui/Button";
import { telHref } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-[var(--color-cream)]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={business.logoPath}
            alt={business.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full"
            priority
          />
          <span className="min-w-0">
            <span className="block font-display text-lg leading-none tracking-wide text-[var(--color-ink)] sm:text-xl">
              ALL GOODE
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-green)] sm:text-[11px]">
              Property Services
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[var(--color-ink)]/80 transition hover:bg-black/5 hover:text-[var(--color-ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref(business.phoneTel)}
            className="hidden items-center rounded-md bg-[var(--color-ink)] px-4 py-2.5 text-sm font-semibold text-[var(--color-cream)] transition hover:bg-black sm:inline-flex"
          >
            Call Now
          </a>
          <ButtonLink href="/contact" className="hidden md:inline-flex" variant="primary">
            Get a Quote
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-black/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className={`block h-0.5 bg-[var(--color-ink)] transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 bg-[var(--color-ink)] transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-[var(--color-ink)] transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-black/8 bg-[var(--color-cream)] lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-medium text-[var(--color-ink)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={telHref(business.phoneTel)}
                className="rounded-md bg-[var(--color-ink)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-cream)]"
              >
                Call
              </a>
              <Link
                href="/contact"
                className="rounded-md bg-[var(--color-green)] px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Quote
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
