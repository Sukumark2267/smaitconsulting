"use client";

import Link from "next/link";

const mobileServices = [
  "Strategy",
  "Application Development",
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
  if (!isOpen) return null;

  const handleItemClick = () => {
    onClose?.(); // close menu after navigation
  };

  return (
    // simple dropdown panel under the navbar
    <div className="lg:hidden bg-[#062a57] text-white border-t border-white/10">
      <nav className="px-6 py-5 flex flex-col gap-6 text-sm">
        {/* SERVICES */}
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Services
          </div>
          <ul className="space-y-1.5 text-[13px] text-gray-100">
            {mobileServices.map((item) => (
              <li
                key={item}
                className="pl-3 border-l border-white/15"
              >
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/Services"
            onClick={handleItemClick}
            className="mt-2 inline-flex text-[13px] text-[#4ab0ff] underline"
          >
            View all services
          </Link>
        </div>

        {/* INDUSTRIES */}
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Industries
          </div>
          <ul className="space-y-1.5 text-[13px] text-gray-100">
            {mobileIndustries.map((item) => (
              <li
                key={item}
                className="pl-3 border-l border-white/15"
              >
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/Industries"
            onClick={handleItemClick}
            className="mt-2 inline-flex text-[13px] text-[#4ab0ff] underline"
          >
            View all industries
          </Link>
        </div>

        {/* INSIGHTS */}
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Insights
          </div>
          <ul className="space-y-1.5 text-[13px] text-gray-100">
            {mobileInsightsTopics.map((topic) => (
              <li
                key={topic}
                className="pl-3 border-l border-white/15"
              >
                {topic}
              </li>
            ))}
          </ul>
          <Link
            href="/Insights"
            onClick={handleItemClick}
            className="mt-2 inline-flex text-[13px] text-[#4ab0ff] underline"
          >
            All insights
          </Link>
        </div>

        {/* SIMPLE LINKS */}
        <div className="flex flex-col gap-2 text-[13px] text-gray-100">
          <Link
            href="/AboutUs"
            onClick={handleItemClick}
            className="hover:text-[#4ab0ff]"
          >
            About
          </Link>
          <Link
            href="/"
            onClick={handleItemClick}
            className="hover:text-[#4ab0ff]"
          >
            Careers
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/ContactUs"
          onClick={handleItemClick}
          className="mt-2 mb-2 inline-flex items-center justify-center w-full rounded-full bg-[#ff9800] text-[#0b2342] text-[13px] font-semibold py-2 shadow-md hover:bg-[#ffb733] transition"
        >
          Let&apos;s get to work
        </Link>
      </nav>
    </div>
  );
}
