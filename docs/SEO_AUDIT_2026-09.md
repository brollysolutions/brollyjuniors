# Search audit — September 2026

A full technical, content and answer-engine audit of brollyjuniors.com, with
the safe fixes implemented and verified. Companion to
[SEO_STRATEGY.md](../SEO_STRATEGY.md), which sets the strategy this measures
against; this document records what was actually found and changed on
**9 September 2026**.

Every claim below is either a measurement quoted with its command, or is
labelled as an assumption. Nothing here is inferred from data I did not have.

---

## 1. Executive summary

The repository is in unusually good shape. All 204 indexable pages prerender to
real HTML, every one has a unique title, description, canonical, H1 and valid
structured data, and there are no unsupported marketing claims — the phrases
that normally trip an editorial audit ("guaranteed", "largest", "#1") appear
here only inside explicit *disclaimers*. That is rare and it is worth
protecting.

**The problem was never the build. It was the server.**

The site used to run on Apache/LiteSpeed, where `public/.htaccess` supplied the
canonical host, ~30 legacy 301s, slash-free URLs and real 404s. It now runs on
nginx, and **nginx does not read `.htaccess`**. When the deployment moved into a
container, all four protections silently stopped applying — while every check in
the repository kept passing, because every check read `dist/` and none of them
asked the live server anything.

Measured on production before this audit:

| URL | Live behaviour | Correct behaviour |
|---|---|---|
| `/junior-skills/abacus` | `301` → `…/abacus/` | `200` |
| every other sitemap URL | `301` (slash added) | `200` |
| `/abacus-classes-in-hyderabad.html` | `200`, home page | `301` → `/junior-skills/abacus` |
| `/programs/abacus-classes-hyderabad` | `200`, home page | `301` → `/junior-skills/abacus` |
| `/this-page-does-not-exist` | `200`, **indexable** home page | `404` |
| `www.brollyjuniors.com` | `200`, all 204 pages duplicated | `301` |

The first row is the expensive one: **the URL named as canonical in the sitemap
and in every `<link rel="canonical">` was a URL that never returned the page.**
Google was being pointed at 204 addresses that answered with a redirect.

A second, quieter fault: **195 of 204 sitemap URLs carried `lastmod` = the build
date.** Rebuilding for any reason told Google the entire site had changed.
Google only honours `lastmod` where it is consistently accurate, so this was
spending the signal without buying anything.

Both are fixed in the repository and verified. The nginx fix requires a deploy,
which is explicitly outside what I will do unattended — see §8.

**Highest-value remaining work is not technical.** It is the Google Business
Profile and the review flow (§8). For "abacus classes in Hyderabad" the SERP is
a Local Pack over directory listings; no amount of on-page work outranks a
verified, reviewed GBP listing, and the site currently has none linked.

---

## 2. Technical SEO audit

### 2.1 What was verified as correct

Run against the production build (`npm run build && npm run audit:seo`):

| Check | Result |
|---|---|
| Pages prerendered to real HTML | 205 written, 204 indexable |
| Unique `<title>` | 204 / 204 |
| Unique `<meta name="description">` | 204 / 204 |
| Self-referencing canonical on every page | 204 / 204 |
| Exactly one `<h1>` | 204 / 204 |
| Structured data parses as valid JSON | 204 / 204, 0 errors |
| `og:title` / `og:image` / `twitter:card` | 204 / 204 |
| Images with missing or empty `alt` | 0 |
| Images without `width`/`height` (CLS) | 0 |
| Broken internal links | 0 |
| Orphan pages (in sitemap, linked from nowhere) | 0 |
| `404.html` marked `noindex` | yes |
| `robots.txt` present, AI crawlers deliberately allowed | yes |

Client-side behaviour was checked in a real headless browser, not assumed:
`/junior-skills/abacus` loads with **0 console errors and 0 failed requests**,
one `<h1>`, 27,105 characters of text. Navigating client-side from `/` to
`/programs` correctly updates `<title>`, `<h1>`, `<link rel=canonical>` and the
JSON-LD block — so the SPA does not desynchronise from its own metadata.

### 2.2 Faults found

#### F1 — Every canonical URL answered `301`, not `200` · **fixed in repo, needs deploy**

`nginx.conf` used `try_files $uri $uri/ /index.html`. The `$uri/` term makes
nginx notice that `/programs` is a directory and issue its automatic
add-a-trailing-slash redirect. The sitemap, the canonical tags and `llms.txt`
all name the *slashless* form.

