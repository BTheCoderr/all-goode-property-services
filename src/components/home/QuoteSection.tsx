import { business } from "@/data/business";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { telHref } from "@/lib/utils";

export function QuoteSection() {
  return (
    <section className="bg-[var(--color-cream)] py-16 sm:py-24" id="quote">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Free Quote"
              title="Tell Us What You Need Gone, Cleaned Up or Handled."
              subtitle="Send details and photos. Prefer to talk it through? Call or text anytime. From messy to All Goode."
            />
            <div className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <p>
                Phone:{" "}
                <a
                  href={telHref(business.phoneTel)}
                  className="font-semibold text-[var(--color-ink)] hover:text-[var(--color-green)]"
                >
                  {business.phoneDisplay}
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--color-ink)] hover:text-[var(--color-green)]"
                >
                  {business.instagramHandle}
                </a>
              </p>
            </div>
          </div>
          <QuoteForm />
        </div>
      </Container>
    </section>
  );
}
