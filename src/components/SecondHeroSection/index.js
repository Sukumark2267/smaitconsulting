"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CaseStudySection() {
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
      className={`relative bg-white py-12 md:py-0 ${
        visible ? "section-reveal visible" : "section-reveal"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 md:gap-10 px-4 lg:px-0">
        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Heading box */}
          <div className="border border-black px-6 py-6 md:px-8 md:py-8 max-w-xl">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold leading-snug text-[#1a1a1a]">
              Developing a Resilient Privacy Framework:
              <br className="hidden md:block" />
              <span className="font-normal">
                {" "}
                Addressing Compliance Gaps for Long-Term Readiness
              </span>
            </h2>
          </div>

          {/* Tags / categories */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm md:text-[15px]">
            <button className="inline-flex items-center gap-2 text-[#0066cc]">
              <span className="text-base">🏦</span>
              <span>Financial Services</span>
            </button>

            <span className="h-4 w-px bg-gray-300 hidden sm:inline-block" />

            <button className="inline-flex items-center gap-2 text-[#0066cc]">
              <span className="text-base">📁</span>
              <span>Program &amp; Project Management</span>
            </button>
          </div>

          {/* Body text */}
          <p className="mt-4 max-w-xl text-sm md:text-base text-[#4b4b4b] leading-relaxed">
            Developed requirements to fortify privacy protocols, reduce
            non-compliance risks, and lay a foundation for future regulatory
            changes.
          </p>

          {/* CTA */}
          <button
            className="mt-6 inline-flex items-center justify-center rounded-full 
                       bg-[#062a57] text-white text-sm md:text-base font-semibold 
                       px-6 py-3 shadow-md hover:bg-[#041d3a] transition-colors"
          >
            Read the case study
          </button>
        </div>

     {/* CHEVRON / ARROW BETWEEN LEFT & RIGHT */}
<div className="hidden lg:flex items-center justify-center px-4">
  <svg
    viewBox="0 0 60 260"
    className="h-64 w-auto drop-shadow-md"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer blue chevron outline */}
    <polygon
      points="4,0 56,130 4,260 14,130"
      fill="white"             // keeps center white so it blends with background
      stroke="#32a4ff"         // brighter blue
      strokeWidth="4"
    />
  </svg>
</div>



       
       {/* RIGHT IMAGE PANEL */}
<div className="flex-1">
  <div className="relative w-full h-[420px] md:h-[480px] lg:h-[520px] overflow-hidden rounded-none">
    <Image
      src="/images/axis_case_1.png"  
      alt="Case study visual"
      fill
      className="object-cover"
    />
  </div>
</div>

      </div>
    </section>
  );
}
