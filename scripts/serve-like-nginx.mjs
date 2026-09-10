/* A local stand-in for nginx.conf's serving rules.
 *
 * `npm run preview` uses Vite's dev server, which resolves URLs its own way, so
 * it cannot answer the question that actually matters here: does a request for
 * /programs/coding reach the prerendered page, or does a legacy redirect catch
 * it first? That question had gone unasked, and 24 pages were 301'd away in
 * production as a result (docs/SEO_AUDIT_2026-09-10.md, F8).
 *
 * This serves dist/ the way the deployed nginx does, so the routing can be
 * exercised — and browser-checked — with no container runtime. It is a
 * reimplementation, not nginx: it proves the *logic* is right, and is not a
 * substitute for `nginx -t` before a deploy.
 *
 *   npm run serve:dist          # then: node scripts/verify-deployment.mjs http://127.0.0.1:8100
 *
 * Mirrors, in order:
 *   0.  rewrite ^(/.+)/$ $1 permanent
 *   3a. location ^~ /programs/  -> try_files $uri $uri/index.html @programs_legacy
 *   5.  location /              -> try_files $uri $uri/index.html =404
 *   error_page 404 /404.html
 */
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const DIST = path.resolve(process.argv[2] || 'dist');
const PORT = Number(process.argv[3] || 8099);

const TYPES = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css',
  '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.ico':'image/x-icon',
  '.txt':'text/plain; charset=utf-8', '.xml':'application/xml', '.json':'application/json' };

const LEGACY_PROGRAMS = [
  [/^\/programs\/abacus[^/]*$/, '/junior-skills/abacus'],
  [/^\/programs\/phonics[^/]*$/, '/junior-skills/phonics'],
  [/^\/programs\/vedic[^/]*$/, '/junior-skills/vedic-maths'],
  [/^\/programs\/public-speaking[^/]*$/, '/junior-skills/public-speaking'],
  [/^\/programs\/(digital|creative)[^/]*$/, '/junior-skills/digital-literacy'],
  [/^\/programs\/ai[^/]*$/, '/ai-for-kids'],
  [/^\/programs\/(python|coding)[^/]*$/, '/python-for-kids'],
  [/^\/programs\/.+$/, '/programs'],
];

async function tryFiles(uri) {
  for (const candidate of [uri, path.posix.join(uri, 'index.html')]) {
    const file = path.join(DIST, candidate);
    if (!file.startsWith(DIST)) continue;
    try {
      const s = await stat(file);
      if (s.isFile()) return file;
    } catch {}
  }
  return null;
}

http.createServer(async (req, res) => {
  const uri = decodeURIComponent(new URL(req.url, 'http://x').pathname);

  if (uri.length > 1 && uri.endsWith('/')) {
    res.writeHead(301, { Location: uri.slice(0, -1) });
    return res.end();
  }

  const file = await tryFiles(uri);
  if (file) {
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    return res.end(body);
  }

  if (uri.startsWith('/programs/')) {
    for (const [re, to] of LEGACY_PROGRAMS) {
      if (re.test(uri)) { res.writeHead(301, { Location: to }); return res.end(); }
    }
  }

  const notFound = await readFile(path.join(DIST, '404.html')).catch(() => 'Not found');
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(notFound);
}).listen(PORT, () => console.log(`serving ${DIST} like nginx on http://127.0.0.1:${PORT}`));
