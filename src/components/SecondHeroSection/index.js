"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CaseStudySection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // ✅ OPEN /case-studies IN NEW TAB
  const openCaseStudy = () => {
    window.open("/case-studies", "_blank", "noopener,noreferrer");
  };

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

          <p className="mt-4 max-w-xl text-sm md:text-base text-[#4b4b4b] leading-relaxed">
            Developed requirements to fortify privacy protocols, reduce
            non-compliance risks, and lay a foundation for future regulatory
            changes.
          </p>

          {/* CTA */}
          <button
            onClick={openCaseStudy}
            className="mt-6 inline-flex items-center justify-center rounded-full 
                       bg-[#062a57] text-white text-sm md:text-base font-semibold 
                       px-6 py-3 shadow-md hover:bg-[#041d3a] transition-colors cursor-pointer"
          >
            Read the case study
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1">
          <div className="relative w-full h-[420px] md:h-[480px] lg:h-[520px] overflow-hidden">
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
