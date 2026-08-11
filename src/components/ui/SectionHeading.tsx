import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
            light ? "text-[var(--color-green-soft)]" : "text-[var(--color-green)]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl leading-[1.05] tracking-tight sm:text-4xl md:text-5xl",
          light ? "text-[var(--color-cream)]" : "text-[var(--color-ink)]",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-[var(--color-cream)]/80" : "text-[var(--color-muted)]",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
