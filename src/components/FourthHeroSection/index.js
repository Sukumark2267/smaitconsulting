"use client";

import { useEffect, useRef, useState } from "react";

export default function FirmStatsSection() {
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
      className={`relative w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#0b63b0] to-[#043464] text-white ${
        visible ? "section-reveal visible" : "section-reveal"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        {/* Top headline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug max-w-4xl">
          We built our firm to be{" "}
          <span className="font-bold text-[#7fd3ff]">
            everything typical consultancies are not.
          </span>
        </h2>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Stat 1 */}
          <div>
            <div className="text-3xl md:text-4xl font-semibold">100%</div>
            <div className="mt-2 h-px w-12 bg-[#7fd3ff]" />
            <p className="mt-2 text-xs md:text-sm text-blue-100">
              Independent & client-focused
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="text-3xl md:text-4xl font-semibold">350+</div>
            <div className="mt-2 h-px w-12 bg-[#7fd3ff]" />
            <p className="mt-2 text-xs md:text-sm text-blue-100">
              Successful consulting engagements
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="text-3xl md:text-4xl font-semibold">40+</div>
            <div className="mt-2 h-px w-12 bg-[#7fd3ff]" />
            <p className="mt-2 text-xs md:text-sm text-blue-100">
              Industries & domains served
            </p>
          </div>

          {/* Stat 4 */}
          <div>
            <div className="text-3xl md:text-4xl font-semibold">9</div>
            <div className="mt-2 h-px w-12 bg-[#7fd3ff]" />
            <p className="mt-2 text-xs md:text-sm text-blue-100">
              Long-term strategic partners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
