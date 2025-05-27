"use client";
import Image from "next/image";
import './AboutUs.css';
import { useState, useEffect, useLayoutEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AboutCards from '@/components/AboutCards';
import ContactSection from '@/components/contact';
import Preloader from '@/components/Preloader';


export default function About() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;
  return (
    <>
         <Navbar />
         <section className="AboutUs">
         <div className="Aboutsection1">
         <h1>ABOUT US</h1>
         </div>
         <AboutCards />   
         <div className="Aboutsection3">
         </div>  
         <ContactSection />
         <Footer />
          </section>
    </>
  );
}