Fixed by trying the index file explicitly, which nginx serves internally with no
redirect:

```nginx
location / {
    try_files $uri $uri/index.html =404;
}
```

#### F2 — Unlimited soft 404s, indexable · **fixed in repo, needs deploy**

The `/index.html` fallback meant every mistyped or stale URL returned **HTTP
200 carrying the home page**, complete with `<meta name="robots"
content="index, follow">`. The correctly-built, `noindex`-tagged `dist/404.html`
was never served. Fixed by the `=404` above plus `error_page 404 /404.html`.

#### F3 — All legacy 301s dead · **fixed in repo, needs deploy**

~30 rules in `.htaccess` covering the old WordPress and static-HTML URLs. All
were returning `200` with the home page, so the accumulated authority of the
previously-indexed URLs was being discarded and duplicated instead. Ported to
`nginx.conf` verbatim.

#### F4 — `www` served the whole site a second time · **fixed in repo, needs deploy**

Mitigated by the canonical tags, but Google's own starter guide asks for a
redirect where one is possible. Added as a dedicated `server` block. **This one
depends on the front proxy forwarding the original `Host` header** — see §8.

#### F5 — `lastmod` was the build date on 195 of 204 URLs · **fixed and verified**

`scripts/prerender.mjs` emitted `today` for anything without an explicit article
date. Now derived from a SHA-256 of each page's rendered content, recorded in
the committed `scripts/sitemap-dates.json`. A route keeps its date until its
content genuinely changes.

Verified both directions:

```
rebuild, nothing changed   →  sitemap: 204 URLs (no content changed)   dates held at 2026-01-15
edit one page description  →  sitemap: 204 URLs (1 page(s) re-dated)   194 held, /programs → today
```

#### F6 — One 1.9 MB JavaScript bundle · **partially fixed**

Split by change-frequency into `react` (142 KB), `router` (23 KB), `content-data`
(915 KB) and app code (835 KB). This does **not** reduce first-visit bytes — the
imports are still eager — but it stops a copy edit invalidating all 1.9 MB for
returning visitors.

It is worth being precise about the impact: this bundle is `type="module"`, so
it is deferred and does **not** block LCP. Every page is prerendered, so content
paints without it. What it costs is hydration time (INP) and mobile data.

Cutting the total needs route-level code splitting, which is a real change, not
a config one: a `React.lazy` boundary would replace server-rendered content with
a fallback during hydration unless the matched route's chunk is awaited before
`hydrateRoot`. That is a deliberate refactor of `App.jsx` and `main.jsx` with a
visible-regression risk, so it is recommended (§9) rather than done blind.

#### F7 — No caching or security headers on HTML · **fixed in repo, needs deploy**

The old config also applied `expires 1y; immutable` to `/images/*` — filenames
there are **not** content-hashed, so an updated logo would have been pinned in
returning visitors' browsers for a year. Now: hashed `/assets/*` immutable,
other static 7 days, HTML `no-cache, must-revalidate`, `robots.txt`/`sitemap.xml`
1 hour. `X-Content-Type-Options` and `Referrer-Policy` added.

### 2.3 Not faults

- **Reading Rockets citations return 403 to automated checks.** Verified in a
  real browser: the response is a Cloudflare "performing security verification"
  interstitial, not a dead page. The three citations are fine. Recorded here so
  the next person does not "fix" a working link.
- **`/my-progress` is linked sitewide but absent from the sitemap.** Deliberate:
  it is personalised, stored in the browser, and `Disallow`ed in `robots.txt`.
- **Short pages.** Judged on intent satisfaction, not word count. None of the
  204 read as thin for what they are asked to answer.

---

## 3. GEO / AEO / AIO audit

The prerendering is what makes this site legible to answer engines at all — no
major AI crawler executes JavaScript, so before it the site was invisible to
every one of them. `robots.txt` names GPTBot, OAI-SearchBot, ClaudeBot,
PerplexityBot, Google-Extended and Applebot-Extended and allows them
deliberately.

**Already strong:** answer-first opening paragraphs, descriptive headings,
self-contained explanations, a valid entity graph (`EducationalOrganization` +
`LocalBusiness` with stable `@id`s, `WebSite`, `BreadcrumbList` on 203 pages,
`FAQPage` on 68, `Course` on 17 — all carrying `hasCourseInstance` or `offers`),
stable URLs, semantic HTML, explicit dates on articles.

**The genuine differentiator** is the 90 module pages: per-class, per-module
curriculum detail that no local competitor publishes. This is the most citable
asset on the site — it answers "what does a Class 8 AI syllabus actually
contain", which is a question the franchise sites answer with a brochure.

