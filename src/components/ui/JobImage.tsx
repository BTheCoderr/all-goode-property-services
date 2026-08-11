import Image from "next/image";
import { cn } from "@/lib/utils";

type JobImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  needsRealPhotos?: boolean;
};

/**
 * Optimized image wrapper. When needsRealPhotos is true, a small corner
 * label reminds editors these are replaceable placeholders — not stock photos.
 */
export function JobImage({
  src,
  alt,
  className,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  needsRealPhotos = false,
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
      {needsRealPhotos ? (
        <span className="pointer-events-none absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white/90">
          Replace photo
        </span>
      ) : null}
    </div>
  );
}
