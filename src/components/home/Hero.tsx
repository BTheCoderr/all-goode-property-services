import { business, trustStrip } from "@/data/business";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JobImage } from "@/components/ui/JobImage";
import { telHref } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-near-black)] text-[var(--color-cream)]">
      <div className="absolute inset-0">
        <JobImage
          src="/jobs/hero-junk-removal.webp"
          alt="All Goode Property Services work truck on a residential job site"
          className="h-full w-full opacity-45"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-near-black)] via-[var(--color-near-black)]/90 to-[var(--color-near-black)]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-near-black)] via-transparent to-[var(--color-near-black)]/40" />
      </div>

      <Container className="relative flex min-h-[90vh] flex-col justify-end pb-14 pt-24 sm:min-h-[84vh] sm:justify-center sm:pb-24 sm:pt-28">
        <p className="font-display-caps text-xs font-semibold tracking-[0.24em] text-[var(--color-green-soft)] sm:text-sm">
          ALL GOODE PROPERTY SERVICES
        </p>
        <h1 className="mt-4 max-w-4xl font-display-caps text-5xl leading-[0.92] tracking-[0.02em] sm:text-6xl md:text-7xl lg:text-8xl">
          Property Problems?
          <span className="mt-2 block text-[var(--color-green-soft)]">It&apos;s All Goode.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Junk removal, cleanouts, yard work, landscaping and dependable property services from a
          local crew that shows up and gets the job handled.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/contact" variant="primary" className="min-h-12 px-7 text-base uppercase tracking-[0.08em]">
            Get a Free Quote
          </ButtonLink>
          <a
            href={telHref(business.phoneTel)}
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 bg-transparent px-7 text-base font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-white/10"
          >
            Call {business.phoneDisplay}
          </a>
        </div>
        <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 sm:text-xs">
          {trustStrip.map((item, index) => (
            <li key={item} className="flex items-center gap-3">
              {index > 0 ? <span className="text-[var(--color-green)]" aria-hidden>•</span> : null}
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-white/50">{business.serviceAreaLabel}.</p>
      </Container>
    </section>
  );
}
