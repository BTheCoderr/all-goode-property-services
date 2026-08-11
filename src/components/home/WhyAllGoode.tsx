import { whyPoints } from "@/data/reviews";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyAllGoode() {
  return (
    <section className="bg-[var(--color-cream)] py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Good Work Starts With Showing Up."
          subtitle="Customers hire All Goode when they want the job handled — professionally, efficiently, and without the stress."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-black/8 bg-white p-6"
            >
              <div className="mb-4 h-1.5 w-10 rounded-full bg-[var(--color-green)]" />
              <h3 className="font-display text-xl tracking-tight text-[var(--color-ink)]">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{point.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
