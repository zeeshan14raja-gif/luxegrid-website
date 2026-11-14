# LuxeGrid Construction & Marketing

Reference-led Next.js 16 / React 19 / TypeScript / Tailwind CSS 4 website with GSAP and ScrollTrigger.

## Current scope

The supplied Home and About references have been implemented. The owner explicitly asked to wait for approved Services and Contact references before laying out those pages. Those two routes, the contact form, and FAQ remain pending. Services navigation currently opens the six-card Home section. Service detail and contact actions are visibly unavailable rather than pointing to nonexistent pages.

The owner-supplied gold logo is now used in the header and footer as a prepared transparent asset. No invented contact information, listings, projects, testimonials, or achievements have been added. See HOSTINGER.md for deployment.

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

## Next steps after receiving the missing references

1. Implement `/services` and `/contact` from the supplied approved images.
2. Add the specified FAQ interactions and enquiry form validation.
3. Configure a verified enquiry recipient or submission service before enabling sending.
4. Insert the original logo and photographic assets only when supplied and authorized.
5. Enable the corresponding page flags, then repeat visual and functional checks.

The preview is private and `robots` indexing is disabled for review.
