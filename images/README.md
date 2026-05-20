# Images

Place your optimized photos here, then update `src` paths in the HTML files.

## Logo

The header uses **`logo.svg`** — a square monogram with **SL**.

- To use a custom logo, replace `logo.svg` or add `logo.png` and update the `src` in each page header.
- Recommended size: **about 320×128px** (or similar wide aspect ratio), transparent background if possible.
- Formats: PNG, SVG, or WebP. If you use SVG only, rename or point the `src` in the HTML header to `images/logo.svg`.

To hide the text name under the logo once your file includes the wordmark, add class `brand--logo-only` to the `<a class="brand">` link in each HTML file (optional).

## Recommended folders

- `images/hero/` — Home page hero (≈1200–1600px wide). Current file: `hero/shutter-door-brick.png`
- `images/gallery/` — Project gallery (≈600–800px square or 4:3)

## Compression tips

1. Resize to the display size before uploading (don't use 4000px originals).
2. Export as **WebP** or compressed **JPEG** (quality 75–85).
3. Aim for **under 200 KB** per hero image and **under 120 KB** per gallery thumb.
4. Tools: [Squoosh](https://squoosh.app), ImageOptim, or `npx @squoosh/cli`.

## Example HTML after adding local images

```html
<img src="images/hero/living-room.jpg" alt="Living room with white plantation shutters" width="1200" height="900" loading="lazy">
```

Keep **descriptive alt text** for accessibility and SEO.
