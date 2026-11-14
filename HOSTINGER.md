# Deploy to Hostinger

Requires Node.js 22+ for building. The exported website needs only static hosting.

1. Clone this repository on your computer or server.
2. Run `npm ci` then `npm run build` (or `sh scripts/hostinger-build.sh`).
3. Upload the **contents** of `out/` into Hostinger's `public_html/` directory. Keep the `_next` directory and all nested route folders intact.
4. For updates: `git pull --ff-only`, rebuild, and replace the deployed files with the new `out/` contents.

A Git pull alone does not build or install the website. Do not expose the repository, node_modules, or environment files in public_html.

Home and About are implemented. Services and Contact designs are still pending. Contact and WhatsApp remain unconfigured in lib/site-config.ts. Supply confirmed details before enabling those actions. Image attribution is retained on the linked image credits page. The supplied logo was prepared as a transparent asset; replace it with the original transparent master if exact artwork fidelity is required.
