import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { buildHead } from '../lib/head.js';
import { trackPageView } from '../lib/analytics.js';

/* Applies the head description from lib/head.js to the live document.
 *
 * On a prerendered page the correct tags are already in the HTML, so the first
 * pass here rewrites them to identical values and nothing moves. The work that
 * matters is client-side navigation: React Router changes the URL without a
 * document load, and without this the title, canonical and structured data
 * would still describe the page the visitor arrived on.
 *
 * React 18 has no built-in head management and react-helmet is a dependency
 * for what is fifty lines of DOM work, so the tags are set directly. Every tag
 * is looked up before being created, so navigating updates existing tags
 * rather than appending duplicates.
 */

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/* One JSON-LD block, replaced wholesale on each route change. The id matches
   the one the prerenderer writes, so the static block is reused rather than a
   second, conflicting graph being appended next to it. */
function setJsonLd(data) {
  const ID = 'brolly-jsonld';
  let el = document.getElementById(ID);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = ID;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const head = buildHead(pathname);

    document.title = head.title;
    setLink('canonical', head.canonical);
    for (const [attr, key, content] of head.meta) setMeta(attr, key, content);
    setJsonLd(head.jsonLd);

    /* Reported after the title is set so GA4 records the page the visitor
       actually landed on, not the one they came from. */
    trackPageView(pathname, head.title);
  }, [pathname]);

  return null;
}
