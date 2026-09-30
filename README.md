# All Goode Property Services

<!-- repo-intro:start -->
**Project snapshot:** All Goode Property Services is a production website for junk removal, cleanouts, yard work, landscaping, and property services with structured content and a protected quote workflow.

**What it demonstrates:** Next.js · TypeScript · Tailwind CSS · rate-limited forms · local content architecture · Resend-ready email.
<!-- repo-intro:end -->

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
