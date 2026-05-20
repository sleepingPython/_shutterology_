# Shutterology Website

A multipage marketing site for **Shutterology**, a local plantation shutter company. Built with plain HTML, CSS, and JavaScript — ready for [GitHub Pages](https://pages.github.com/).

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About | `about.html` |
| Products | `products.html` |
| Gallery | `gallery.html` |
| Blog | `blog.html` |
| Blog posts | `blog/*.html` |
| Testimonials | `testimonials.html` |
| Contact | `contact.html` |

## Preview locally

Open `index.html` in your browser, or run a simple server:

```bash
cd ShutterologyV1
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `shutterology-website`).
2. Push this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial Shutterology website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
4. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Custom domain (optional)

Add a `CNAME` file containing your domain (e.g. `www.shutterology.com`) and configure DNS with your registrar.

## Customize before launch

- [ ] **Logo** — Add your file as `images/logo.png` (placeholder SVG is used until then)
- [ ] **Contact details** — Update phone, email, and service area in `contact.html`
- [ ] **Contact form** — Sign up at [Formspree](https://formspree.io), then replace the form `action` in `contact.html` with your form URL
- [ ] **Images** — Replace Unsplash placeholders with your own photos in `images/` (see `images/README.md`)
- [ ] **Testimonials** — Replace sample quotes with real customer reviews
- [ ] **Blog** — Edit existing posts or duplicate a file in `blog/` for new articles

## Adding a new blog post

1. Copy an existing file in `blog/` (e.g. `wood-vs-vinyl-shutters.html`).
2. Update the title, meta description, and article body.
3. Add a new list item on `blog.html` linking to your file.

For a non-technical editor later, consider [Decap CMS](https://decapcms.org/) or migrating to 11ty.

## Project structure

```
ShutterologyV1/
├── index.html
├── about.html
├── products.html
├── gallery.html
├── blog.html
├── testimonials.html
├── contact.html
├── 404.html
├── css/styles.css
├── js/main.js
├── blog/
├── images/
└── README.md
```

## License

© Shutterology. All rights reserved.
