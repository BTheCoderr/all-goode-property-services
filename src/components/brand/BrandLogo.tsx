import Image from "next/image";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Visual size hint — layout stays stable when hi-res logo replaces the temp asset */
  size?: "sm" | "md" | "lg" | "hero";
  priority?: boolean;
};

const sizes = {
  sm: { className: "h-10 w-10", px: 40 },
  md: { className: "h-12 w-12", px: 48 },
  lg: { className: "h-16 w-16", px: 64 },
  hero: { className: "h-28 w-28 sm:h-36 sm:w-36", px: 144 },
} as const;

/**
 * Central logo component.
 * Drop the official high-res/vector file over:
 *   public/brand/all-goode-logo.png
 * No layout changes required.
 */
export function BrandLogo({ className, size = "md", priority = false }: BrandLogoProps) {
  const dim = sizes[size];

  return (
    <span className={cn("relative inline-flex shrink-0 overflow-hidden rounded-full bg-[var(--color-near-black)]", dim.className, className)}>
      <Image
        src={business.logoPath}
        alt={business.name}
        width={dim.px}
        height={dim.px}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </span>
  );
}
