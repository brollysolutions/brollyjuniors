import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Seo from './Seo.jsx';

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
