# Godrej Florenne — landing page (Next.js)

A single-page lead-generation site for Godrej Florenne, Soukya Road,
Whitefield. Built with Next.js 14 (App Router) and TypeScript, no CSS
framework — just plain CSS with a small design-token system.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. To create a production build:

```bash
npm run build
npm start
```

## Deploy

The fastest path is [Vercel](https://vercel.com) (made by the Next.js
team, free tier available): push this folder to a GitHub repo, import it
on Vercel, and it deploys automatically. Netlify and any Node hosting
also work.

## Before you go live — things to swap in

1. **Real photos.** `app/components/ArchMotif.tsx` is a placeholder line
   drawing standing in for a hero photo/render. Replace it with an
   `<Image>` of the actual project once you have renders or site photos.
2. **`og-image.jpg`** — add a 1200×630px image to `/public/og-image.jpg`.
   This is what shows up when the link is shared on WhatsApp, Facebook,
   etc. Right now nothing is there, so social previews will be blank.
3. **`favicon.ico`** — add one to `/public/favicon.ico`.
4. **Domain** — update `SITE_URL` in `app/layout.tsx` to your real
   domain once you have one (needed for correct Open Graph/canonical
   tags).
5. **Lead form** — `app/components/LeadForm.tsx` currently opens
   WhatsApp with the enquiry pre-filled (no backend needed, works
   immediately). If you'd rather have leads land in a Google Sheet, CRM,
   or email inbox, that submit handler is the one place to change —
   happy to wire that up if you tell me which tool you use.
6. **Legal line in the footer** — the "not an official Godrej
   Properties website" disclaimer is there because this is being built
   by a channel partner/broker, not Godrej itself. Keep something like
   this in place — RERA rules require accurate representation of who's
   advertising the project.

## SEO already in place

- Descriptive `<title>` / meta description targeting "Godrej Florenne",
  "Soukya Road", "Whitefield villas" etc.
- Open Graph + Twitter card tags for link previews.
- JSON-LD structured data (`Residence` schema) for richer Google
  results.
- Semantic HTML (`header`, `main`, `section`, `address`, `dl`/`dt`/`dd`
  for facts) rather than div soup — helps both accessibility and SEO.
- One `<h1>`, logical heading order, descriptive link text.

Once it's live, submit the URL in Google Search Console and it'll start
getting indexed — that plus running ads/social pointing at the link is
what actually drives the leads in; the meta tags alone won't.
