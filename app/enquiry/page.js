import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EnquiryClient from '../../components/EnquiryClient';

export const metadata = {
  title: 'Enquiry — IRONFORGE',
  description: 'Submit an enquiry to join IRONFORGE Elite Fitness.',
};

export default function EnquiryPage() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <EnquiryClient />
      <Footer />
    </>
  );
}
