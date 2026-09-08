# Building and deploying

**The build changed.** It now produces a real HTML file for every page instead of a single empty shell. Deploying the old way — or running `vite build` on its own — will silently undo the fix for Blocker 1, so this is worth reading once.

---

## Build

```bash
npm install     # first time only
npm run build
```

That runs three steps in order:

| Step | What it does |
|---|---|
| `build:client` | The normal Vite build — JS, CSS, `public/` copied into `dist/` |
| `build:ssr` | Compiles `src/entry-server.jsx` to `dist-ssr/` so Node can render the app |
| `prerender` | Renders every route to HTML, writes `dist/**/index.html`, `404.html` and `sitemap.xml`, then deletes `dist-ssr/` |

Expected output:

```
  prerender: 137 pages written (136 indexable) + 404.html
  sitemap:   136 URLs -> dist/sitemap.xml
```

> **Do not run `vite build` alone to produce a release.** It builds only step one, and every page goes back to being an empty `<div id="root"></div>`. Use `npm run build`.

### Check it before you upload

```bash
npm run audit:seo
```

Reads the built HTML and fails if any page is missing content, a title, a description, a canonical, an H1 or structured data — or if two pages share a title. It also warns (without failing) about skipped heading levels, link text that describes nothing, images with missing or empty `alt`, and pages no other page links to. A clean run looks like:

```
  audit: 136 indexable pages checked
  unique titles: 136   unique descriptions: 136

  No problems found.
```

Optionally, refresh the keyword audit:

```bash
node scripts/keyword-map.mjs      # rewrites docs/KEYWORD_MAP.md
```

---

## Deploy

Upload the **entire contents** of `dist/` to `/public_html` on the shared host.

Three things people get wrong:

1. **`.htaccess` is a dotfile.** Most FTP clients hide dotfiles by default. If it does not get uploaded, routing breaks: every page except the home page 404s. Turn on "show hidden files" and confirm it is there.
2. **Upload the directories.** `dist/about/index.html`, `dist/junior-skills/abacus/index.html` and so on. The directory structure *is* the routing.
3. **Delete stale files.** Old hashed assets in `assets/` can be left; old HTML files at paths no longer in the sitemap should be removed, or they stay indexed.

### After deploying, check these four things

```bash
# 1. A deep page returns 200 and contains real content, not an empty div
curl -s https://brollyjuniors.com/junior-skills/abacus | grep -c "<h1"

# 2. No trailing-slash redirect — this must print 200, not 301
curl -s -o /dev/null -w "%{http_code}\n" https://brollyjuniors.com/junior-skills/abacus

# 3. An unknown URL returns a real 404, not 200
curl -s -o /dev/null -w "%{http_code}\n" https://brollyjuniors.com/does-not-exist

# 4. The sitemap is live
curl -s https://brollyjuniors.com/sitemap.xml | grep -c "<loc>"     # expect 136
```

Then, in Search Console: **URL Inspection → Test live URL → View tested page → HTML** on `/junior-skills/abacus`. You should see the heading and the body copy. This is the definitive confirmation that Blocker 1 is fixed in production, and it is worth doing once by hand.

---

## Environment variables

Create `.env` in the project root from `.env.example`:

```
VITE_GA4_ID=G-XXXXXXXXXX
GSC_VERIFICATION=
```

**These are read at build time, not at run time.** Setting them after building has no effect — set them, then rebuild, then deploy. `.env` is gitignored and must stay that way.

---

## Development

```bash
npm run dev
```

The dev server does *not* prerender — it serves the empty shell and React fills it in, exactly as before. That is fine and it is faster. `src/main.jsx` detects which situation it is in and hydrates or client-renders accordingly.

Two things behave differently in dev and are not bugs:

- The tab title is briefly empty before React mounts. In production the title is already in the HTML.
- `/sitemap.xml` returns 404 in dev. It is generated at build time.

---

## What to do when you add a page

1. Add the route to `src/App.jsx`
2. Add the path to `src/lib/routes.js` — this is what drives prerendering and the sitemap
3. Add a title, description and target keyword to `src/lib/seo.js`
4. `npm run build && npm run audit:seo`

The audit fails if you skip step 3, which is the point. Skipping step 2 means the page is never prerendered and never appears in the sitemap — the exact failure mode this setup exists to prevent, so `routes.js` also throws on a duplicate route.

---

## When the address changes

Edit `src/data/site.js`, rebuild, deploy — the footer, contact page, map, geo tags and structured data all read from that one object.

**Then update Google Business Profile and every directory listing** ([CITATIONS.md](CITATIONS.md)). A period where the website and the listings disagree costs you Local Pack position, so do it the same day.
