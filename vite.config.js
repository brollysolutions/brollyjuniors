import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

/* Injects the Google Search Console verification meta tag from the
 * environment, so the token is not committed to the repository. Set
 * GSC_VERIFICATION in .env (see .env.example) after choosing the "HTML tag"
 * method in Search Console. If you use the "HTML file" method instead, drop
 * the file Google gives you into public/ and leave this unset — both routes
 * are documented in docs/ANALYTICS_SETUP.md.
 *
 * The tag is placed just above the prerender marker, so it survives into every
 * generated page rather than only the home page. */
function searchConsoleVerification(token) {
  return {
    name: 'gsc-verification',
    transformIndexHtml(html) {
      if (!token) return html;
      return html.replace(
        '<!--head-->',
        `<meta name="google-site-verification" content="${token}" />\n    <!--head-->`
      );
    },
  };
}

export default defineConfig(({ mode }) => {
  /* Empty prefix so a non-VITE_ variable can be read at config time. It is
     never exposed to client code — only the tag above consumes it. */
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), searchConsoleVerification(env.GSC_VERIFICATION)],

    build: {
      rollupOptions: {
        output: {
          /* Split the one 1.9 MB bundle into cacheable pieces.
           *
           * Every page is prerendered, so this JavaScript is not what puts the
           * content on screen — it is deferred (`type="module"`) and only
           * hydrates markup the visitor can already read. It therefore does not
           * hold up LCP. What it does cost is the download itself, which on a
           * mid-range Android over mobile data is the difference between the
           * page becoming interactive quickly and not.
           *
           * The split here is by change frequency, so a returning visitor
           * re-downloads only what actually changed since their last visit:
           * React does not change between deploys, and the curriculum data
           * changes far less often than the components that render it. Before
           * this, editing one line of copy invalidated all 1.9 MB.
           *
           * These are still eager imports, so a first-time visitor downloads
           * the same total. Cutting that total needs route-level code
           * splitting, which is a real change rather than a config one — the
           * prerendered markup means a React.lazy boundary would replace
           * server-rendered content with a fallback during hydration unless
           * the matched route's chunk is awaited first. Written up, with the
           * measurements, in docs/SEO_AUDIT_2026-09.md.
           */
          manualChunks(id) {
            if (!id.includes('node_modules')) {
              /* The curriculum, catalogue and article bodies — ~960 KB of the
                 source tree, and the part that a copy edit touches. */
              if (id.includes('/src/data/')) return 'content-data';
              return undefined;
            }
            if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return 'react';
            if (/[\\/]node_modules[\\/](react-router|react-router-dom|@remix-run)[\\/]/.test(id)) {
              return 'router';
            }
            return 'vendor';
          },
        },
      },
      /* The content-data chunk is legitimately large and is not going to shrink
         without the route-level split described above. Raising the threshold
         stops a warning that is expected from hiding ones that are not. */
      chunkSizeWarningLimit: 700,
    },
  };
});
