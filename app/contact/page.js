import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactClient from '../../components/ContactClient';

export const metadata = {
  title: 'Contact — IRONFORGE',
  description: 'Get in touch with IRONFORGE Elite Fitness.',
};

export default function ContactPage() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <ContactClient />
      <Footer />
    </>
  );
}
