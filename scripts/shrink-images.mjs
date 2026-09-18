// Shrinks oversized images in public/images so the site stays fast.
//
//   npm run shrink
//
// Any PNG/JPG over LIMIT_KB is re-encoded as WebP (max MAX_WIDTH px wide),
// the original is deleted, and every "/images/name.png" reference in src/
// is rewritten to "/images/name.webp". Files already under the limit are
// left alone. The social card (og-card.jpg) is always kept as JPEG because
// LinkedIn and friends don't reliably accept WebP previews.
import sharp from "sharp";
import { readdirSync, statSync, readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { join, extname, basename } from "node:path";

const DIR = "public/images";
const LIMIT_KB = 300;
const MAX_WIDTH = 1600;
const QUALITY = 82;
const KEEP = new Set(["og-card.jpg"]);

const kb = (p) => Math.round(statSync(p).size / 1024);
const sourceFiles = readdirSync("src", { recursive: true })
  .map((f) => join("src", f))
  .filter((f) => /\.(astro|md|mdx|ts|js)$/.test(f) && statSync(f).isFile());

let converted = 0;
for (const file of readdirSync(DIR)) {
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext) || KEEP.has(file)) continue;
  const src = join(DIR, file);
  const before = kb(src);
  if (before <= LIMIT_KB) continue;

  const name = basename(file, ext);
  const out = join(DIR, `${name}.webp`);
  await sharp(src).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(out);
  unlinkSync(src);

  let refs = 0;
  for (const f of sourceFiles) {
    const text = readFileSync(f, "utf8");
    const next = text.split(`/images/${file}`).join(`/images/${name}.webp`);
    if (next !== text) {
      writeFileSync(f, next);
      refs++;
    }
  }
  console.log(`${file.padEnd(34)} ${String(before).padStart(5)} KB -> ${String(kb(out)).padStart(4)} KB  (${name}.webp, ${refs} file${refs === 1 ? "" : "s"} updated)`);
  converted++;
}
console.log(converted ? `\n${converted} image${converted === 1 ? "" : "s"} shrunk.` : "Nothing over the limit - all good.");
