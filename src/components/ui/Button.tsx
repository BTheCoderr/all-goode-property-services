import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-center font-semibold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-green)] disabled:opacity-50";

const variants = {
  /** GREEN = TAKE ACTION */
  primary:
    "bg-[var(--color-green)] text-white hover:bg-[var(--color-green-dark)] px-5 py-3 text-sm sm:text-base",
  secondary:
    "bg-[var(--color-charcoal)] text-[var(--color-cream)] hover:bg-[var(--color-near-black)] px-5 py-3 text-sm sm:text-base",
  outline:
    "border border-[var(--color-ink)]/20 bg-transparent text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)]/5 px-5 py-3 text-sm sm:text-base",
  ghost:
    "bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-ink)]/5 px-4 py-2 text-sm",
  light:
    "bg-[var(--color-cream)] text-[var(--color-ink)] hover:bg-white px-5 py-3 text-sm sm:text-base",
  /** Secondary on dark sections */
  onDark:
    "border border-white/30 bg-transparent text-white hover:bg-white/10 px-5 py-3 text-sm sm:text-base",
} as const;

type Variant = keyof typeof variants;

type Common = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: Common &
  Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children"> & {
    href: string;
  }) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
