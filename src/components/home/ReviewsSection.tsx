import { business } from "@/data/business";
import { reviews } from "@/data/reviews";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const featuredReviews = reviews.slice(0, 6);
const moreReviews = reviews.slice(6);

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <figure className="break-inside-avoid rounded-xl border border-white/10 bg-[var(--color-charcoal)] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
      <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-green-soft)]">
        <span
          aria-hidden="true"
          className="flex size-6 items-center justify-center rounded-full bg-[#1877F2] font-sans text-sm font-bold lowercase text-white"
        >
          f
        </span>
        {review.source}
      </div>
      <blockquote>
        <p className="text-base leading-relaxed text-white/90">“{review.quote}”</p>
      </blockquote>
      <figcaption className="mt-5 border-t border-white/10 pt-4 font-semibold text-white">
        {review.attribution}
      </figcaption>
    </figure>
  );
}

export function ReviewsSection() {
  return (
    <section
      className="bg-[var(--color-near-black)] py-16 text-[var(--color-cream)] sm:py-24"
      id="reviews"
    >
      <Container>
        <SectionHeading
          light
          eyebrow="Real Customer Recommendations"
          title="Trusted to Get It Done Right"
          subtitle="From quick pickups to difficult moves and full property cleanups, customers count on All Goode for honest pricing, dependable service and work that goes beyond expectations."
        />

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-green-soft)]/35 bg-[var(--color-green)]/15 px-4 py-2 text-sm font-semibold text-white">
          <span
            aria-hidden="true"
            className="flex size-5 items-center justify-center rounded-full bg-[var(--color-green-soft)] text-xs text-[var(--color-near-black)]"
          >
            ✓
          </span>
          {reviews.length} customer recommendations
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <details className="group mt-8">
          <summary className="mx-auto flex min-h-12 w-fit cursor-pointer list-none items-center gap-2 rounded-md border border-white/20 px-5 text-sm font-semibold uppercase tracking-[0.06em] text-white transition hover:border-[var(--color-green-soft)] hover:text-[var(--color-green-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-green-soft)] [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Read all {reviews.length} reviews</span>
            <span className="hidden group-open:inline">Show fewer reviews</span>
            <span aria-hidden="true" className="text-lg leading-none transition group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="mt-8 columns-1 gap-5 md:columns-2 xl:columns-3">
            {moreReviews.map((review) => (
              <div key={review.id} className="mb-5">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </details>

        <div className="mt-10 rounded-xl border border-dashed border-white/20 bg-white/5 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="font-display-caps text-2xl tracking-[0.04em] text-white">
              Have we worked with you?
            </p>
            <p className="mt-1 text-sm text-white/65">
              Share your experience and help the next neighbor hire with confidence.
            </p>
          </div>
          <a
            href={business.reviewUrl || business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 items-center rounded-md bg-[var(--color-green)] px-5 text-sm font-semibold uppercase tracking-[0.06em] text-white hover:bg-[var(--color-green-dark)] sm:mt-0"
          >
            {business.reviewUrl ? "Leave a Review" : "Connect on Instagram"}
          </a>
        </div>
      </Container>
    </section>
  );
}
