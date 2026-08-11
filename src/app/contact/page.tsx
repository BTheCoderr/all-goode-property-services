import type { Metadata } from "next";
import { business } from "@/data/business";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { smsHref, telHref } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Get a Free Quote",
  description:
    "Request a free quote for junk removal, cleanouts, yard cleanup and property services in Providence, RI. Call or text All Goode Property Services.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<{ service?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const defaultService = params.service;

  return (
    <section className="bg-[var(--color-cream)] py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              title="Tell Us What You Need Gone, Cleaned Up or Handled."
              subtitle="Photos help a lot. Call, text, or send the form — whichever is easiest."
            />
            <div className="mt-8 space-y-4 rounded-xl border border-black/8 bg-white p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Call / Text
                </p>
                <a
                  href={telHref(business.phoneTel)}
                  className="mt-1 block font-display text-3xl text-[var(--color-ink)] hover:text-[var(--color-green)]"
                >
                  {business.phoneDisplay}
                </a>
              </div>
              <a
                href={smsHref(
                  business.phoneSms,
                  "Hi All Goode — I'd like a quote. Photos coming next.",
                )}
                className="inline-flex min-h-11 items-center rounded-md bg-[var(--color-ink)] px-4 text-sm font-semibold text-[var(--color-cream)]"
              >
                Text Photos for a Quote
              </a>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Instagram
                </p>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 font-medium text-[var(--color-green)]"
                >
                  {business.instagramHandle}
                </a>
              </div>
              <p className="text-sm text-[var(--color-muted)]">{business.serviceAreaLabel}.</p>
            </div>
          </div>
          <QuoteForm defaultService={defaultService} />
        </div>
      </Container>
    </section>
  );
}
