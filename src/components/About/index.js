'use client';
import Image from 'next/image';
import './about.css';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'aos/dist/aos.css';


export default function About() {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrollX(offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <>
    <section id="about">
    <h2 className="section-title">OUR STORY</h2>
    <div className="about-content">
    <div className="about-text">
      {/* <div className="about-text" data-aos="fade-right" data-aos-delay="100" data-aos-duration="700" data-aos-easing="ease-in-out"> */}
        <p>Founded in 2018, Dreamland Athletics started as a small training facility with a big vision — to create a space where athletes of all levels in pushing their limits and achieving extraordinary results.</p>
        <p>What started as a passion project has grown into Brampton&rsquo;s most dynamic fitness community, with over 1,000 members and counting. Our Instagram community (@dreamland_brampton) showcases real transformations, workout tips, and the vibrant energy that makes Dreamland special.</p>
        <p>We believe fitness is more than physical - it&rsquo;s mental resilience, community support, and personal growth. Every squat rack, battle rope, and weight plate at Dreamland tells a story of transformation.</p>
      </div>
      <div className="about-image">
      {/* <div className="about-image" data-aos="fade-left" data-aos-delay="100" data-aos-duration="700" data-aos-easing="ease-in-out"> */}
      <div className="relative w-[290px]  h-[290px] md:h-[300px] lg:h-[340px]">
            <Image 
              src="/images/logo/dl_color_icon.png" 
              alt="Dreamland Athletics Gym"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </div>
      </div>
    </div>
  </section>
  <div className="relative w-full h-[84px] mt-[-1px] overflow-hidden">
      <div
        className="chaindivider absolute top-0 -left-40 w-8/4 h-full"
        style={{
          transform: `translateX(${-scrollX * 0.2}px)`, 
          transition: 'transform 0.1s linear',
        }}
      >
        <Image
          src="/images/elements/CHAIN-Hori.png"
          alt="Section Divider Border"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
    </>
  );
}