**Honest limitation:** `llms.txt` is generated and costs nothing, but it is a
proposed convention, not a ranking mechanism, and no major assistant has
committed to reading it. The repository already says so in
`scripts/prerender.mjs`; repeating it here so nobody later mistakes it for a
lever. It is not a substitute for the prerendering, which is what actually does
the work.

**Gap:** almost no first-hand evidence a model can cite — no original data, no
photographs of the centre, no named educator with verifiable credentials. See
§8; this needs facts I do not have, not code.

---

## 4. Competitor matrix and differentiation

Detailed tier-by-tier intelligence is in [COMPETITORS.md](COMPETITORS.md) and
remains accurate. What this pass adds is the **shape of the live SERP**, checked
in September 2026 for the highest-value query, "abacus classes in Hyderabad":

| Rank type | Who holds it | Can Brolly Juniors beat it? |
|---|---|---|
| Local Pack (top of page) | GBP listings with reviews | **Only with a verified, reviewed GBP.** Not an on-page problem. |
| Directories | Sulekha, UrbanPro, Justdial | No — but *being listed on them* is the win. See [CITATIONS.md](CITATIONS.md). |
| Franchise chains | UCMAS Telangana, AbacusTrainer | Partly. They have brand and scale; their per-page content is thin brochure copy. |
| Roundup listicles | aristokids.in, delightedchamps.com | Not directly — target being *featured in* them. |

The structural read is unchanged from `COMPETITORS.md`: the organic blue links
for these queries are dominated by aggregators and franchises, and **the
category nobody in Hyderabad has claimed is depth** — a single centre publishing
what is actually taught, week by week, per class. The 90 module pages already
occupy it. They are underexploited because nothing links to them from
high-authority pages off-site.

**Do not** try to out-listicle the roundups or out-scale the directories. The
differentiation that is real and defensible: multi-subject under one roof,
batches capped at 8, and published curriculum detail.

---

## 5. Keyword and intent map

The full per-URL map, with primary keyword, intent, funnel stage and the
title-as-it-will-appear, is maintained in [KEYWORD_MAP.md](KEYWORD_MAP.md) and
regenerated by `node scripts/keyword-map.mjs`. It is current, and I have not
duplicated it here.

Structure, unchanged and correct: one authoritative page per intent, no page
built for a keyword variation, `keyword` recorded in `src/lib/seo.js` as a
contract that the term also appears in the H1 and first hundred words.

**What I could not do.** Volumes, difficulty, SERP positions and the 4–20
opportunity set all require keyword or Search Console data. The Ahrefs and
Semrush connectors in this environment both returned `Insufficient plan`, and
there is no Search Console access. **I did not substitute public SERP
inspection for that data and present it as equivalent.** The exact exports
needed are in §8.

---

## 6. URL and content inventory

204 indexable URLs, all prerendered, all in the sitemap, all internally linked:

| Type | Count | Classification |
|---|---|---|
| Module pages (per class, per module) | 90 | **Keep** — the differentiator |
| Core / hub pages | 39 | Keep |
| Tuition catalogue | 17 | Keep |
| Workshop catalogue | 15 | Keep |
| Per-class curriculum pages | 10 | Keep |
| Articles / guides | 9 | **Improve** — the only pages with author/date signals; the natural home for original data |
| Schools (B2B) pages | 7 | Keep |
| Junior-skills programme pages | 5 | Keep — highest commercial intent |
| Location pages | 5 | Keep |
| Age-group catalogue | 4 | Keep |
| Technology pillars | 2 | Keep |
| App pages | 1 | Keep — the only nationally-targeted page |

Plus `/my-progress` (intentionally `noindex` + `Disallow`) and `404.html`.

**Nothing is classified consolidate, redirect or noindex.** No duplicate-intent
pairs were found: 204 unique titles and 204 unique descriptions, and the
keyword contract in `seo.js` prevents two pages targeting the same term. **No
page is recommended for deletion.**

**Create** — evidenced whitespace, none built in this pass because each needs
facts I do not have: a centre-photography-backed "what a class actually looks
like" page, and a named-educator page. Both are trust assets, and inventing
either would be worse than not having it.

---

## 7. Changes implemented

