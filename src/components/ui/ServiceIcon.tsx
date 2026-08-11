import { cn } from "@/lib/utils";

type IconName =
  | "junk"
  | "cleanout"
  | "yard"
  | "landscaping"
  | "brush"
  | "maintenance"
  | "snow"
  | "hauling";

const stroke = "currentColor";

export function ServiceIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={cn("h-7 w-7", className)}
    >
      {name === "junk" || name === "hauling" ? (
        <>
          <rect x="6" y="12" width="20" height="12" rx="1.5" stroke={stroke} strokeWidth="1.75" />
          <path d="M9 12V9h14v3" stroke={stroke} strokeWidth="1.75" />
          <path d="M12 16v5M16 15v6M20 16v5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : null}
      {name === "cleanout" ? (
        <>
          <path d="M8 10h16v14H8V10Z" stroke={stroke} strokeWidth="1.75" />
          <path d="M12 10V8h8v2M12 15h8M12 19h6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : null}
      {name === "yard" || name === "brush" ? (
        <>
          <path d="M16 26V14" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" />
          <path d="M16 16c-4-1-6-4-6-7 3 0 5 2 6 5 1-3 3-5 6-5 0 3-2 6-6 7Z" stroke={stroke} strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M7 26h18" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : null}
      {name === "landscaping" ? (
        <>
          <path d="M10 26V18l6-10 6 10v8" stroke={stroke} strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M7 26h18" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M13 18h6" stroke={stroke} strokeWidth="1.5" />
        </>
      ) : null}
      {name === "maintenance" ? (
        <>
          <path d="M14 8h4v5l3 2v11H11V15l3-2V8Z" stroke={stroke} strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M14 22h4" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : null}
      {name === "snow" ? (
        <>
          <path d="M16 7v18M8.5 11.5l15 9M23.5 11.5l-15 9" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16" cy="16" r="2" fill={stroke} />
        </>
      ) : null}
    </svg>
  );
}

export function serviceIconName(slug: string): IconName {
  switch (slug) {
    case "junk-removal":
      return "junk";
    case "property-cleanouts":
      return "cleanout";
    case "yard-cleanup":
      return "yard";
    case "landscaping":
      return "landscaping";
    case "brush-debris":
      return "brush";
    case "property-maintenance":
      return "maintenance";
    case "snow-removal":
      return "snow";
    case "hauling":
      return "hauling";
    default:
      return "maintenance";
  }
}
