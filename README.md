# Propane Games — site

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:4321

## Build
```bash
npm run build
```
Static output goes to `dist/`.

## Deploy
1. Push this folder to a GitHub repo.
2. Connect the repo to Cloudflare Pages or Netlify (both auto-detect Astro).
   - Build command: `npm run build`
   - Output directory: `dist`
3. Add your custom domain in the host's dashboard and point DNS as instructed.

## Structure
- `src/pages/` — one file per route (index, projects, ai, contact)
- `src/layouts/Layout.astro` — shared nav/footer/global styles
- Colors, fonts, and spacing are all defined as CSS variables at the top of `Layout.astro` — edit there to retheme.

## Content to fill in
- Projects page uses placeholder role/stack copy pulled from your bio — tighten with real specifics per project (dates, client names if allowed, screenshots).
- Swap in actual project screenshots/renders — currently text-only.
- Demo reel embeds reuse the two YouTube videos from the old Wix site — replace with updated reels if you have them.

## Adding real project images
Drop image files into `public/images/` (e.g. `public/images/pcvr.jpg`), then in
`src/pages/projects.astro` set that project's `image` field to `/images/pcvr.jpg`.
Leave it as `""` to keep the gradient placeholder.

## Scroll-snap prototype
`/scroll-test` is a standalone Apple-style scroll page (full-bleed sections, dot nav
on the right, IntersectionObserver-driven active state). Not linked from the main nav —
open it directly at `localhost:4321/scroll-test`. If you like it, the same section
data/structure can replace the current `projects.astro` grid, or be adapted into a
single "featured project" scroll experience on the homepage.
