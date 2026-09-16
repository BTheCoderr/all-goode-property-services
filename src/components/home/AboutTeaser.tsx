import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JobImage } from "@/components/ui/JobImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutTeaser() {
  return (
    <section className="bg-[var(--color-surface)] py-16 sm:py-24" id="about">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <JobImage
            src="/jobs/junk-patio-after.jpeg"
            alt="Patio cleared of unwanted items after an All Goode junk removal job"
            className="aspect-[4/5] rounded-xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
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
                back under control, the goal stays the same: make the process easy and get the job
                done right.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/about" variant="secondary">
                About All Goode
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
