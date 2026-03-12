import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GalleryClient from '../../components/GalleryClient';

export const metadata = {
  title: 'Gallery — IRONFORGE',
  description: 'Explore our world-class fitness facility through the gallery.',
};

export default function GalleryPage() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <GalleryClient />
      <Footer />
    </>
  );
}
