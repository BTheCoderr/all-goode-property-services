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
};

/**
 * Add new before/after projects here — no layout changes required.
 * Drop images into /public/jobs and update the paths below.
 */
export const projects: Project[] = [
  {
    title: "Overgrown Patio Cleanup",
    slug: "overgrown-patio-cleanup",
    service: "Yard Cleanup",
    location: "Rhode Island",
    description: "Fire pit patio cleared and usable again.",
    beforeImage: "/jobs/yard-cleanup-before.webp",
    afterImage: "/jobs/yard-cleanup-after.webp",
    beforeAlt: "Before: overgrown fire pit patio with weeds through furniture",
    afterAlt: "After: cleared brick patio with fire pit and outdoor seating",
    beforeCaption: "Weeds taking over the fire pit, furniture and lawn.",
    afterCaption: "Cleared, cleaned and ready to sit outside again.",
    featured: true,
  },
  {
    title: "Side Yard Cleanout",
    slug: "side-yard-cleanout",
    service: "Property Cleanout",
    location: "Rhode Island",
    description: "Narrow side yard cleared of overgrowth and debris.",
    beforeImage: "/jobs/side-yard-before.webp",
    afterImage: "/jobs/side-yard-after.webp",
    beforeAlt: "Before: overgrown side yard with debris along house and fence",
    afterAlt: "After: cleared concrete path beside house and HVAC unit",
    beforeCaption: "Overgrowth, vines and piled debris blocking the walkway.",
    afterCaption: "Path cleared and the area back under control.",
    featured: true,
  },
  {
    title: "Driveway Snow Clearing",
    slug: "driveway-snow-clearing",
    service: "Snow Removal",
    location: "Rhode Island",
    description: "Long driveway opened after a heavy snowfall.",
    beforeImage: "/jobs/snow-before-01.webp",
    afterImage: "/jobs/snow-after-01.webp",
    beforeAlt: "Before: long residential driveway buried in deep snow",
    afterAlt: "After: driveway cleared with snow banks pushed aside",
    beforeCaption: "Deep snow covering the full length of the driveway.",
    afterCaption: "Cleared path to the house — access restored.",
    featured: true,
  },
  {
    title: "Residential Snow Plow",
    slug: "residential-snow-plow",
    service: "Snow Removal",
    location: "Rhode Island",
    description: "Narrow driveway between homes cleared after the storm.",
    beforeImage: "/jobs/snow-before-02.webp",
    afterImage: "/jobs/snow-after-02.webp",
    beforeAlt: "Before: snow-covered driveway blocked from the street",
    afterAlt: "After: driveway plowed with high snowbanks on both sides",
    beforeCaption: "Fresh snow blocking driveway access from the street.",
    afterCaption: "Plowed open with banks pushed back for clear access.",
    featured: true,
  },
  {
    title: "Patio Junk Removal",
    slug: "patio-junk-removal",
    service: "Junk Removal",
    location: "Rhode Island",
    description: "Unwanted toys and bulky items removed from a backyard patio.",
    beforeImage: "/jobs/junk-patio-before.jpeg",
    afterImage: "/jobs/junk-patio-after.jpeg",
    beforeAlt: "Before: unwanted toys and bulky items piled on a backyard patio",
    afterAlt: "After: patio cleared of the unwanted items",
    beforeCaption: "Unwanted toys and bulky items taking up patio space.",
    afterCaption: "Junk removed and the patio opened up again.",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const instagramGridItems = [
  {
    src: "/instagram/post-01.webp",
    alt: "All Goode Property Services work truck on a job site",
  },
  {
    src: "/instagram/post-02.webp",
    alt: "Completed patio cleanup with fire pit seating area",
  },
  {
    src: "/instagram/post-03.webp",
    alt: "Residential driveway cleared after snow removal",
  },
  {
    src: "/instagram/post-04.webp",
    alt: "Overgrown patio before yard cleanup",
  },
  {
    src: "/instagram/post-05.webp",
    alt: "Overgrown property lot before cleanup",
  },
  {
    src: "/instagram/post-06.webp",
    alt: "Driveway snow banks after plowing",
  },
] as const;
