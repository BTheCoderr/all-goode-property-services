import type { Metadata } from "next";
import { business } from "@/data/business";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JobImage } from "@/components/ui/JobImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "About All Goode Property Services",
  description:
    "Local Providence-area property services built on showing up, communicating and getting the job done right.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="bg-[var(--color-cream)] py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <JobImage
            src="/jobs/junk-front-yard-after.jpeg"
            alt="Front yard after All Goode removed furniture, bags and household junk"
            className="aspect-[4/5] rounded-xl"
            priority
          />
          <div>
            <SectionHeading title="Local Business. Real Work. No Runaround." />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
              <p>
                All Goode Property Services was built around a simple idea: when someone trusts you
                with their property, show up, communicate, work hard and leave the place better than
                you found it.
              </p>
              <p>
                We&apos;re here for the jobs homeowners and property owners don&apos;t have the
                time, equipment or desire to handle themselves.
              </p>
              <p>
                Whether it&apos;s clearing unwanted junk, cleaning up a yard or getting a property
                back under control, the goal stays the same:
              </p>
              <p className="font-semibold text-[var(--color-ink)]">
                Make the process easy and get the job done right.
              </p>
              <p>
                Based in {business.homeBase}. Call All Goode and consider it handled.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="primary">
                Get a Free Quote
              </ButtonLink>
              <a
                href={telHref(business.phoneTel)}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-black/15 px-5 text-sm font-semibold text-[var(--color-ink)]"
              >
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
