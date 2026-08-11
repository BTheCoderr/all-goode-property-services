import type { Metadata } from "next";
import Link from "next/link";
import { homepageServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { JobImage } from "@/components/ui/JobImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Property Services in Providence, RI",
  description:
    "Junk removal, property cleanouts, yard cleanup, landscaping, brush removal, property maintenance and snow clearing from All Goode Property Services in Providence, RI.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section className="bg-[var(--color-cream)] py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Services That Get Properties Handled"
          subtitle="One local team for the dirty, difficult and time-consuming jobs."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {homepageServices.map((service) => (
            <article
              key={service.slug}
              className="overflow-hidden rounded-xl border border-black/8 bg-white"
            >
              <JobImage
                src={service.image}
                alt={service.imageAlt}
                className="aspect-[16/9]"
                needsRealPhotos
              />
              <div className="p-6">
                <h2 className="font-display text-3xl tracking-tight">{service.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {service.cardDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
                  <Link href={service.href} className="text-[var(--color-ink)] underline-offset-4 hover:underline">
                    Learn more
                  </Link>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.formValue)}`}
                    className="text-[var(--color-green)] underline-offset-4 hover:underline"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
