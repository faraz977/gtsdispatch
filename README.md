# GTS Dispatch

Marketing site for [GTS Dispatch](https://gtsdispatch.us), the truck dispatch company operated by Goodlanes Transportation Services LLC. The live site was unavailable, so this rebuild follows the latest public archive: pages, copy, logo, service photos, equipment art, client marks, and package cards.

## Run locally

```bash
npm install
npm run dev
```

The dev server uses port **3847**:

```bash
npm run dev -- --port 3847
```

Then open [http://127.0.0.1:3847](http://127.0.0.1:3847).

## What’s included

- Home, about, services, fleet, semi, box truck, IFTA, recruiting, payroll, equipment, how we work, packages, FAQ, blog, contact, post-your-truck, and privacy policy
- Contact and post-your-truck forms with validation
- Photos recovered from the archived WordPress media library in `public/images`

The contact form and post-your-truck form send from the browser to **Support@GTSDispatch.us** through [Formspree](https://formspree.io/f/mnnvbwld). The page stays put and shows a confirmation only after Formspree accepts the submission. Call **(832) 699-0420** if a message does not go through. The client portal remains at [portal.gtsdispatch.us](https://portal.gtsdispatch.us).

A few newer hero files from 2025–2026 were referenced on the archived homepage but were never captured by the archive. Those spots use the closest archived truck, highway, and driver photos.
