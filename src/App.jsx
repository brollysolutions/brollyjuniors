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
import Contact from './pages/Contact.jsx';
import BookFreeDemo from './pages/BookFreeDemo.jsx';
import FAQs from './pages/FAQs.jsx';
import InfoPage from './pages/InfoPage.jsx';
import AbacusPage from './pages/AbacusPage.jsx';
import BrainGamesPage from './pages/BrainGamesPage.jsx';
import VedicMathsPage from './pages/VedicMathsPage.jsx';
import MentalMathsPage from './pages/MentalMathsPage.jsx';
import ChessPage from './pages/ChessPage.jsx';
import CodingPage from './pages/CodingPage.jsx';
import RoboticsPage from './pages/RoboticsPage.jsx';
import DigitalLiteracyPage from './pages/DigitalLiteracyPage.jsx';
import TeluguPage from './pages/TeluguPage.jsx';
import HindiPage from './pages/HindiPage.jsx';
import EnglishPage from './pages/EnglishPage.jsx';
import PhonicsPage from './pages/PhonicsPage.jsx';
import PublicSpeakingPage from './pages/PublicSpeakingPage.jsx';
import SpokenEnglishPage from './pages/SpokenEnglishPage.jsx';
import CommunicationSkillsPage from './pages/CommunicationSkillsPage.jsx';
import ForeignLanguagesPage from './pages/ForeignLanguagesPage.jsx';
import Resources from './pages/Resources.jsx';
import AbacusWorksheets from './pages/AbacusWorksheets.jsx';
import Article from './pages/Article.jsx';
import LocationPage from './pages/LocationPage.jsx';
import Apps from './pages/Apps.jsx';
import CatalogHub from './pages/CatalogHub.jsx';
import AppPage from './pages/AppPage.jsx';
import NotFound from './pages/NotFound.jsx';
import { infoPages } from './data/infoPages.js';
import { publishedLocations, locationPath } from './data/locations.js';
import { apps, appPath } from './data/apps.js';
import { catalogHubs, catalogPages } from './data/catalog/index.js';

/* Programme pages that render through a component of their own. Keyed by path
   so adding one is a single line here, and so a typo shows up as a page that
   never takes effect rather than as a duplicate route. */
const CUSTOM_INFO_PAGES = {
  '/junior-skills/abacus': AbacusPage,
  '/junior-skills/vedic-maths': VedicMathsPage,
  '/junior-skills/digital-literacy': DigitalLiteracyPage,
  '/junior-skills/phonics': PhonicsPage,
  '/junior-skills/public-speaking': PublicSpeakingPage,
};

/* The same, for the pages that come from the programme catalogue rather than
   from infoPages. Kept as a second map because the two lists are different
   data sources, not because the routing differs. */
const CUSTOM_CATALOG_PAGES = {
  '/programs/brain-games': BrainGamesPage,
  '/programs/mental-maths': MentalMathsPage,
  '/programs/chess': ChessPage,
  '/programs/coding': CodingPage,
  '/programs/robotics': RoboticsPage,
  '/programs/telugu': TeluguPage,
  '/programs/hindi': HindiPage,
  '/programs/english': EnglishPage,
  '/programs/spoken-english': SpokenEnglishPage,
  '/programs/communication-skills': CommunicationSkillsPage,
  '/programs/foreign-languages': ForeignLanguagesPage,
};

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-free-demo" element={<BookFreeDemo />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/my-progress" element={<MyProgress />} />

          {/* Guides. The hub lists them; each guide targets one question a
              parent searches before they search for a class. */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<Article />} />
          <Route path="/abacus-worksheet-generator" element={<AbacusWorksheets />} />

          {/* Apps. Listed explicitly, like the neighbourhood pages, so removing
              an app from data/apps.js removes its URL rather than leaving a
              route that renders an empty page. */}
          <Route path="/apps" element={<Apps />} />
          {apps.map((app) => (
            <Route key={app.slug} path={appPath(app.slug)} element={<AppPage app={app} />} />
          ))}

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

          {/* A few programmes have a page of their own rather than the shared
              InfoPage layout, because they carry something the generic layout
              cannot express — the interactive soroban, a worked technique, a
              challenge quiz. Each still reads its copy, curriculum and FAQs
              from the same infoPages entry, so the route and the data stay in
              one place. */}
          {infoPages.map((page) => {
            const Custom = CUSTOM_INFO_PAGES[page.path];
            return (
              <Route
                key={page.path}
                path={page.path}
                element={Custom ? <Custom page={page} /> : <InfoPage page={page} />}
              />
            );
          })}

          {/* Tuitions, workshops and age groups. The hubs render from the same
              catalogue the mega menu reads; each topic page is shaped like an
              infoPages entry, so it renders through InfoPage unchanged. */}
          {catalogHubs.map((hub) => (
            <Route key={hub.path} path={hub.path} element={<CatalogHub hub={hub} />} />
          ))}
          {catalogPages.map((page) => {
            const Custom = CUSTOM_CATALOG_PAGES[page.path];
            return (
              <Route
                key={page.path}
                path={page.path}
                element={Custom ? <Custom page={page} /> : <InfoPage page={page} />}
              />
            );
          })}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
