"use client";
import Image from "next/image";
import './Services.css';
import { useState, useEffect, useLayoutEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer'; 
import ServiceChart from '@/components/ThirdHeroSection';
import Preloader from '@/components/Preloader';
import dynamic from 'next/dynamic';


import { TextHoverEffect } from "@/components/ui/text-hover-effect";



export default function Services() {
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
         <section className="Services overflow-x-clip">
         <ServiceChart />
         <Footer />
          </section>
    </>
  );
}
