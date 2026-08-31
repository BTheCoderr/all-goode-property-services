export type ServiceSlug =
  | "junk-removal"
  | "property-cleanouts"
  | "yard-cleanup"
  | "landscaping"
  | "brush-debris"
  | "property-maintenance"
  | "snow-removal"
  | "hauling";

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  cardDescription: string;
  pageDescription: string;
  image: string;
  imageAlt: string;
  href: string;
  featured: boolean;
  formValue: string;
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "junk-removal",
    name: "Junk Removal",
    shortName: "Junk Removal",
    cardDescription:
      "Furniture, appliances, household junk, unwanted items and debris removed without the headache.",
    pageDescription:
      "Old furniture, appliances, yard debris, moving leftovers — if it's taking up space and you need it gone, All Goode can haul it away. Send photos for a straightforward quote.",
    image: "/jobs/junk-removal-01.webp",
    imageAlt: "Overgrown property lot with debris — All Goode junk and cleanout work",
    href: "/services/junk-removal",
    featured: true,
    formValue: "Junk Removal",
    keywords: [
      "junk removal Providence RI",
      "junk hauling Providence RI",
    ],
  },
  {
    slug: "property-cleanouts",
    name: "Property & Moving Cleanouts",
    shortName: "Property Cleanouts",
    cardDescription:
      "Moving out, clearing a property, preparing a rental or just ready to get the clutter gone.",
    pageDescription:
      "Whether you're moving, turning over a rental, or clearing a property for the next chapter, All Goode handles cleanouts so you don't have to.",
    image: "/jobs/property-cleanout-01.webp",
    imageAlt: "Cluttered patio with tarp and debris before property cleanout",
    href: "/services/property-cleanouts",
    featured: true,
    formValue: "Property Cleanout",
    keywords: ["property cleanout Providence RI"],
  },
  {
    slug: "yard-cleanup",
    name: "Yard Cleanups",
    shortName: "Yard Cleanup",
    cardDescription:
      "Overgrowth, leaves, brush, debris and neglected outdoor areas cleaned up and brought back under control.",
    pageDescription:
      "Overgrown yards, leaf piles, brush and outdoor clutter — we clean it up so the property looks cared for again.",
    image: "/jobs/yard-cleanup-after.webp",
    imageAlt: "Cleared brick patio and fire pit after All Goode yard cleanup",
    href: "/services/yard-cleanup",
    featured: true,
    formValue: "Yard Cleanup",
    keywords: ["yard cleanup Providence RI"],
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    shortName: "Landscaping",
    cardDescription:
      "Straightforward landscaping and exterior property work that keeps properties looking cared for.",
    pageDescription:
      "Practical landscaping and exterior work for homeowners and property owners who want the outside looking maintained — without the runaround.",
    image: "/jobs/landscaping-01.webp",
    imageAlt: "Finished outdoor patio seating area after landscaping cleanup",
    href: "/services/landscaping",
    featured: true,
    formValue: "Landscaping",
    keywords: ["landscaping Providence RI"],
  },
  {
    slug: "brush-debris",
    name: "Brush & Debris Removal",
    shortName: "Brush & Debris",
    cardDescription:
      "Branches, yard waste and unwanted outdoor debris loaded up and hauled away.",
    pageDescription:
      "Storm debris, cut branches, brush piles and yard waste — loaded up and hauled so your property is clear again.",
    image: "/jobs/brush-debris-01.webp",
    imageAlt: "Overgrown brush growing through chain-link fence before removal",
    href: "/services/brush-debris",
    featured: true,
    formValue: "Brush/Debris Removal",
    keywords: ["brush removal Providence RI", "debris removal Providence RI"],
  },
  {
    slug: "property-maintenance",
    name: "Property Maintenance",
    shortName: "Property Maintenance",
    cardDescription:
      "Help keeping residential and investment properties clean, functional and maintained.",
    pageDescription:
      "General property maintenance help for homes and investment properties — the jobs that keep a place clean, functional and looking looked-after.",
    image: "/jobs/property-maintenance-01.webp",
    imageAlt: "Property maintenance tools staged on a residential patio job",
    href: "/services/property-maintenance",
    featured: true,
    formValue: "Property Maintenance",
    keywords: ["property maintenance Providence RI"],
  },
  {
    slug: "snow-removal",
    name: "Snow Removal",
    shortName: "Snow Removal",
    cardDescription: "Seasonal snow clearing when winter hits.",
    pageDescription:
      "Seasonal snow clearing for driveways, walks and property access when Rhode Island winter shows up.",
    image: "/jobs/snow-removal-01.webp",
    imageAlt: "Residential driveway cleared after All Goode snow removal",
    href: "/services/snow-removal",
    featured: true,
    formValue: "Snow Removal",
    keywords: ["snow removal Providence RI"],
  },
  {
    slug: "hauling",
    name: "Hauling",
    shortName: "Hauling",
    cardDescription:
      "Need something loaded and taken away? Straightforward hauling for property jobs.",
    pageDescription:
      "Hauling support for property cleanups, junk loads and debris — get it loaded and gone.",
    image: "/jobs/hauling-01.webp",
    imageAlt: "All Goode Property Services work truck on a residential job site",
    href: "/contact?service=Other",
    featured: false,
    formValue: "Other",
    keywords: ["hauling Providence RI"],
  },
];

export const homepageServices = services.filter((s) =>
  [
    "junk-removal",
    "property-cleanouts",
    "yard-cleanup",
    "landscaping",
    "brush-debris",
    "property-maintenance",
    "snow-removal",
  ].includes(s.slug),
);

export const quoteServiceOptions = [
  "Junk Removal",
  "Property Cleanout",
  "Yard Cleanup",
  "Landscaping",
  "Brush/Debris Removal",
  "Property Maintenance",
  "Snow Removal",
  "Other",
] as const;

export const timeframeOptions = [
  "As Soon As Possible",
  "This Week",
  "This Month",
  "Just Getting Pricing",
] as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
