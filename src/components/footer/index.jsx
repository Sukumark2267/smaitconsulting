"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ctaServices = [
  "Strategy",
  "Process Management",
  "Program & Project Management",
  "Data & Analytics",
  "Technology",
  "Cyber Security",
  "Change Management",
  "Learning & Development",
];

export default function CallToActionSection() {
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
      { threshold: 0.25 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`
        relative text-white 
        bg-gradient-to-b from-[#063873] via-[#052b5a] to-[#041f40]
        pt-14 md:pt-16 pb-20
        ${visible ? "section-reveal visible" : "section-reveal"}
      `}
    >
      {/* subtle background shape on the left */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 opacity-20">
        <div className="h-full translate-x-[-30%] bg-[radial-gradient(circle_at_top_left,#1b6ddf,transparent_60%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-0">
        {/* TOP: CTA row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
          {/* Left highlight box (can be used for tagline or quick note) */}
          <div className="border-2 border-[#4b8dff] bg-[#1b3f7b]/60 px-6 py-5 min-w-[260px]">
            <p className="text-xs tracking-[0.18em] uppercase text-blue-100 mb-1">
              SMA IT Consulting Group
            </p>
            <p className="text-sm md:text-base text-blue-50">
              Practical consulting for data, privacy, and digital
              transformation initiatives.
            </p>
          </div>

          {/* Right headline + button */}
          <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Let&apos;s get to work!
            </h2>

            <Link
              href="/ContactUs"
              className="
                inline-flex items-center gap-2
                rounded-full border-2 border-[#ff9800]
                bg-[#ff9800] text-[#0b2342]
                px-7 py-3 text-sm md:text-base font-semibold
                shadow-md
                transition-all
                hover:bg-transparent hover:text-[#ff9800]
                hover:shadow-lg
              "
            >
              Start right now
              <span className="translate-y-[1px]">➜</span>
            </Link>
          </div>
        </div>

        {/* MIDDLE: location + quick meta + social icons */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-blue-100">
          {/* location + metrics */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">📍</span>
              <span>30 Eglinton Ave W #400, Mississauga, ON, L5R 3E7</span>
            </div>

            <span className="hidden md:inline-block h-px w-10 bg-blue-300/60" />

            <div className="flex items-center gap-2">
              <span className="text-lg">⚡</span>
              <span>Independent consulting that turns strategy into action.</span>
            </div>
          </div>

          {/* social icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-blue-300/70 flex items-center justify-center text-xs font-semibold hover:bg-white/10"
            >
              in
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-blue-300/70 flex items-center justify-center text-xs font-semibold hover:bg-white/10"
            >
              ▶
            </a>
          </div>
        </div>

        {/* BOTTOM: services tiles row */}
        <div className="mt-10">
          <p className="text-xs md:text-sm text-blue-100 mb-4">
            We help organizations move from intent to impact across:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
            {ctaServices.map((srv) => (
              <div
                key={srv}
                className="rounded-2xl bg-white/5 border border-white/10 px-4 py-4
                           text-sm md:text-[13px] text-blue-50 shadow-sm
                           hover:bg-white/10 hover:border-white/40 transition"
              >
                {srv}
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER TEXT ROW (simple links) */}
        <div className="mt-10 pt-6 border-t border-blue-700/60 text-[11px] md:text-xs text-blue-200 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span>© 2012 SMA IT Consulting Group. All rights reserved.</span>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white">
              Accessibility
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
