import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Seo from './Seo.jsx';
import { TrialBookingProvider } from './TrialModal.jsx';

export default function Layout({ children }) {
  return (
    <TrialBookingProvider>
      <Seo />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </TrialBookingProvider>
  );
}
