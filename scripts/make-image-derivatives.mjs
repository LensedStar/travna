// Generates the lightweight image derivatives the site serves in place of the heavy client originals.
//
//   node scripts/make-image-derivatives.mjs
//
// Re-run after replacing any source photo. The sources are never modified; the outputs are committed.
//   - Showcase thumbnails:  public/images/<folder>/thumbs/<name>.webp   (ShowcaseGallery `thumb`)
//   - Brand mark:           public/images/logo-256.webp                 (site header + footer)
//   - Welcome photo:        public/images/post-hero-main-house-image.webp
//   - Landing share image:  public/images/og-lp.jpg                     (1200×630 link preview)
//
// Uses the `sharp` build Astro already ships with — no extra dependency.

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES = 'public/images';
const kb = (file) => `${(fs.statSync(file).size / 1024).toFixed(0)} KB`;

// --- Showcase thumbnails ---------------------------------------------------
// The showcase slider's thumbnail strip shows each photo ~5rem wide; without a thumbnail it loads
// the full-size photo for every one of them. 16:10 matches .house-showcase__thumb-image.
const THUMB_FOLDERS = ['house1', 'house2', 'rooms', 'kitchen'];
const THUMB = { width: 320, height: 200 };

for (const folder of THUMB_FOLDERS) {
  const dir = path.join(IMAGES, folder);
  const out = path.join(dir, 'thumbs');
  fs.mkdirSync(out, { recursive: true });
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.webp')).sort()) {
    const target = path.join(out, file);
    await sharp(path.join(dir, file))
      .rotate()
      .resize({ ...THUMB, fit: 'cover' })
      .webp({ quality: 72 })
      .toFile(target);
    console.log(`${target}  ${kb(target)}`);
  }
}

// --- Single derivatives ----------------------------------------------------
const singles = [
  {
    // 1024px transparent PNG (1.9 MB) -> the 50–100px badge in the site header / footer.
    from: 'logo.png',
    to: 'logo-256.webp',
    run: (img) => img.resize({ width: 256, height: 256, fit: 'contain' }).webp({ quality: 90, alphaQuality: 100 }),
  },
  {
    // 3.3 MB PNG -> the circular house photo of the welcome block (shown at most ~28rem wide).
    from: 'post-hero-main-house-image.png',
    to: 'post-hero-main-house-image.webp',
    run: (img) => img.resize({ width: 800 }).webp({ quality: 72, effort: 6 }),
  },
  {
    // Link-preview image for the landing (/social) — the same photo as its hero, so the preview matches
    // the page. JPEG: every scraper reads it, not every one reads WebP.
    from: 'tr-hero.png',
    to: 'og-lp.jpg',
    run: (img) => img.resize({ width: 1200, height: 630, fit: 'cover', position: 'centre' }).jpeg({ quality: 82, mozjpeg: true }),
  },
];

for (const { from, to, run } of singles) {
  const target = path.join(IMAGES, to);
  await run(sharp(path.join(IMAGES, from)).rotate()).toFile(target);
  console.log(`${target}  ${kb(target)}`);
}
