'use client';
import { useState, useEffect } from 'react';
import Script from 'next/script';
import Preloader from '@/components/Preloader';
import HeroSection from '@/components/HeroSection';
import ProgramsSection from '@/components/programs';
import MembershipSection from '@/components/membership';
import Services from '@/components/Services';
import ContactSection from '@/components/contact';
import Newsletter from '@/components/Newsletter';
import Banner from '@/components/Banner';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import InstagramFeed from '@/components/instagram';
import FounderSocials from '@/components/FounderSocials';


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
  <>
    <Script
    src="https://static.elfsight.com/platform/platform.js"
    strategy="beforeInteractive"
    id="elfsight-platform"
  />
    <main>
    <Navbar />

      <HeroSection/>
      <InstagramFeed/>
      <MembershipSection/>
      <Services/>
      <FounderSocials/>
      <Newsletter/>
      <Banner/>
      <Footer />

    </main>
    </>
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
    border: '6px solid #f3f3f3', 
    borderTop: '6px solid #3498db', 
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
  },
};
