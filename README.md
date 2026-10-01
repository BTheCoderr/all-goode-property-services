# All Goode Property Services

<!-- repo-intro:start -->
**Project snapshot:** All Goode Property Services is a production website for junk removal, cleanouts, yard work, landscaping, and property services with structured content and a direct quote-request workflow.

**What it demonstrates:** Next.js · TypeScript · Tailwind CSS · validated forms · local content architecture · Resend email delivery.
<!-- repo-intro:end -->

Production website for All Goode Property Services — Providence, RI junk removal, cleanouts, yard work, landscaping and property services.

**Live site:** https://all-goode-property-services.netlify.app

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Local data files for easy content updates
- Resend for quote-request email delivery

## Develop

```bash
npm install
npm run dev
```

## Production

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Quote form

Quote requests are validated on the client and server, use a honeypot plus a best-effort in-memory rate limit, and are delivered directly through Resend. The production route does **not** write customer details or photos to the server filesystem.

Required production environment variables:

```bash
RESEND_API_KEY=
QUOTE_TO_EMAIL=
QUOTE_FROM_EMAIL=
```

`QUOTE_FROM_EMAIL` should use a sender/domain authorized in Resend. If delivery is unavailable or Resend rejects the request, the site shows a call/text fallback instead of a false success state.

Photos are intentionally kept out of the web form to avoid serverless request-size limits. Customers are directed to text job photos to the business phone number.

## Content edits

- Business info: `src/data/business.ts`
- Services: `src/data/services.ts`
- Projects / before-after: `src/data/projects.ts`
- Reviews themes: `src/data/reviews.ts`
- Photos: see `ASSETS.md`
