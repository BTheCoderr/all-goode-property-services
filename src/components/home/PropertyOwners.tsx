import { propertyOwnerServices } from "@/data/reviews";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PropertyOwners() {
  return (
    <section className="bg-[var(--color-cream)] py-16 sm:py-20">
      <Container>
        <div className="rounded-2xl bg-[var(--color-near-black)] px-6 py-10 text-[var(--color-cream)] sm:px-10 sm:py-12">
          <SectionHeading
            light
            eyebrow="Property Owners"
            title="Got a Property That Needs Attention?"
            subtitle="From tenant cleanouts and junk removal to exterior cleanup and ongoing maintenance help, All Goode helps property owners get spaces cleaned up and ready for what's next."
          />
          <ul className="mt-6 flex flex-wrap gap-2">
            {propertyOwnerServices.map((item) => (
              <li
                key={item}
                className="rounded-md border border-white/15 px-3 py-2 text-sm text-white/85"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/contact?service=Property%20Cleanout" variant="primary">
              Get Property Help
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
