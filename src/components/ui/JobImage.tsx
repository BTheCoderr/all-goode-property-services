import Image from "next/image";
import { cn } from "@/lib/utils";

type JobImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/** Optimized image wrapper for real job photos. */
export function JobImage({
  src,
  alt,
  className,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: JobImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-[var(--color-ink)]", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
