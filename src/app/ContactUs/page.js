"use client";
import Image from "next/image";
import './Contact.css';
import { useState, useEffect, useLayoutEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer'; 
import ServiceChart from '@/components/ThirdHeroSection';
import ContactSection from '@/components/contact';
import Preloader from '@/components/Preloader';
import dynamic from 'next/dynamic';


import { TextHoverEffect } from "@/components/ui/text-hover-effect";



export default function ContactUs() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;
  return (
    <main className='overflow-x-hidden'>
         <Navbar />
         <section className="ContactUs">
         <div className="Contactssection1 items-center flex justify-center">
         <div className="h-[5rem] sm:h-[6rem] md:h-[9rem] lg:h-[12rem] xl:h-[15rem] 2xl:h-[22rem] w-full">
         <TextHoverEffect className="about-us-text font-bold" text="CONTACT US" />

         {/* <TextHoverEffect h1>ABOUT US</h1> */}
         </div>
         </div>
         <ContactSection />
         <Footer />
         </section>
    </main>
  );
}
