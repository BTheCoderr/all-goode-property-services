import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { BeforeAfterSlider } from "@/components/work/BeforeAfterSlider";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Our Work — Before & After",
  description:
    "Before and after property cleanups, junk removal and yard work from All Goode Property Services in Providence, RI.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <section className="bg-[var(--color-cream)] py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="The Difference Speaks for Itself."
          subtitle="Real properties. Real work. Real results."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <BeforeAfterSlider key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-12 rounded-xl bg-[var(--color-near-black)] p-8 text-[var(--color-cream)] sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="font-display-caps text-3xl tracking-[0.04em]">Got a mess like this?</p>
            <p className="mt-2 text-sm text-white/70">Send photos and get a free quote.</p>
          </div>
          <ButtonLink href="/contact" variant="primary" className="mt-5 sm:mt-0">
            Get a Free Quote
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
