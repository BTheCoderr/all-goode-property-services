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

Real All Goode job photos are installed under `public/jobs/` and `public/instagram/`.

The About sections use completed job photos. No owner portrait is displayed.
The `junk-*-before.jpeg` and `junk-*-after.jpeg` files are owner-supplied pairs
for front yard, fence line, curbside and patio junk removal.

To add more before/after projects, drop images into `/public/jobs` and add an entry in `src/data/projects.ts`.

## Add a new before/after project

Edit `src/data/projects.ts` using real before and after photos from the same job.

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
