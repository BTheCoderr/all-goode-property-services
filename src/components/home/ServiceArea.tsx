import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceArea() {
  return (
    <section className="bg-[var(--color-cream)] py-16 sm:py-24" id="service-area">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <SectionHeading
            title={business.serviceAreaHeadline}
            subtitle={`${business.homeBase} is home base. ${business.serviceAreaLabel}.`}
          />
          <div className="rounded-xl border border-black/8 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-green)]">
              Home base
            </p>
            <p className="mt-2 font-display text-3xl text-[var(--color-ink)]">
              {business.homeBase}
            </p>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              Surrounding Rhode Island communities welcome — call or text to confirm your address.
            </p>
            {business.servesNearbyMassachusetts ? (
              <p className="mt-4 text-sm font-medium text-[var(--color-ink)]">
                Rhode Island + Select Nearby Massachusetts Communities
              </p>
            ) : null}
            {business.serviceCities.length > 1 ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {business.serviceCities.map((city) => (
                  <li
                    key={city}
                    className="rounded-md bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-ink)]"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
