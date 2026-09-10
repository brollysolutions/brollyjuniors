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

## ⚠️ The server config is part of the SEO, and it is not in `dist/`

The site is served by **nginx** (`nginx.conf`, baked into the image by the
`Dockerfile`). It used to be served by Apache/LiteSpeed on a shared host, where
`public/.htaccess` did four jobs that nothing else does:

- redirected `www` to the canonical host
- 301'd every legacy URL from the old site to its successor
- served `/programs` from `/programs/index.html` **without** adding a trailing slash
- returned a real 404 for unknown URLs instead of the home page

**nginx never reads `.htaccess`.** When the deployment moved into a container,
all four silently stopped applying while the build stayed perfect — so nothing
in the repository could detect it. Measured on production before `nginx.conf`
was rewritten to carry the same rules:

| URL | Was | Should be |
|---|---|---|
| `/junior-skills/abacus` | `301` → `…/abacus/` | `200` |
| `/abacus-classes-in-hyderabad.html` | `200`, the home page | `301` → `/junior-skills/abacus` |
| `/any-mistyped-url` | `200`, indexable home page | `404` |
| `www.brollyjuniors.com` | `200`, all 204 pages duplicated | `301` |

Every canonical URL in the sitemap redirected rather than answering, which is
the most expensive of the four: the URL Google was told to index was a URL that
never served the page.

`public/.htaccess` is kept, because it is what an Apache host would need and it
documents the same decisions. **If you change the redirects in one file, change
them in the other** — `npm run audit:seo` warns when they disagree.

---

## Deploy

Build the image and restart the container:

```bash
# 1. Check the config parses, before it reaches anything that serves traffic.
docker run --rm -v "$PWD/nginx.conf:/etc/nginx/conf.d/default.conf:ro" nginx:1.27-alpine nginx -t

# 2. Build and start.
docker compose up -d --build

# 3. Prove the server behaves, not just that it started.
npm run verify:deploy
```

`nginx.conf` is copied in at build time, so a config change needs `--build`, not
just a restart. Step 1 matters because a config error makes the container
crash-loop, which looks like a deploy failure rather than a config typo.

> On a shared/Apache host instead, upload the **entire contents** of `dist/` to
> `/public_html`. `.htaccess` is a dotfile — most FTP clients hide it, and
> without it every page except the home page 404s.

Three things people get wrong:

1. **`.htaccess` is a dotfile.** Most FTP clients hide dotfiles by default. If it does not get uploaded, routing breaks: every page except the home page 404s. Turn on "show hidden files" and confirm it is there.
2. **Upload the directories.** `dist/about/index.html`, `dist/junior-skills/abacus/index.html` and so on. The directory structure *is* the routing.
3. **Delete stale files.** Old hashed assets in `assets/` can be left; old HTML files at paths no longer in the sitemap should be removed, or they stay indexed.

### After deploying, run the deployment check

```bash
npm run verify:deploy                          # checks https://brollyjuniors.com
npm run verify:deploy -- http://localhost:8080 # or a staging container
```

This is the check whose absence let the Apache→nginx regression run unnoticed.
It asks the **live server** the questions `audit:seo` cannot, because
`audit:seo` only ever reads `dist/`:

- do **all 204** canonical URLs from the sitemap answer `200`, or redirect?
- does the trailing-slash form of a URL redirect, or serve a duplicate?
- does an unknown URL return `404`, or a soft-404 home page?
- does each legacy URL in `nginx.conf` actually 301 to its successor?
- does `www` redirect? does `http` redirect?
- is the HTML compressed, prerendered, and served with an `<h1>`?

The first of those checks every sitemap URL, not a sample. It used to sample
four, and that is exactly how 24 pages — the whole `/programs/<topic>`
catalogue — sat in production being 301'd away while all four sampled URLs
answered 200. A redirect rule applies per URL pattern, so it has to be checked
per URL. Pass `-- --sample` for the old four-URL spot check when you want a
quick answer.

It exits non-zero on failure, so it can gate a deploy. Run it **after every
deploy and after any server or DNS change** — those are the changes no test in
this repository can see.

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

**Step 4 also checks that no redirect swallows your new page.** The legacy 301s
in `nginx.conf` and `.htaccess` match on keyword prefixes (`^/programs/ai[^/]*$`)
because the retired WordPress slugs were inconsistent — and a pattern broad
enough to catch every old slug is broad enough to catch a new page. That is not
hypothetical: adding the programme catalogue silently 301'd all 24 of its pages
in production. `audit:seo` now fails with

```
✗ nginx.conf — redirect ^/programs/(python|coding)[^/]*$ -> /python-for-kids
  shadows /programs/coding, which is a real page in the sitemap
```

If you see that, the redirect is the thing to change, not the route. Move the
rule so it runs after `try_files` (nginx: a `location` reached via a named
fallback; Apache: `RewriteCond %{REQUEST_FILENAME} !-f` and `!-d`), so a real
page always wins.

To exercise the routing locally before deploying:

```bash
npm run serve:dist                                    # serves dist/ on :8100 under the nginx rules
node scripts/verify-deployment.mjs http://127.0.0.1:8100
```

That stand-in mirrors the serving rules only, so the legacy `.html` redirects,
gzip and cache-header checks will fail against it — those are verified against
the real server. It is not a substitute for `nginx -t`.

---

## When the address changes

Edit `src/data/site.js`, rebuild, deploy — the footer, contact page, map, geo tags and structured data all read from that one object.

**Then update Google Business Profile and every directory listing** ([CITATIONS.md](CITATIONS.md)). A period where the website and the listings disagree costs you Local Pack position, so do it the same day.
