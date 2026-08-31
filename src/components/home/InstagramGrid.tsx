import Image from "next/image";
import { business } from "@/data/business";
import { instagramGridItems } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function InstagramGrid() {
  return (
    <section className="bg-[var(--color-surface)] py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="See What We're Working On"
            subtitle="Follow the business Instagram for recent jobs, cleanups and hauls."
          />
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-black/12 px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-black/5"
          >
            {business.instagramHandle}
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {instagramGridItems.map((item) => (
            <a
              key={item.src}
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg bg-[var(--color-ink)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
                View on Instagram
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
