# Propane Games — site

## Run it

```bash
npm install
npm run dev
```

Opens at http://localhost:4321. Add `-- --host` to test on your phone (same Wi-Fi,
use the "Network" URL it prints).

`npm run build` writes the static site to `dist/`.

## Deploying

Live at https://propanator.com, hosted on GitHub Pages. Every push to `main`
runs `.github/workflows/deploy.yml`, which builds the site and publishes it —
nothing to do by hand. The custom domain is set in the repo's Settings → Pages,
and `public/CNAME` keeps it pinned.

## Adding / editing a project

Projects are Markdown files in `src/content/projects/`. Copy any existing one,
rename it, change the fields. That's it — the projects page, the homepage card
fan, and the contact-page bubbles all read from these files.

```markdown
---
title: "Project Name"
order: 8                      # position in the timeline, low = first
featured: true                # false = projects page only (hides from home/contact)
period: "2025"
tags: ["VR", "Simulation"]
image: "/images/your-image.png"
summary: "One-liner shown on the card."
details: "Longer description shown when the card is opened."
role: "What you did on it."
stack: "Unreal Engine 5, ..."
video: "https://www.youtube.com/embed/VIDEO_ID?rel=0"   # optional, replaces the image
links:                        # optional, as many as you want
  - label: "Trailer"
    href: "https://..."
---

Anything written down here (below the frontmatter) is optional and shows up
as a formatted "notes" section — normal Markdown, so headings, lists, code,
links all work.
```

Images go in `public/images/` and are referenced as `/images/whatever.png`.
Drop in whatever you have, then run `npm run shrink`: anything over 300 KB is
converted to WebP (max 1600 px wide) and every reference in `src/` is updated
for you. Keeps the projects page fast on phones.

## Where things live

- `src/pages/` — one file per route: `index`, `projects`, `contact`, `404`
  (`ai` is parked: dev-only until it's ready).
- `src/layouts/Layout.astro` — nav, footer, and the colour/font variables.
  Change a colour there and it changes everywhere.
- `src/data/site.ts` — your email / Upwork / LinkedIn, used by the footer and
  the contact page.
- `src/components/Portrait.astro` — the photo-with-glow used on home and contact.
- `public/images/og-card.jpg` — the preview card shown when the link is pasted
  into LinkedIn / Discord / iMessage. `Layout.astro` points every page at it.
- `scripts/shrink-images.mjs` — what `npm run shrink` runs.

## Prototype pages

`scroll-test`, `scroll-motion`, `scroll-debug`, `angled-test` in `src/pages/` are
scratch experiments. They open normally in `npm run dev` but redirect home in
the real build, so nothing placeholder ever goes live.
