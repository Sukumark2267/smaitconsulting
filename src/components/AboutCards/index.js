"use client";
import Image from "next/image";
import './AboutCards.css';
import { useState, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUsCards = [
  {
    title: 'BODY BUILDING',
    description: 'Perfect for starting your fitness journey',
    img: "/images/elements/D.png",
  },
  {
    title: 'WEIGHT LOSS',
    description: 'Premium coaching for maximum results',
    img: "/images/elements/Q.png",
  },
  {
    title: 'MUSCLE GAIN',
    description: 'For serious athletes committed to results',
    img: "/images/elements/N.png",
  },
]

export default function About() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".card", {
            opacity: 0,
            x: (i) => -200 * (i + 3),
            duration: 2,
            stagger: 1,
            scrollTrigger: {
              trigger: ".Aboutsection2",
              start: "top 10%",
              end: "bottom 30%",
              scrub: true,
              markers: false,
              toggleActions: "play none none reverse",
              pin: true,
        },

      });
    });
  
    return () => ctx.revert();
}, []);
  
return (
    <>
          <div className="Aboutsection2" id="Aboutsection2">
              <div className="card-container">
              {AboutUsCards.map((card, idx) => (
                <div className="card" key={idx}>
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={300}
                      height={300}
                      className="card-image"
                      style={{ width: '400px', height: '400px', border: '1px solid var(--primary)' }}
                    />
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              ))}
             </div>          
             <h1>Be stronger than your strongest excuse today.</h1>
            </div>
    </>
  );
}
