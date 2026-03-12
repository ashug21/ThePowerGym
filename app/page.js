import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TrainersSection from '../components/TrainersSection';
import MembershipSection from '../components/MembershipSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaStrip from '../components/CtaStrip';

export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TrainersSection />
        <TestimonialsSection />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
