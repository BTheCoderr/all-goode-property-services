import Link from "next/link";
import { homepageServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { JobImage } from "@/components/ui/JobImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon, serviceIconName } from "@/components/ui/ServiceIcon";

export function QuickServices() {
  return (
    <section className="bg-[var(--color-cream)] py-16 sm:py-24" id="services">
      <Container>
        <SectionHeading
          eyebrow="What We Handle"
          title="One Number. A Lot Less to Worry About."
          subtitle="From junk piles to overgrown yards — tell us what needs handling."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homepageServices.map((service) => (
            <article
              key={service.slug}
              className="group overflow-hidden rounded-xl border border-black/8 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative">
                <JobImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="aspect-[16/10]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  needsRealPhotos
                />
                <span
                  className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white ${
                    service.slug === "junk-removal"
                      ? "bg-[var(--color-accent-junk)]"
                      : service.slug === "snow-removal"
                        ? "bg-[var(--color-accent-snow)] text-[var(--color-near-black)]"
                        : "bg-[var(--color-green)]"
                  }`}
                >
                  <ServiceIcon name={serviceIconName(service.slug)} className="h-3.5 w-3.5" />
                  {service.shortName}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display-caps text-xl tracking-[0.04em] text-[var(--color-ink)] sm:text-2xl">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {service.cardDescription}
                </p>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.formValue)}`}
                  className="mt-4 inline-flex text-sm font-semibold uppercase tracking-[0.06em] text-[var(--color-green)] underline-offset-4 group-hover:underline"
                >
                  Get a Quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
