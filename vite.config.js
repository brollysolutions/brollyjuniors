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
  };
});
