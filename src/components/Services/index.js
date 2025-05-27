'use client';

import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import './services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Personal Training',
    image: '/images/elements/C.png',
  },
  {
    title: 'Strength & Conditioning',
    image: '/images/elements/2.png',
  },
  {
    title: 'High-Intensity Training',
    image: '/images/elements/A.png',
  },
  {
    title: 'Nutritional Consultation',
    image: '/images/elements/B.png',
  },
];

export default function ServicesSection() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '.services-section',
        start: 'top 20%',
        end: 'bottom top',
        scrub: true,
        // markers: true,
        animation: gsap.to('.services-left-box', {
          y: '80vh',
        }),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="services-section">
      {/* Left Box */}
      <div className="services-left-box">
        <h2 className="services-title">
          <p>FIND YOUR</p> <span className="highlight">PERFECT</span> SERVICE
        </h2>
        <button className="more-button">MORE</button>
      </div>

      {/* Services List */}
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-label">{service.title}</div>
            <div className="service-image-wrapper">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
