import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { business, brandPhrases, navLinks } from "@/data/business";
import { homepageServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { telHref } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[var(--color-near-black)] text-[var(--color-cream)]">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <BrandLogo size="lg" />
              <span>
                <span className="block font-display-caps text-xl tracking-[0.06em]">ALL GOODE</span>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-green-soft)]">
                  Property Services
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {brandPhrases.oneCall} Local property services from Providence, Rhode Island.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Explore</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Services</p>
            <ul className="mt-4 space-y-2">
              {homepageServices.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={service.href} className="text-sm text-white/80 hover:text-white">
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={telHref(business.phoneTel)}
                  className="text-lg font-semibold text-white hover:text-[var(--color-green-soft)]"
                >
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="text-white/70">{business.serviceAreaLabel}</li>
              <li>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--color-green-soft)] hover:text-white"
                >
                  Instagram {business.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>Providence, Rhode Island</p>
        </div>
      </Container>
    </footer>
  );
}
