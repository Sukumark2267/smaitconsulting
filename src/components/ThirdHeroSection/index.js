"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CaseStudySection3() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`relative bg-white py-12 md:py-16 ${
        visible ? "section-reveal visible" : "section-reveal"
      }`}
    >
      {/* FULL-WIDTH ROW, NO max-w / NO horizontal padding */}
      <div className="flex flex-col lg:flex-row items-stretch gap-6 md:gap-10 w-full">

        {/* LEFT IMAGE PANEL – FULL BLEED */}
        <div className="flex-[1.2]">
          <div className="relative w-full h-[420px] md:h-[480px] lg:h-[520px] overflow-hidden">
            <Image
              src="/images/section3_image.png"   // your image
              alt="Case study visual"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CHEVRON (REVERSED) */}
        <div className="hidden lg:flex items-center justify-center px-4">
          <svg
            viewBox="0 0 60 260"
            className="h-64 w-auto drop-shadow-md scale-x-[-1]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="4,0 56,130 4,260 14,130"
              fill="white"
              stroke="#32a4ff"
              strokeWidth="4"
            />
          </svg>
        </div>

        {/* RIGHT CONTENT – WE ADD PADDING ONLY HERE */}
        <div className="flex-[0.9] flex flex-col justify-center pr-6 lg:pr-16">
          <div className="border border-black px-6 py-6 md:px-8 md:py-8 max-w-xl">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold leading-snug text-[#1a1a1a]">
              Improving Data Quality for Operational Efficiency and Strategic Empowerment
            </h2>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm md:text-[15px]">
            <button className="inline-flex items-center gap-2 text-[#0066cc]">
              <span>🏛</span>
              <span>Social &amp; Not-for-Profit</span>
            </button>

            <span className="h-4 w-px bg-gray-300 hidden sm:inline-block" />

            <button className="inline-flex items-center gap-2 text-[#0066cc]">
              <span>📊</span>
              <span>Data &amp; Analytics</span>
            </button>
          </div>

          <p className="mt-4 max-w-xl text-sm md:text-base text-[#4b4b4b] leading-relaxed">
            Established foundational data management disciplines to improve data
            quality across five core systems, enhancing decision-making and
            driving operational efficiency.
          </p>

          <button
            className="mt-6 inline-flex items-center justify-center rounded-full 
                       bg-[#062a57] text-white text-sm md:text-base font-semibold 
                       px-6 py-3 shadow-md hover:bg-[#041d3a] transition-colors"
          >
            Read the case study
          </button>
        </div>
      </div>
    </section>
  );
}
