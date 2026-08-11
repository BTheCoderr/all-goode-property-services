# Asset Replacement Guide

## Official logo

The owner-supplied logo is installed and used sitewide via `BrandLogo`.

| Path | Notes |
| --- | --- |
| `public/brand/all-goode-logo.png` | **Active logo** used by `BrandLogo` / header / footer / SEO |
| `public/brand/all-goode-logo-official.png` | Same official file kept as a clear backup |
| `public/brand/all-goode-logo-square.png` | Square padded version for icons |
| `public/brand/all-goode-logo-opaque.jpg` | Opaque near-black backed version |
| `public/brand/all-goode-logo-source.png` | Older Instagram crop (reference only) |

To update later: overwrite `public/brand/all-goode-logo.png` with a higher-res or vector export using the same filename — no layout changes needed.

Do **not** redraw or reinterpret the logo in code. Do not invent horizontal/icon/mono variants until the owner supplies them.

## Job / project photos

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
| `public/instagram/post-01.webp` … `post-06.webp` | Curated IG grid |

Current job images are **branded placeholders**, not stock photography. Replace with real All Goode work photos.

## Add a new before/after project

Edit `src/data/projects.ts` and set `needsRealPhotos: false` once real photos are in place.

## Business config

Edit `src/data/business.ts` for phone, Instagram, service area, review URL, website URL, logo path, and Massachusetts coverage flag.

## Brand colors

Defined in `src/app/globals.css` and `brandColors` in `src/data/business.ts`:

- Near Black `#070807`
- All Goode Green `#2F7D32`
- Deep Forest `#14521E`
- Fresh Green `#5F963F`
- Warm Off White `#F5F6F2`
- Charcoal `#20231F`
- Tiny accents only: junk orange, snow blue
