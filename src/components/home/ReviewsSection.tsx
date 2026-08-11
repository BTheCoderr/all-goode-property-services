import { business } from "@/data/business";
import { reviews } from "@/data/reviews";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ReviewsSection() {
  return (
    <section className="bg-[var(--color-near-black)] py-16 text-[var(--color-cream)] sm:py-24" id="reviews">
      <Container>
        <SectionHeading
          light
          eyebrow="Customer Word"
          title="What Customers Say"
          subtitle="People describe All Goode as responsive, professional, reliable and easy to work with — the kind of crew that shows up when promised."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.id}
              className="rounded-xl border border-white/10 bg-[var(--color-charcoal)] p-6"
            >
              <p className="text-base leading-relaxed text-white/90">“{review.quote}”</p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-green-soft)]">
                {review.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-dashed border-white/20 bg-white/5 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="font-display-caps text-2xl tracking-[0.04em] text-white">
              Have we worked with you?
            </p>
            <p className="mt-1 text-sm text-white/65">
              Leave a review and help the next neighbor hire with confidence.
            </p>
          </div>
          <a
            href={business.reviewUrl || business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 items-center rounded-md bg-[var(--color-green)] px-5 text-sm font-semibold uppercase tracking-[0.06em] text-white hover:bg-[var(--color-green-dark)] sm:mt-0"
          >
            Leave a Review
          </a>
        </div>
      </Container>
    </section>
  );
}
