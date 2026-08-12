import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';
import { buildHead } from './lib/head.js';
import { routes } from './lib/routes.js';
import { getSeo } from './lib/seo.js';

/* Server entry point for the build-time prerender (see scripts/prerender.mjs).
 *
 * This is what turns the site from an empty <div id="root"></div> into real
 * HTML. Nothing here runs in production — the output is static files, and no
 * Node process is needed on the shared host.
 *
 * The app is already safe to render without a browser: progress state has a
 * server snapshot, and every window/document access sits inside an effect,
 * which does not run during renderToString.
 */

export { routes, getSeo };

/* Re-exported for scripts/prerender.mjs, which builds llms.txt from the same
   data the pages render from. Importing src/data/site.js directly from the
   script would mean two copies of the truth. */
export { site, address, openingHours, areasServed, formattedAddress } from './data/site.js';

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (c) => ESCAPES[c]);

/* A "<" inside the JSON-LD payload would let a string in the data close the
   script tag early. Escaping it is the standard defence and stays valid JSON. */
function escapeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

function serialiseHead(head) {
  const parts = [
    `<title>${escapeHtml(head.title)}</title>`,
    `<link rel="canonical" href="${escapeHtml(head.canonical)}" />`,
  ];

  for (const [attr, key, content] of head.meta) {
    parts.push(`<meta ${attr}="${escapeHtml(key)}" content="${escapeHtml(content)}" />`);
  }

  parts.push(
    `<script type="application/ld+json" id="brolly-jsonld">${escapeJsonLd(head.jsonLd)}</script>`
  );

  return parts.join('\n    ');
}

export function render(url) {
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );

  return { html, head: serialiseHead(buildHead(url)) };
}
