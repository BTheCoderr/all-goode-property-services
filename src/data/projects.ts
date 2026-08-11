export type Project = {
  title: string;
  slug: string;
  service: string;
  location?: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeCaption: string;
  afterCaption: string;
  date?: string;
  featured: boolean;
  /** true until real All Goode job photos replace placeholders */
  needsRealPhotos: boolean;
};

/**
 * Add new before/after projects here — no layout changes required.
 * Drop images into /public/jobs and update the paths below.
 */
export const projects: Project[] = [
  {
    title: "Overgrown Yard Cleanup",
    slug: "overgrown-yard-cleanup",
    service: "Yard Cleanup",
    location: "Providence area",
    description: "Cleared, cleaned and ready to enjoy again.",
    beforeImage: "/jobs/yard-cleanup-before.webp",
    afterImage: "/jobs/yard-cleanup-after.webp",
    beforeAlt: "Before: overgrown yard needing cleanup — replace with real All Goode photo",
    afterAlt: "After: cleared yard after All Goode cleanup — replace with real photo",
    beforeCaption: "Overgrown vegetation, brush and accumulated debris.",
    afterCaption: "Cleared, cleaned and ready to enjoy again.",
    featured: true,
    needsRealPhotos: true,
  },
  {
    title: "Yard Brush & Debris Cleanup",
    slug: "yard-brush-debris-cleanup",
    service: "Brush & Debris Removal",
    location: "Rhode Island",
    description: "Brush and outdoor debris hauled so the property is usable again.",
    beforeImage: "/jobs/yard-cleanup-02-before.webp",
    afterImage: "/jobs/yard-cleanup-02-after.webp",
    beforeAlt: "Before: brush and debris pile — replace with real All Goode photo",
    afterAlt: "After: cleared outdoor area — replace with real All Goode photo",
    beforeCaption: "Brush, branches and outdoor debris piled up.",
    afterCaption: "Loaded up, hauled away and the area cleared.",
    featured: true,
    needsRealPhotos: true,
  },
  {
    title: "Junk Removal Haul",
    slug: "junk-removal-haul",
    service: "Junk Removal",
    location: "Providence area",
    description: "Unwanted items removed without the headache.",
    beforeImage: "/jobs/junk-removal-01.webp",
    afterImage: "/jobs/junk-removal-02.webp",
    beforeAlt: "Junk removal job in progress — replace with real All Goode photo",
    afterAlt: "Completed junk removal — replace with real All Goode photo",
    beforeCaption: "Unwanted furniture, appliances and household junk.",
    afterCaption: "Items loaded and hauled — space cleared.",
    featured: true,
    needsRealPhotos: true,
  },
  {
    title: "Property Cleanout",
    slug: "property-cleanout",
    service: "Property Cleanout",
    location: "Rhode Island",
    description: "Property cleared and ready for what's next.",
    beforeImage: "/jobs/property-cleanout-01.webp",
    afterImage: "/jobs/hauling-01.webp",
    beforeAlt: "Property cleanout before — replace with real All Goode photo",
    afterAlt: "Property cleanout after haul — replace with real All Goode photo",
    beforeCaption: "Cluttered space needing a full cleanout.",
    afterCaption: "Cleared out and ready for the next step.",
    featured: false,
    needsRealPhotos: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const instagramGridItems = [
  {
    src: "/instagram/post-01.webp",
    alt: "All Goode project still — replace with business Instagram photo",
  },
  {
    src: "/instagram/post-02.webp",
    alt: "All Goode project still — replace with business Instagram photo",
  },
  {
    src: "/instagram/post-03.webp",
    alt: "All Goode project still — replace with business Instagram photo",
  },
  {
    src: "/instagram/post-04.webp",
    alt: "All Goode project still — replace with business Instagram photo",
  },
  {
    src: "/instagram/post-05.webp",
    alt: "All Goode project still — replace with business Instagram photo",
  },
  {
    src: "/instagram/post-06.webp",
    alt: "All Goode project still — replace with business Instagram photo",
  },
] as const;
