import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import Programs from './pages/Programs.jsx';
import AIForKids from './pages/AIForKids.jsx';
import AIClassPage from './pages/AIClassPage.jsx';
import PythonForKids from './pages/PythonForKids.jsx';
import PythonClassPage from './pages/PythonClassPage.jsx';
import ModulePage from './pages/ModulePage.jsx';
import MyProgress from './pages/MyProgress.jsx';
import JuniorSkills from './pages/JuniorSkills.jsx';
import Schools from './pages/Schools.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import BookFreeDemo from './pages/BookFreeDemo.jsx';
import FAQs from './pages/FAQs.jsx';
import InfoPage from './pages/InfoPage.jsx';
import Resources from './pages/Resources.jsx';
import AbacusWorksheets from './pages/AbacusWorksheets.jsx';
import Article from './pages/Article.jsx';
import LocationPage from './pages/LocationPage.jsx';
import NotFound from './pages/NotFound.jsx';
import { infoPages } from './data/infoPages.js';
import { publishedLocations, locationPath } from './data/locations.js';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />

          <Route path="/ai-for-kids" element={<AIForKids />} />
          <Route path="/ai-for-kids/:classSlug" element={<AIClassPage />} />
          <Route path="/ai-for-kids/:classSlug/:moduleSlug" element={<ModulePage subject="ai" />} />

          <Route path="/python-for-kids" element={<PythonForKids />} />
          <Route path="/python-for-kids/:classSlug" element={<PythonClassPage />} />
          <Route
            path="/python-for-kids/:classSlug/:moduleSlug"
            element={<ModulePage subject="python" />}
          />

          <Route path="/junior-skills" element={<JuniorSkills />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-free-demo" element={<BookFreeDemo />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/my-progress" element={<MyProgress />} />

          {/* Guides. The hub lists them; each guide targets one question a
              parent searches before they search for a class. */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<Article />} />
          <Route path="/abacus-worksheet-generator" element={<AbacusWorksheets />} />

          {/* Neighbourhood pages — one per area we genuinely serve. Listed
              explicitly rather than as a dynamic segment, so that setting
              published: false in locations.js removes the route entirely
              instead of leaving a URL that renders a redirect. */}
          {publishedLocations.map((l) => (
            <Route
              key={l.slug}
              path={locationPath(l.slug)}
              element={<LocationPage slug={l.slug} />}
            />
          ))}

          {infoPages.map((page) => (
            <Route key={page.path} path={page.path} element={<InfoPage page={page} />} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
