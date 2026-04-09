# Parth Porwal Portfolio

A cinematic portfolio website for Parth Porwal, built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and accessible smooth scrolling.

## Run locally

```bash
npm install
npm run dev
```

The app starts on `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Content structure

- `src/content/projects.json`: CMS-ready project content
- `src/content/site.ts`: site-wide copy and profile metadata
- `src/lib/projects.ts`: mapping layer for future CMS migration

## Future CMS migration

1. Replace `src/content/projects.json` with fetched CMS data.
2. Keep the output shape from `src/lib/projects.ts`, or map the CMS response there.
3. Connect the contact form to a server action or external form endpoint.

## Deployment notes

- Set `NEXT_PUBLIC_SITE_URL` in production so `sitemap.xml` and `robots.txt` use the correct domain.
- YouTube thumbnails are loaded from `i.ytimg.com`, which is already whitelisted in `next.config.ts`.
