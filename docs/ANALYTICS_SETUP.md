# Search Console and Analytics — 30 minutes, once

The code is already in place. What remains is creating the two accounts and pasting two values into a file.

Until this is done you are working blind: you cannot see which searches you appear for, whether Google has indexed the 136 new pages, or how many families reached WhatsApp from a search.

---

## Part 1 — Google Analytics 4 (10 minutes)

### Create the property

1. Go to **analytics.google.com** → **Admin** → **Create** → **Property**
2. Property name: `Brolly Juniors`. Time zone: `(GMT+05:30) India`. Currency: `Indian Rupee`
3. Business details: Education, small
4. **Create a Web data stream** → URL `https://brollyjuniors.com`, name `Brolly Juniors website`
5. Copy the **Measurement ID**. It looks like `G-XXXXXXXXXX`

### Put it in the site

Create a file called `.env` in the project root (copy `.env.example`), and fill in:

```
VITE_GA4_ID=G-XXXXXXXXXX
```

Then rebuild and deploy:

```bash
npm run build
```

That is all. With the ID set, analytics loads; with it blank, no analytics code loads at all and no requests are made — which is what you want while developing.

> `.env` is in `.gitignore` and must stay out of version control.

### What is already tracked for you

The important one first. **There is no booking form on this site** — families book by tapping WhatsApp or the phone number. So the conversion is an outbound click, and nothing would measure it by default. `src/lib/analytics.js` catches all of them with one listener:

| Event | Fires when | Why it matters |
|---|---|---|
| `page_view` | Every route change, not just the first page load | Without this, GA4 records one page per visit and credits every enquiry to the landing page |
| `generate_lead` (`method: whatsapp`) | Any WhatsApp link is tapped | **This is the conversion.** |
| `generate_lead` (`method: phone`) | Any `tel:` link is tapped | Also the conversion |
| `generate_lead` (`method: email`) | Any `mailto:` link is tapped | Rarer, still counts |
| `book_trial_click` | A link to `/book-free-demo` is clicked | Intent, one step before the conversion. The gap between this and `generate_lead` is the most useful number on the site |

### Mark the conversion (2 minutes, and easy to forget)

GA4 will not treat `generate_lead` as a conversion until you say so.

**Admin → Data display → Key events → New key event** → enter `generate_lead`.

Do the same for `book_trial_click` if you want it counted separately.

Events take up to 24 hours to appear in the list. If you do not see them at first, use **Reports → Realtime**, open the site in another tab and tap a WhatsApp link — it should appear within seconds.

---

## Part 2 — Google Search Console (10 minutes)

This is the more important of the two. GA4 tells you what people did on the site; Search Console tells you what they searched, whether Google can read your pages, and whether the 136 URLs got indexed.

### Add the property

1. Go to **search.google.com/search-console** → **Add property**
2. Choose **Domain** if you can edit DNS records — it covers every subdomain and both http and https, and it is the better option. Otherwise choose **URL prefix** with `https://brollyjuniors.com`

### Verify

**Option A — DNS (best, if you have registrar access).** Google gives you a TXT record. Add it at your domain registrar. Wait a few minutes, click Verify.

**Option B — HTML file (simplest).** Google gives you a file named something like `google1a2b3c4d.html`. Put it in the `public/` folder of this project, rebuild, deploy. It will be served at the root. Click Verify.

**Option C — HTML tag.** Google shows you a meta tag. Copy **only the content value** — not the whole tag — into `.env`:

```
GSC_VERIFICATION=abc123def456...
```

Rebuild and deploy. The tag is injected into every page. Click Verify.

### Submit the sitemap — do this immediately after verifying

**Sitemaps** → enter `sitemap.xml` → **Submit**.

The sitemap is generated at build time from the route manifest and currently lists **136 URLs**. Google will report how many it has discovered and indexed. Expect indexing to take one to three weeks.

### Then, in the first week

- [ ] **URL Inspection** on `https://brollyjuniors.com/junior-skills/abacus` → **Test live URL** → **View tested page → HTML**. You should see the full page content, an `<h1>` and the JSON-LD. Before the prerendering work this returned an empty `<div id="root"></div>`; confirming it does not any more is the single best check that the fix is live.
- [ ] Request indexing for the six money pages: the two hubs, and the four junior-skills pages
- [ ] Check **Pages** → any URL under "Not indexed" and why
- [ ] Check **Enhancements** for structured data errors

---

## Part 3 — Link them together (1 minute)

In GA4: **Admin → Product links → Search Console links → Link**.

This puts organic search queries into GA4 reports, so you can see which search brought a family who then tapped WhatsApp. That single join is what turns two dashboards into an answer.

---

## Part 4 — Bing Webmaster Tools (5 minutes, genuinely worth it)

Go to **bing.com/webmasters** and import directly from Search Console — it takes two clicks.

Worth doing for one specific reason: **Bing powers several AI search engines, and Bing has never rendered JavaScript**. Before this site was prerendered it was completely invisible there. Now it is not, and Bing indexes small sites faster than Google does, so it is often where you see the first results.

---

## What to look at, and when

**Weekly, five minutes — Search Console → Performance**
- Which queries you are appearing for. Early on this is mostly branded; the first non-branded query is the signal that it is working
- Average position for the money keywords
- Any page that has dropped out

**Monthly, twenty minutes**
- Update the table in `SEO_STRATEGY.md` §9
- Search Console → **Pages**: is the indexed count still climbing toward 136?
- GA4 → conversions: how many `generate_lead` events, and from which pages
- GA4 → landing pages, filtered to organic: which page brings families in

**Quarterly**
- Re-run `npm run build && npm run audit:seo` and `node scripts/keyword-map.mjs`
- Re-check competitor positions — see [COMPETITORS.md](COMPETITORS.md)

---

## Troubleshooting

**No data in GA4 after a day.** Check the page source of the live site for `googletagmanager.com/gtag/js`. If it is absent, `VITE_GA4_ID` was not set at build time — the value is baked in during the build, so setting it after building does nothing. Set it, rebuild, redeploy.

**Search Console says "Discovered — currently not indexed".** Normal for a new site with low authority. It means Google knows the URL and has not got to it. Links and reviews fix this; requesting indexing repeatedly does not.

**"Page with redirect" on old `.html` URLs.** Correct and expected — those are the 301s in `.htaccess` doing their job. Leave them in place until the old URLs disappear from Search Console entirely.

**"Alternate page with proper canonical tag".** Also fine. Non-canonical module URLs point at the canonical one.

**"Soft 404" reports.** These should not appear. The site now returns a real 404 status for unknown URLs and serves a `noindex` 404 page. If you see them, check that `.htaccess` deployed correctly — it is a dotfile and some FTP clients hide it.
