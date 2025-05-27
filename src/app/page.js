'use client';
import { useState, useEffect } from 'react';

import Navbar from '@/components/navbar';
import HeroSection from '@/components/herosection';
import AboutSection from '@/components/About';
import ProgramsSection from '@/components/programs';
import MembershipSection from '@/components/membership';
import Services from '@/components/Services';
import SuccessStoriesSection from '@/components/successstories';
import InstagramSection from '@/components/instagram';
import ContactSection from '@/components/contact';
import Banner from '@/components/Banner';
import Footer from '@/components/footer';
import Preloader from '@/components/Preloader';


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <Services />
      <MembershipSection />
      <SuccessStoriesSection />
      <InstagramSection />
      <ContactSection />
      <Banner />
      <Footer />
    </main>
  );
}

const styles = {
  preloaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff',
  },
  spinner: {
    border: '6px solid #f3f3f3', // Light gray
    borderTop: '6px solid #3498db', // Blue
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
  },
};