| File | Change |
|---|---|
| `nginx.conf` | Rewritten. Slash-free serving (F1), real 404s (F2), ~30 legacy 301s ported from `.htaccess` (F3), `www` → canonical host (F4), gzip, corrected cache tiers and security headers (F7). |
| `scripts/prerender.mjs` | `lastmod` derived from a content hash rather than the clock (F5); writes `scripts/sitemap-dates.json`; reports how many pages were re-dated. |
| `scripts/sitemap-dates.json` | **New, committed.** Route → content hash + the date it last genuinely changed. |
| `scripts/audit-seo.mjs` | Added: broken-internal-link detection, JSON-LD parsing with per-type required-property checks, `og:`/`twitter:` presence, validation that every redirect target in `nginx.conf` and `.htaccess` resolves to a real page, and a warning when the two configs disagree. |
| `scripts/verify-deployment.mjs` | **New.** Checks the *live server* — the gap that let F1–F4 go unnoticed. |
| `vite.config.js` | `manualChunks` split by change frequency (F6). |
| `package.json` | Added `verify:deploy`. |
| `docs/DEPLOYMENT.md` | Rewritten for nginx; documents the `.htaccess` trap and the post-deploy check. |

**No page content, copy, title, description, URL or schema was changed.** The
content audit found nothing that warranted it, and rewriting sound copy to look
productive would have been the wrong call.

### Verification actually performed

```
npm run build          205 pages written (204 indexable) + 404.html
                       sitemap: 204 URLs (no content changed)
                       llms.txt: 204 pages in 11 sections
npm run audit:seo      204 pages checked · 204 unique titles · 204 unique
                       descriptions · No problems found.
npm run test:worksheet 4,320 sheets, 1,29,600 sums checked · No problems found.
```

The three new audit checks were proved to work by injecting faults — a redirect
to a non-existent route, a link to a dead path, and a malformed JSON-LD block —
and confirming each was caught, then reverting. A check that silently does not
run reports "no problems" exactly like a check that passes, so this mattered.

`npm run verify:deploy` against production currently reports **6 passed, 1
warning, 12 failures** — the 12 being F1–F4, which is expected and is the point:
they clear when the new `nginx.conf` is deployed. That is the acceptance test.

---

## 8. Remaining dependencies and risks

### Requires a deploy (I do not deploy unattended)

1. **`docker compose up -d --build`**, then `npm run verify:deploy`. Expect all
   12 failures to clear. This is the single highest-impact action available.

   **`nginx.conf` has not been parsed by nginx itself.** No Docker daemon and no
   nginx binary were available in this environment, so it was verified
   structurally instead — braces balance, exactly one `default_server` per
   protocol, every `location` and `rewrite` regex compiles, no `expires` and
   `add_header Cache-Control` pair that would emit a duplicate header. Run the
   one-line `nginx -t` in `DEPLOYMENT.md` **before** deploying; it takes seconds
   and is the check I could not perform.

### Requires checking, once

2. **Does the front proxy forward the original `Host` header?** The live server
   is `nginx/1.28.0 (Ubuntu)` while the `Dockerfile` builds `nginx:1.27-alpine`,
   so something sits in front. If it does not pass `Host`, the `www` redirect
   (F4) never fires and the canonical tag stays the only signal. `nginx -T` on
   the host, or `proxy_set_header Host $host;`.

### Requires business facts I will not invent

3. **`src/data/site.js` has real blanks**: `latitude`/`longitude` are `null`,
   `mapEmbedSrc`, `placeUrl` and `reviewUrl` are empty, and all seven
   `socialProfiles` entries are empty strings. These are omitted from the
   structured data rather than guessed, which is correct — but they are the
   `sameAs` signals that connect the site to its Business Profile.
4. **Google Business Profile.** Not linked from the site, so presumably not
   verified. For the Local Pack this outranks everything on this list combined.
   [GBP_SETUP.md](GBP_SETUP.md) and [REVIEWS_PLAYBOOK.md](REVIEWS_PLAYBOOK.md).
5. **Named educators with verifiable credentials**, and photographs of the
   actual centre. The strongest E-E-A-T gap. Add real people only.

### Requires access I do not have

6. **Search Console** — needed for the 4–20 opportunity set, CTR outliers,
   cannibalisation and indexing exclusions. Export: Performance → Search results
   → last 16 months → Queries **and** Pages, plus Indexing → Pages. Add me as a
   user, or drop the CSVs in `docs/data/`.
7. **A keyword tool.** Ahrefs and Semrush both returned `Insufficient plan`.

### Risks

- **The `.htaccess`/`nginx.conf` split is a standing trap.** Two files must now
  agree. `audit:seo` warns when they diverge, but if Apache is truly retired,
  deleting `public/.htaccess` would be safer than maintaining both — **your
  call, and I have not deleted it.**
