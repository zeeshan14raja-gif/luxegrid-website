# LuxeGrid Construction & Marketing

Reference-led Next.js 16 / React 19 / TypeScript / Tailwind CSS 4 website with GSAP and ScrollTrigger.

## Current scope

All four routes are implemented. Home and About follow the supplied references; the owner authorized simple Services and Contact pages in the same theme. The compact logo appears in the sticky header and footer. Services includes six descriptions and accessible FAQ disclosures. Contact provides native form validation; sending stays disabled until a verified enquiry endpoint is configured in lib/site-config.ts. No enquiries are stored or falsely reported as sent.

## Local development

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For an alternate port: `npm run dev -- --port 3001`.

```sh
npm run build
npm run typecheck
```

`next build` exports production HTML and assets to `out/`. Host that directory on any static host. The managed preview adapter translates Vite-style host/port flags to Next.js flags.

## Configuration

- `lib/site-config.ts`: confirmed email, telephone, WhatsApp, address, story video, enquiry endpoint, and social destinations. All unverified values remain `null`.
- `lib/navigation.ts`: approved page availability. Enable Services and Contact only after their references are supplied and those routes are implemented.
- `app/globals.css`: reference colors, typography, desktop geometry, and responsive behavior.
- `components/Animations.tsx`: progressive GSAP entrance, image reveal and parallax behavior. Respects reduced-motion preferences and cleans up on route changes.
- `.openai/hosting.json`: the existing private Site identity. Reuse it; do not register another Site.

The story CTA opens the supplied About story. No unprovided story video has been fabricated. There is no enquiry submission handler and no simulated success message.

## Assets and fidelity

The supplied screenshots were visual references, not used as page backgrounds. All sections are actual responsive components. The desktop Home keeps the exact six-card row and prescribed section order. Mobile uses a horizontal service-card strip.

Original individual photographic assets and exact font files were not supplied. The hero, interior, and architectural detail are generated substitutes; other images are illustrative stock. The Islamabad photograph is credited at `public/image-credits.html`. Nothing is presented as a completed LuxeGrid project or listing. Locally served Baskervville and DM Sans are font substitutes from Google Fonts.

The Home desktop capture is at 1024 pixels wide; About is at 941 pixels wide, matching the supplied reference widths. Differences in images, font metrics, and omitted logos remain. This is not represented as pixel-perfect.

## Remaining configuration

Supply a verified enquiry recipient/service endpoint and contact details before enabling sending. Review the live domain metadata before public launch. All four routes are available.

The preview is private and `robots` indexing is disabled for review.
