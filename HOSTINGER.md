# Deploy to Hostinger

Requires Node.js 22+ for building. The exported website needs only static hosting.

1. Clone this repository on your computer or server.
2. Run `npm ci` then `npm run build` (or `sh scripts/hostinger-build.sh`).
3. Upload the **contents** of `out/` into Hostinger's `public_html/` directory. Keep the `_next` directory and all nested route folders intact.
4. For updates: `git pull --ff-only`, rebuild, and replace the deployed files with the new `out/` contents.

A Git pull alone does not build or install the website. Do not expose the repository, node_modules, or environment files in public_html.

Home, About, Services, and Contact are implemented. Contact and WhatsApp remain unconfigured in lib/site-config.ts. Supply confirmed details before enabling those actions. Image attribution is retained on the linked image credits page. The supplied logo was prepared as a transparent asset; replace it with the original transparent master if exact artwork fidelity is required.

## Enquiry email

The export includes `api/enquiry.php`. Upload this folder too and keep PHP enabled (PHP 8.1+). The handler sends to contact@luxegridpk.com with the visitor's validated email as Reply-To. Ensure that mailbox exists and Hostinger permits PHP mail for this domain. Configure SPF/DKIM through your email provider. After deployment, send one enquiry and check the inbox and spam folder. PHP accepting a message does not prove inbox delivery; if delivery fails, configure authenticated SMTP with your mailbox provider. Never commit mailbox credentials to GitHub.

The private Sites preview cannot execute PHP. There the form opens a prefilled email in the visitor's email app, with an explicit instruction to send it. Automatic form delivery runs on Hostinger after deployment; it has not been verified against the live mailbox.
