import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeforeAfterSlider } from "@/components/work/BeforeAfterSlider";

export function BeforeAfterSection() {
  return (
    <section className="bg-[var(--color-surface)] py-16 sm:py-24" id="work">
      <Container>
        <SectionHeading
          title="The Difference Speaks for Itself."
          subtitle="Real properties. Real work. Real results."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {featuredProjects.slice(0, 2).map((project) => (
            <BeforeAfterSlider key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/work"
            className="inline-flex min-h-12 items-center rounded-md bg-[var(--color-ink)] px-6 text-sm font-semibold text-[var(--color-cream)] transition hover:bg-black"
          >
            View More Work
          </Link>
        </div>
      </Container>
    </section>
  );
}
