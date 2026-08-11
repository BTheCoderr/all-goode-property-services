import { business, trustLine } from "@/data/business";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JobImage } from "@/components/ui/JobImage";
import { telHref } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] text-[var(--color-cream)]">
      <div className="absolute inset-0">
        <JobImage
          src="/jobs/hero-junk-removal.webp"
          alt="All Goode Property Services job site — replace with a strong real project photo"
          className="h-full w-full opacity-45"
          priority
          sizes="100vw"
          needsRealPhotos
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      <Container className="relative flex min-h-[88vh] flex-col justify-end pb-16 pt-24 sm:min-h-[82vh] sm:justify-center sm:pb-24 sm:pt-28">
        <p className="font-display text-sm tracking-[0.22em] text-[var(--color-green-soft)] sm:text-base">
          ALL GOODE PROPERTY SERVICES
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
          Property Problems?
          <span className="mt-2 block text-[var(--color-cream)]">Consider Them Handled.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Junk removal, yard cleanups, landscaping, cleanouts and dependable property services from
          a local team that shows up and gets the job done.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/contact" variant="primary" className="min-h-12 px-7 text-base">
            Get a Free Quote
          </ButtonLink>
          <a
            href={telHref(business.phoneTel)}
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-7 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Call Now · {business.phoneDisplay}
          </a>
        </div>
        <p className="mt-6 text-sm font-medium text-white/65">{trustLine}</p>
        <p className="mt-2 text-sm text-white/55">{business.serviceAreaLabel}.</p>
      </Container>
    </section>
  );
}
