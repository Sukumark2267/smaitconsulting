"use client";
import Image from "next/image";
import './Nutrition.css';
import { useState, useEffect, useLayoutEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Preloader from '@/components/Preloader';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";



export default function Nutrition() {
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
         <section className="Nutrition">
         <div className="Nutritionsection1 items-center flex justify-center">
         <div className="h-[5rem] sm:h-[8rem] md:h-[11rem] lg:h-[15rem] xl:h-[20rem]  2xl:h-[25rem] w-full">
         <TextHoverEffect className="about-us-text font-bold" text="NUTRITION" />

         {/* <TextHoverEffect h1>ABOUT US</h1> */}
         </div>
         </div>
         <NutritionBlogs />
         <NutritionForm />
         <NutritionFAQ />
         <Nutritionist />
         <Footer />
          </section>
    </>
  );
}