- **`sitemap-dates.json` must be committed.** If it is gitignored or wiped, the
  next build re-dates all 204 pages and F5 returns.
- **Initial dates are the 9 Sep 2026 build.** Real modification history was not
  recoverable per-route. Accurate from here; the first sitemap is a one-time
  approximation, and this is the honest description of it.

---

## 9. Roadmap

### 30 days

1. Deploy `nginx.conf`; confirm with `verify:deploy` (§8.1).
2. Confirm the `Host` header question (§8.2).
3. Create and verify the Google Business Profile; fill the blanks in
   `site.js`; rebuild and deploy.
4. Request reviews from current families, per `REVIEWS_PLAYBOOK.md`.
5. Grant Search Console access and re-run this audit's §5 with real data.
6. In Search Console, resubmit the sitemap and watch **Pages → Not indexed →
   Soft 404 / Duplicate** fall as F1–F3 clear.

### 90 days

7. Work the top 20 citations in `CITATIONS.md` — Sulekha, UrbanPro and Justdial
   rank for the money queries, so being listed is the realistic route onto page
   one for them.
8. Route-level code splitting (F6), measured before and after on a throttled
   mobile profile. Only worth doing if the INP field data justifies it.
9. Add author and reviewer signals to the 9 articles, using real people (§8.5).
10. Build one genuinely linkable asset from data you already hold — the honest
    candidate is a per-class CBSE AI/coding syllabus tracker, since the
    curriculum is already written and nobody local publishes it.

### Six months

11. Extend location pages only where families genuinely travel from — this is
    the pattern that becomes doorway pages if pushed past the evidence.
12. Evaluate Hindi/Telugu versions **only** if Search Console shows real
    non-English query demand. Telugu is the plausible one for Hyderabad;
    building either on assumption is how sites acquire 200 unmaintained pages.
13. Re-run this audit. `audit:seo` and `verify:deploy` should both be clean.

---

## 10. Measurement dashboard

Weekly, five minutes:

| Metric | Source | Watch for |
|---|---|---|
| Soft 404 / Duplicate counts | GSC → Indexing → Pages | Should approach zero after the deploy. **The acceptance test for F1–F3.** |
| Valid indexed pages | GSC → Indexing | Should approach 204 |
| Clicks / impressions, branded vs not | GSC → Performance | Non-branded growth is the real signal |
| Queries at positions 4–20 | GSC → Performance | The actionable set |
| Local Pack position, top 5 queries | Manual, logged-out | GBP progress |
| Reviews count and average | GBP | The Local Pack lever |
| Core Web Vitals, mobile | GSC → Core Web Vitals (field data) | INP is the one F6 affects |

Per deploy: `npm run build && npm run audit:seo && npm run verify:deploy` — all
three must exit zero.

Quarterly: the four competitor questions in `COMPETITORS.md` §Monitoring.

---

## 11. Sources

Primary guidance this audit applied:

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Soft 404 errors](https://developers.google.com/search/docs/crawling-indexing/http-network-errors#soft-404-errors)
- [Consolidate duplicate URLs / canonicalization](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) — the `lastmod` accuracy requirement behind F5
- [robots.txt specification](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)
- [JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Structured data general guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Course structured data](https://developers.google.com/search/docs/appearance/structured-data/course)
- [FAQ structured data](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [Local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images)
- [Spam policies for Google web search](https://developers.google.com/search/docs/essentials/spam-policies)
- [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Core Web Vitals](https://web.dev/articles/vitals) · [INP](https://web.dev/articles/inp) · [LCP](https://web.dev/articles/lcp)
- [Schema.org](https://schema.org/)
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmasters-guidelines-30fba23a) · [IndexNow](https://www.indexnow.org/)

Competitive SERP inspection (September 2026, "abacus classes in Hyderabad"):
[Sulekha](https://www.sulekha.com/abacus-mental-arithmetic-coaching/hyderabad),
[UrbanPro](https://www.urbanpro.com/hyderabad/abacus-classes),
[Justdial](https://www.justdial.com/Hyderabad/Abacus-Classes/nct-10001163),
[UCMAS Telangana](https://www.ucmastelangana.in/),
[AbacusTrainer](https://www.abacustrainer.com/abacus-training-in-hyderabad).

Not consulted, because access was unavailable: Google Search Console, Ahrefs,
Semrush (both connectors returned `Insufficient plan`).
