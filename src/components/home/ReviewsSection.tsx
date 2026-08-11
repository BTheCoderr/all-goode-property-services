import { business } from "@/data/business";
import { reviews } from "@/data/reviews";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ReviewsSection() {
  return (
    <section className="bg-[var(--color-surface)] py-16 sm:py-24" id="reviews">
      <Container>
        <SectionHeading
          title="What Customers Say"
          subtitle="People describe All Goode as responsive, professional, reliable and easy to work with — the kind of crew that shows up when promised."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.id}
              className="rounded-xl border border-black/8 bg-white p-6"
            >
              <p className="text-base leading-relaxed text-[var(--color-ink)]">
                “{review.quote}”
              </p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {review.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-dashed border-black/15 bg-white/60 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="font-display text-2xl text-[var(--color-ink)]">
              Have we worked with you?
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Leave a review and help the next neighbor hire with confidence.
            </p>
          </div>
          {business.reviewUrl ? (
            <a
              href={business.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-12 items-center rounded-md bg-[var(--color-green)] px-5 text-sm font-semibold text-white sm:mt-0"
            >
              Leave a Review
            </a>
          ) : (
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-12 items-center rounded-md bg-[var(--color-green)] px-5 text-sm font-semibold text-white sm:mt-0"
            >
              Leave a Review
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
