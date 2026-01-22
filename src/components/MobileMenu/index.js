"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const mobileServices = [
  "Strategy",
  "Process Management",
  "Program & Project Management",
  "Data & Analytics",
  "Technology",
  "Cyber Security",
  "Change Management",
  "Learning & Development",
];

const mobileIndustries = [
  "Financial Services",
  "Government & Broader Public Sector",
  "Healthcare",
  "Travel and Events & Meetings",
  "Social & Not-for-Profit",
  "Transportation",
  "Energy",
];

const mobileInsightsLeft = [
  "Industry Insights",
  "Service Insights",
  "Case Studies",
  "Company News",
];

const mobileInsightsTopics = [
  "Overview",
  "Public Sector",
  "Data & Analytics",
  "Strategy",
  "Change Management",
  "Financial Services",
  "Healthcare",
  "Learning & Development",
  "Process",
];

export default function MobileMenu({ isOpen, onClose }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);

  if (!isOpen) return null;

  const closeAll = () => {
    setServicesOpen(false);
    setIndustriesOpen(false);
    setInsightsOpen(false);
    onClose?.();
  };

  return (
    <div className="lg:hidden bg-[#062a57] text-white border-t border-white/10">
      {/* Top row with logo + close (optional) */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <Link href="/" onClick={closeAll} className="flex items-center gap-2">
          <Image
            src="/images/smaitlogo.png"
            alt="SMA IT Consulting Group"
            width={150}
            height={50}
            className="h-8 w-auto"
            priority
          />
           {/* Logo Text */}
   <span className="
  hidden sm:block
  text-[#b8c7dc]
  font-medium
  text-[11px]
  lg:text-xs
  tracking-[0.22em]
  uppercase
  whitespace-nowrap
">
  SMA IT CONSULTING GROUP
</span>
        </Link>

        <button
          onClick={onClose}
          className="text-xs font-semibold tracking-wide uppercase border border-white/30 rounded-full px-3 py-1"
        >
          Close
        </button>
      </div>

      <nav className="px-4 pb-5 text-sm font-medium space-y-3">
        {/* SERVICES */}
        <div className="border border-white/10 rounded-xl overflow-hidden">
          <button
            type="button"
            onClick={() => {
              setServicesOpen((v) => !v);
              setIndustriesOpen(false);
              setInsightsOpen(false);
            }}
            className="w-full flex items-center justify-between px-4 py-3 bg-[#07366e]"
          >
            <span>Services</span>
            <span className="text-xs">{servicesOpen ? "−" : "+"}</span>
          </button>
          {servicesOpen && (
            <div className="bg-[#041f45] px-4 py-3 space-y-2">
              {mobileServices.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={closeAll}
                  className="block w-full text-left text-[13px] text-gray-100/90 py-1 hover:text-[#4ab0ff]"
                >
                  {item}
                </button>
              ))}
              <Link
                href="/Services"
                onClick={closeAll}
                className="mt-2 inline-flex text-[13px] text-[#4ab0ff] underline"
              >
                View all services
              </Link>
            </div>
          )}
        </div>

        {/* INDUSTRIES */}
        <div className="border border-white/10 rounded-xl overflow-hidden">
          <button
            type="button"
            onClick={() => {
              setIndustriesOpen((v) => !v);
              setServicesOpen(false);
              setInsightsOpen(false);
            }}
            className="w-full flex items-center justify-between px-4 py-3 bg-[#07366e]"
          >
            <span>Industries</span>
            <span className="text-xs">{industriesOpen ? "−" : "+"}</span>
          </button>
          {industriesOpen && (
            <div className="bg-[#041f45] px-4 py-3 space-y-2">
              {mobileIndustries.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={closeAll}
                  className="block w-full text-left text-[13px] text-gray-100/90 py-1 hover:text-[#4ab0ff]"
                >
                  {item}
                </button>
              ))}
              <Link
                href="/Industries"
                onClick={closeAll}
                className="mt-2 inline-flex text-[13px] text-[#4ab0ff] underline"
              >
                View all industries
              </Link>
            </div>
          )}
        </div>

        {/* INSIGHTS */}
        <div className="border border-white/10 rounded-xl overflow-hidden">
          <button
            type="button"
            onClick={() => {
              setInsightsOpen((v) => !v);
              setServicesOpen(false);
              setIndustriesOpen(false);
            }}
            className="w-full flex items-center justify-between px-4 py-3 bg-[#07366e]"
          >
            <span>Insights</span>
            <span className="text-xs">{insightsOpen ? "−" : "+"}</span>
          </button>
          {insightsOpen && (
            <div className="bg-[#041f45] px-4 py-3 space-y-3">
              <div className="space-y-1">
                {mobileInsightsLeft.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={closeAll}
                    className="block w-full text-left text-[13px] text-gray-100/90 py-0.5 hover:text-[#4ab0ff]"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="border-t border-white/10 pt-2 mt-1 grid grid-cols-1 gap-y-1">
                {mobileInsightsTopics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={closeAll}
                    className="block w-full text-left text-[13px] text-gray-300 py-0.5 hover:text-[#4ab0ff]"
                  >
                    {topic}
                  </button>
                ))}
              </div>

              <Link
                href="/Insights"
                onClick={closeAll}
                className="mt-2 inline-flex text-[13px] text-[#4ab0ff] underline"
              >
                View all insights
              </Link>
            </div>
          )}
        </div>

        {/* ABOUT & CAREERS */}
        <Link
          href="/AboutUs"
          onClick={closeAll}
          className="block py-1 text-[13px] text-gray-100 hover:text-[#4ab0ff]"
        >
          About
        </Link>

        <Link
          href="/"
          onClick={closeAll}
          className="block py-1 text-[13px] text-gray-100 hover:text-[#4ab0ff]"
        >
          Careers
        </Link>

        {/* CTA */}
        <Link
          href="/ContactUs"
          onClick={closeAll}
          className="mt-3 inline-flex items-center justify-center w-full rounded-full bg-[#ff9800] text-[#0b2342] text-[13px] font-semibold py-2 shadow-md hover:bg-[#ffb733] transition"
        >
          Let&apos;s get to work
        </Link>
      </nav>
    </div>
  );
}
