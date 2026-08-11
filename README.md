# All Goode Property Services

Production website for All Goode Property Services — Providence, RI junk removal, cleanouts, yard work, landscaping and property services.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Local data files for easy content updates

## Develop

```bash
npm install
npm run dev
```

## Production

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Quote form

Submissions are validated, rate-limited, and saved to:

`data/quote-submissions/`

Optional email relay via Resend:

```bash
RESEND_API_KEY=
QUOTE_TO_EMAIL=
QUOTE_FROM_EMAIL=
```

## Content edits

- Business info: `src/data/business.ts`
- Services: `src/data/services.ts`
- Projects / before-after: `src/data/projects.ts`
- Reviews themes: `src/data/reviews.ts`
- Photos: see `ASSETS.md`
