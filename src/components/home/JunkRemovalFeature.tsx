import { brandPhrases, business } from "@/data/business";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JobImage } from "@/components/ui/JobImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { smsHref } from "@/lib/utils";

const steps = [
  { n: "1", title: "Send Us Photos", body: "Text or upload a few clear pictures of the job." },
  { n: "2", title: "Get Your Quote", body: "We'll review the details and give you a clear price." },
  { n: "3", title: "We Haul It Away", body: "We show up, load it up, and get it gone." },
];

const junkJobs = [
  { name: "Front Yard Cleanout", image: "front-yard", before: "Discarded furniture and bagged junk filling a front yard", after: "Front yard after furniture and bagged junk were removed" },
  { name: "Fence-Line Junk Removal", image: "fence", before: "Discarded outdoor equipment and debris piled against a fence", after: "Fence line after the piled equipment and debris were removed" },
  { name: "Mattress & Carpet Pickup", image: "curb", before: "Mattresses and carpet waiting for pickup beside the sidewalk", after: "Sidewalk after mattress and carpet pickup" },
  { name: "Patio Cleanout", image: "patio", before: "Toys, furniture and household items piled on a patio", after: "Patio with space opened up after junk removal" },
];

function JunkJobPhotos({ job }: { job: (typeof junkJobs)[number] }) {
  return (
    <figure>
      <div className="grid grid-cols-2 gap-3">
        {(["before", "after"] as const).map((stage) => (
          <div key={stage} className="relative">
            <JobImage
              src={`/jobs/junk-${job.image}-${stage}.jpeg`}
              alt={job[stage]}
              className="aspect-[9/16] rounded-xl"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <span className="absolute left-2 top-2 rounded bg-black/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              {stage}
            </span>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 font-semibold text-white">{job.name}</figcaption>
    </figure>
  );
}

export function JunkRemovalFeature() {
  return (
    <section
      className="bg-[var(--color-near-black)] py-16 text-[var(--color-cream)] sm:py-24"
      id="junk-removal"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent-junk)]">
              Junk Removal
            </p>
            <SectionHeading
              light
              title="Need It Gone?"
              subtitle="Old furniture. Appliances. Yard debris. Moving leftovers. Property cleanouts. If it's taking up space and you need it out of the way, send All Goode a photo and get a quote."
            />
            <p className="mt-3 font-display-caps text-lg tracking-[0.06em] text-[var(--color-green-soft)]">
              {brandPhrases.needItGone}
            </p>
            <ol className="mt-8 space-y-4">
              {steps.map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-green)] font-display text-lg text-white">
                    {step.n}
                  </span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="text-sm text-white/70">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="/contact?service=Junk%20Removal"
                variant="primary"
                className="uppercase tracking-[0.06em]"
              >
                Send Photos for a Quote
              </ButtonLink>
              <a
                href={smsHref(
                  business.phoneSms,
                  "Hi All Goode — I need junk removed. Photos coming next.",
                )}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-5 text-sm font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-white/10"
              >
                Text Photos
              </a>
            </div>
          </div>
          <JunkJobPhotos job={junkJobs[0]} />
        </div>
        <details className="mt-8">
          <summary className="cursor-pointer rounded-md border border-white/30 p-4 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4">
            More junk removal before &amp; after photos
          </summary>
          <div className="mt-6 grid gap-8 lg:grid-cols-3">
            {junkJobs.slice(1).map((job) => <JunkJobPhotos key={job.image} job={job} />)}
          </div>
        </details>
      </Container>
    </section>
  );
}
