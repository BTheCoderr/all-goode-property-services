import { brandPhrases, business } from "@/data/business";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { telHref } from "@/lib/utils";

export function FinalCta() {
  return (
    <section className="bg-[var(--color-near-black)] py-16 text-[var(--color-cream)] sm:py-20">
      <Container>
        <div className="flex flex-col items-start gap-6 border-t border-[var(--color-green)]/40 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <BrandLogo size="lg" className="hidden sm:inline-flex" />
            <div>
              <p className="font-display-caps text-3xl tracking-[0.04em] sm:text-4xl">
                {brandPhrases.handled}
              </p>
              <p className="mt-2 max-w-xl text-sm text-white/70 sm:text-base">
                {brandPhrases.cleanedUp} Call or send photos — we&apos;ll help get the property back
                under control.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href="/contact" variant="primary" className="uppercase tracking-[0.06em]">
              Get a Free Quote
            </ButtonLink>
            <a
              href={telHref(business.phoneTel)}
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-5 text-sm font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-white/10"
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
