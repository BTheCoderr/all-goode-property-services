# Asset Replacement Guide

Instagram media could not be downloaded into the project (login wall / hotlink restrictions). The site ships with **clearly labeled branded placeholders** — not stock photography.

## Drop real photos here

| Path | Use |
| --- | --- |
| `public/jobs/hero-junk-removal.webp` | Homepage hero |
| `public/jobs/junk-removal-01.webp` | Junk removal feature / cards |
| `public/jobs/junk-removal-02.webp` | Junk gallery pair |
| `public/jobs/property-cleanout-01.webp` | Cleanouts |
| `public/jobs/yard-cleanup-before.webp` | Before/after #1 before |
| `public/jobs/yard-cleanup-after.webp` | Before/after #1 after |
| `public/jobs/yard-cleanup-02-before.webp` | Before/after #2 before |
| `public/jobs/yard-cleanup-02-after.webp` | Before/after #2 after |
| `public/jobs/landscaping-01.webp` | Landscaping |
| `public/jobs/brush-debris-01.webp` | Brush & debris |
| `public/jobs/property-maintenance-01.webp` | Maintenance |
| `public/jobs/snow-removal-01.webp` | Snow |
| `public/jobs/hauling-01.webp` | Hauling |
| `public/about/owner.webp` | Approved owner/team photo |
| `public/brand/logo.svg` | Logo (SVG already matches IG mark) |
| `public/instagram/post-01.webp` … `post-06.webp` | Curated IG grid |

Keep the same filenames and the site updates automatically.

## Add a new before/after project

Edit `src/data/projects.ts`:

```ts
{
  title: "Basement Cleanout",
  slug: "basement-cleanout",
  service: "Property Cleanout",
  location: "Providence",
  description: "Basement cleared and ready.",
  beforeImage: "/jobs/your-before.webp",
  afterImage: "/jobs/your-after.webp",
  beforeAlt: "Before: cluttered basement",
  afterAlt: "After: cleared basement",
  beforeCaption: "Years of stored items.",
  afterCaption: "Cleared and usable again.",
  featured: true,
  needsRealPhotos: false,
}
```

Set `needsRealPhotos: false` once real photos are in place (hides the “Replace photo” chip).

## Business config

Edit `src/data/business.ts` for phone, Instagram, service area, review URL, website URL, and Massachusetts coverage flag.
