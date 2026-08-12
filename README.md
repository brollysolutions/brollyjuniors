# Brollyjuniors

React.js recreation of the Brolly Juniors website (https://brolly-juniors.varma414.chatgpt.site/) — Hyderabad's joyful learning home for AI, Python, Abacus, Vedic Maths, Public Speaking and Digital Literacy programs.

## Tech stack

- React 18 + Vite
- React Router v6
- **Prerendered to static HTML at build time** — 137 pages, no runtime server, no extra dependency
- Plain CSS (no framework) — design system extracted from the live brollyjuniors.com stylesheet

## Design system

Colour tokens and component styling live in `src/styles/global.css` and mirror the live site:
cream `#FFF8E7`, navy `#1E293B`, blue `#2B6CB0`, yellow `#FFC93C`, coral `#FF6B6B`,
mint `#4ECDC4`, lavender `#A78BFA` — with 1.5px navy outlines and hard offset shadows.

| Family | Role | Where it is used |
| --- | --- | --- |
| Fredoka | Display | `h1`–`h4`, `.logo`, FAQ questions, stat numbers, badges (`.stage-tag`, `.module-num`, `.step-class`), pull-quotes |
| Poppins | UI chrome | Nav links, buttons, `.nav-cta`, footer headings, chips, tags, meta and labels |
| Inter | Body copy | All paragraphs, FAQ answers, list copy (400 only) |
| Caveat | Accents | `.eyebrow` / `.section-eyebrow` / `.hero-script` — coral, ~28px, rotated −2° |

Illustrations are hand-authored SVGs in `public/images/`, drawn in the same palette.

## Getting started

```bash
npm install
npm run dev         # dev server at http://localhost:5173 (client-rendered, as before)
npm run build       # client build → SSR build → prerender 137 pages into dist/
npm run audit:seo   # check the built HTML: titles, descriptions, canonicals, H1s, schema
npm run preview     # preview the production build
```

> ⚠️ **Use `npm run build`, not `vite build`.** The latter only runs the first of three steps and
> ships an empty `<div id="root"></div>` to every crawler. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

### Adding a page

1. Add the route in `src/App.jsx`
2. Add the path to `src/lib/routes.js` — drives both prerendering and the sitemap
3. Add a title, description and target keyword in `src/lib/seo.js`

`npm run audit:seo` fails if you skip step 3, which is the point.

## Project structure

```
public/
  images/         18 hand-authored SVG illustrations (hero, phonics, abacus, ai, python...)
src/
  components/     Navbar, Footer, Layout, Shared (PageHero, MediaSplit, StageTrack,
                  Curriculum, ImageBand, ModuleGrid, FAQ, CTA...)
  data/           site.js, aiCurriculum.js, pythonCurriculum.js, infoPages.js
  pages/          Home, Programs, JuniorSkills, AIForKids, PythonForKids, class pages,
                  Schools, InfoPage, ...
  styles/         global.css (design tokens + all styles)
```

Junior-skills and school pages are driven by `src/data/infoPages.js`. Each entry may carry an
`image`, and a `curriculum` object whose `stages[]` render as the illustrated level-by-level
cards (`StageTrack`). Adding a level to Phonics, Abacus, Vedic Maths, Public Speaking or Digital
Literacy is a data edit — no component changes needed.

All page content (curricula, FAQs, testimonials, contact info) lives in `src/data/` so it can be edited without touching components. The AI and Python class pages (`/ai-for-kids/class-6` … `/python-for-kids/class-10`) are rendered from a single dynamic route each, driven by the curriculum data files.

## Search

The site is built to rank locally in Hyderabad. The strategy, the competitor analysis and the
execution playbooks live in [SEO_STRATEGY.md](SEO_STRATEGY.md) and [docs/](docs/).

Two things to know before touching the build or the routing:

- **Every route is prerendered.** `scripts/prerender.mjs` renders each URL in `src/lib/routes.js`
  to a real HTML file with its own title, description, canonical and JSON-LD. `dist/sitemap.xml`
  is generated from the same list.
- **The address lives in one place.** `src/data/site.js` → `address`. The footer, contact page,
  map embed, geo tags and LocalBusiness schema all read from it. Blank fields are omitted rather
  than guessed at, so filling it in is a single edit.

## Deployment

Upload the whole of `dist/` to `/public_html`, **including the `.htaccess` dotfile** — most FTP
clients hide it, and without it every page except the home page 404s.

`public/.htaccess` handles the legacy `.html` → SPA 301s, serves the prerendered directories
without a trailing-slash redirect, and returns a genuine 404 (with a `noindex` page) for unknown
URLs rather than a soft 404.

Deploying elsewhere (Netlify, Vercel): the prerendered files work as static hosting with no
configuration. Point the 404 handler at `404.html`, and keep the legacy redirects.
