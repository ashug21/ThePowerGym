"use client"

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TrainersSection from '../components/TrainersSection';
import MembershipSection from '../components/MembershipSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaStrip from '../components/CtaStrip';
import { useEffect } from 'react';

export default function Home() {


  const wakeupServer = async() => {
    const res = await fetch("/api/wakeserver");

    if(!res.ok){
      return;
    }
    const data = await res.json();
    console.log(data.message);
  }

  useEffect(() => {
    wakeupServer();
  },[]);


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
