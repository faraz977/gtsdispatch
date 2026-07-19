# GTS Dispatch

Next.js site for [gtsdispatch.us](https://gtsdispatch.us), migrated from WordPress for deployment on Vercel.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Static content exported from WordPress REST API

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Refresh WordPress content

While WordPress is still live, you can re-export pages and posts:

```bash
npm run migrate:wp
```

This updates:

- `src/content/pages.json`
- `src/content/posts.json`

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo in [Vercel](https://vercel.com/new)
3. Deploy with default Next.js settings
4. Add your custom domain `gtsdispatch.us`
5. Point DNS from Hostinger to Vercel

## Project structure

- `src/app/` — routes and pages
- `src/components/` — shared UI
- `src/content/` — exported WordPress content
- `scripts/migrate-wp.mjs` — WordPress export script

## Notes

- WooCommerce pages (`checkout`, `my-account`) redirect to `/contact`
- The homepage uses a custom React layout inspired by a startup landing theme
- Inner pages render migrated WordPress HTML content
