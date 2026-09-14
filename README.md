# Propane Games — site

## Run it

```bash
npm install
npm run dev
```

Opens at http://localhost:4321. Add `-- --host` to test on your phone (same Wi-Fi,
use the "Network" URL it prints).

`npm run build` writes the static site to `dist/`. Hosting auto-detects Astro —
build command `npm run build`, output directory `dist`.

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

## Where things live

- `src/pages/` — one file per route: `index`, `projects`, `ai`, `contact`.
- `src/layouts/Layout.astro` — nav, footer, and the colour/font variables.
  Change a colour there and it changes everywhere.
- `src/data/site.ts` — your email / Upwork / LinkedIn, used by the footer and
  the contact page.
- `src/components/Portrait.astro` — the photo-with-glow used on home and contact.

## Prototype pages

`scroll-test`, `scroll-motion`, `scroll-debug`, `angled-test` in `src/pages/` are
scratch experiments. They open normally in `npm run dev` but redirect home in
the real build, so nothing placeholder ever goes live.
