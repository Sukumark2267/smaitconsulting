"use client";

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import './herosection.css';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top 10%",
          end: "+=5000",
          scrub: 2,
          pin: true,
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });
  
      tl.from(".img-lightBulb", {
        opacity: 0,
        duration: 2,
      }, "-=2.0");
  
      tl.from(".bg-logo", {
        opacity: 0,
        duration: 4,
      });
  
      tl.to(".marquee", {
        xPercent: -200,
        ease: "none",
        duration: 5,
      });
      tl.from(".gym-equipment-right-bg", {
        opacity: 0,
        ease: "none",
        duration: 2,
      });
  
      tl.from(".gym-equipment-middle-bg", {
        opacity: 0,
        ease: "none",
        duration: 2,
      });
  
      tl.from(".gym-equipment-left-bg", {
        opacity: 0,
        ease: "none",
        duration: 2,
      });
      tl.from(".gym-equipment-right", {
        opacity: 0,
        xPercent: -10,
        ease: "none",
        duration: 2,
      });
  
      tl.from(".gym-equipment-middle", {
        opacity: 0,
        yPercent: 10,
        ease: "none",
        duration: 2,
      });
  
      tl.from(".gym-equipment-left", {
        opacity: 0,
        xPercent: 10,
        ease: "none",
        duration: 2,
      });
  
      tl.from(".Dreamland-heading1", {
        opacity: 0,
        ease: "none",
        duration: 5,
        stagger:true,
      });

      tl.from(".Dreamland-heading2", {
        opacity: 0,
        ease: "none",
        duration: 5,
        stagger:true,
      });

      tl.to(".bg-logo", {
        y: -230,        
        scale: 0.5, 
        duration: 5,
      });

      tl.to(".bg-belowlayer", {
        y: -230,        
        scale: 0.5, 
        duration: 5,
      },"<");

      tl.to({}, {
        duration: 5,
      });
      ScrollTrigger.refresh();
  
    });
  
    return () => ctx.revert();
  }, []);
  
  return (
    <>
<section className="hero relative w-full h-screen overflow-hidden">
  {/* Background logo */}
  <Image
    src="/images/logo/dl_color_icon.png"
    alt="Dreamland Athletics Gym"
    fill
    className="bg-logo absolute object-cover rounded-xl"
    priority
  />

  {/* Light bulb static images */}
  {/* <div className="relative w-[200px] h-[200px] z-20">
    <Image
      src="/images/elements/lightBulb.png"
      alt="Dreamland Light Bulb Light"
      height={200}
      width={200}
      className="img-lightBulb object-contain absolute top-0 left-0"
    />
    <Image
      src="/images/elements/lightBulbDark.png"
      alt="Dreamland Light Bulb Dark"
      height={200}
      width={200}
      className="img-lightBulbDark object-contain absolute top-0 left-0"
    />
  </div> */}

  {/* Marquee text */}
  <div className="marquee" data-text="Dream. Train. Conquer. ">
          <h1>Dream. Train. Conquer.</h1>
   </div>

  {/* Gym equipment container */}
  <div className="equipment-container absolute inset-0 pointer-events-none">
        <Image
        src="/images/elements/gym-equipment-right.png"
        alt="gym-equipment-right"
        width={900}
        height={900}
        className="gym-equipment-right object-contain absolute bottom-0 left-0
          w-32 sm:w-48 md:w-64 lg:w-80 xl:w-126"
      />

      <Image
        src="/images/elements/gym-equipment-left.png"
        alt="gym-equipment-left"
        width={900}
        height={900}
        className="gym-equipment-left object-contain absolute right-0 bottom-0 
          w-28 sm:w-44 md:w-60 lg:w-72 xl:w-100"
      />

      <Image
        src="/images/elements/gym-equipment-middle.png"
        alt="gym-equipment-middle"
        width={900}
        height={900}
        className="gym-equipment-middle object-contain absolute left-1/2 bottom-0 -translate-x-1/2 
          w-40 sm:w-56 md:w-72 lg:w-[22rem] xl:w-[43rem]"
      />

    </div>

  {/* Gym equipment container */}
  <div className="equipment-container-bg absolute inset-0 pointer-events-none">
        <Image
        src="/images/elements/gym-equipment-right-bg.png"
        alt="gym-equipment-right"
        width={900}
        height={900}
        className="gym-equipment-right-bg object-contain absolute bottom-0 left-0
          w-32 sm:w-48 md:w-64 lg:w-80 xl:w-126"
      />

      <Image
        src="/images/elements/gym-equipment-left-bg.png"
        alt="gym-equipment-left"
        width={900}
        height={900}
        className="gym-equipment-left-bg object-contain absolute right-0 bottom-0 
          w-28 sm:w-44 md:w-60 lg:w-72 xl:w-100"
      />

      <Image
        src="/images/elements/gym-equipment-middle-bg.png"
        alt="gym-equipment-middle"
        width={900}
        height={900}
        className="gym-equipment-middle-bg object-contain absolute left-1/2 bottom-0 -translate-x-1/2 
          w-40 sm:w-56 md:w-72 lg:w-[22rem] xl:w-[43rem]"
      />

    </div>
    <div className="relative flex justify-center items-center h-[12rem] sm:h-[14rem] md:h-[16rem] z-20 pointer-events-none">
       <h1 className="Dreamland-heading1">Dreamland Athletics</h1>
        <h1 className="Dreamland-heading2">Dreamland Athletics</h1>
    </div>



        {/* Below layer shadow */}
        <Image
          src="/images/logo/dl_icon_black_empty.png"
          alt="Dreamland Shadow Logo"
          fill
          className="bg-belowlayer object-cover rounded-lg"
          priority
        />
      </section>

      {/* Divider border */}
      <div className="dividerborder relative w-full h-10 mt-[-1px]">
        <Image
          src="/images/elements/BORDER-Horizontal.png"
          alt="Section Divider Border"
          fill
          className="object-cover"
          priority
        />
      </div>
    </>
  );
}
