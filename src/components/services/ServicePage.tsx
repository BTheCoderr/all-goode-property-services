import { business } from "@/data/business";
import type { Service } from "@/data/services";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JobImage } from "@/components/ui/JobImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceJsonLd } from "@/lib/seo";
import { smsHref, telHref } from "@/lib/utils";

export function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.pageDescription,
          url: `${business.websiteUrl}${service.href}`,
        })}
      />
      <section className="bg-[var(--color-ink)] text-[var(--color-cream)]">
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-green-soft)]">
              {business.homeBase}
            </p>
            <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-6xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {service.pageDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={`/contact?service=${encodeURIComponent(service.formValue)}`}
                variant="primary"
              >
                Get a Free Quote
              </ButtonLink>
              <a
                href={telHref(business.phoneTel)}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-5 text-sm font-semibold"
              >
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
          <JobImage
            src={service.image}
            alt={service.imageAlt}
            className="aspect-[5/4] rounded-xl"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            needsRealPhotos
          />
        </Container>
      </section>

      <section className="bg-[var(--color-cream)] py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Ready when you are."
              subtitle="Send photos, get a clear quote, and let All Goode handle the mess."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Straightforward pricing before work begins</li>
              <li>Local Providence-area service</li>
              <li>Built around showing up and getting it done</li>
            </ul>
            {service.slug === "junk-removal" ? (
              <a
                href={smsHref(
                  business.phoneSms,
                  "Hi All Goode — junk removal quote. Photos coming next.",
                )}
                className="mt-6 inline-flex min-h-12 items-center rounded-md bg-[var(--color-ink)] px-5 text-sm font-semibold text-[var(--color-cream)]"
              >
                Text Photos for a Quote
              </a>
            ) : null}
          </div>
          <QuoteForm defaultService={service.formValue} />
        </Container>
      </section>
    </>
  );
}
