"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import MobileMenu from "../MobileMenu";

// SERVICES DATA
const servicesMegaItems = [
  {
    id: "strategy",
    label: "Strategy",
    icon: "📈",
    blurb:
      "Strategic advisory to align your organization, prioritize initiatives, and move from intent to impact.",
  },
  {
    id: "process",
    label: "Process Management",
    icon: "🔄",
    blurb:
      "Our team supports the full process lifecycle, helping streamline operations and improve margins.",
  },
  {
    id: "ppm",
    label: "Program & Project Management",
    icon: "📁",
    blurb:
      "We deliver tailored business solutions, integrating top methodologies and working closely with your team.",
  },
  {
    id: "data",
    label: "Data & Analytics",
    icon: "📊",
    blurb:
      "Customized data & analytics solutions to drive more value from your data and create a competitive advantage.",
  },
  {
    id: "tech",
    label: "Technology",
    icon: "💻",
    blurb:
      "Technology services that bridge the gap between business and IT, ensuring resilient and scalable solutions.",
  },
  {
    id: "cyber",
    label: "Cyber Security",
    icon: "🛡️",
    blurb:
      "Adaptive cyber security services to stay ahead of emerging threats and protect critical assets.",
  },
  {
    id: "change",
    label: "Change Management",
    icon: "🔧",
    blurb:
      "Change management support that drives adoption, engagement, and measurable improvement.",
  },
  {
    id: "learning",
    label: "Learning & Development",
    icon: "📚",
    blurb:
      "Capability-building programs for leaders and teams to sustain new ways of working.",
  },
];

// INDUSTRIES DATA
const industriesItems = [
  { icon: "🏦", label: "Financial Services" },
  { icon: "🏛️", label: "Government & Broader Public Sector" },
  { icon: "🩺", label: "Healthcare" },
  { icon: "✈️", label: "Travel and Events & Meetings" },
  { icon: "🤝", label: "Social & Not-for-Profit" },
  { icon: "🚆", label: "Transportation" },
  { icon: "⚡", label: "Energy" },
];

// INSIGHTS DATA
const insightsLeftItems = [
  "Industry Insights",
  "Service Insights",
  "Case Studies",
  "Company News",
];

const insightsTopics = [
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState(
    servicesMegaItems[0].id
  );

  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const activeService =
    servicesMegaItems.find((s) => s.id === activeServiceId) ||
    servicesMegaItems[0];

  // helpers so only one mega is open at a time
  const openServices = () => {
    setServicesOpen(true);
    setIndustriesOpen(false);
    setInsightsOpen(false);
  };

  const openIndustries = () => {
    setIndustriesOpen(true);
    setServicesOpen(false);
    setInsightsOpen(false);
  };

  const openInsights = () => {
    setInsightsOpen(true);
    setServicesOpen(false);
    setIndustriesOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#062a57] shadow-lg" : "bg-[#062a57]/90"
      }`}
    >
      {/* slightly less horizontal padding + small gap so content fits better */}
<div className="w-full flex items-center justify-between px-2 lg:px-6 h-16 relative">
        {/* Logo + wordmark */}
        <div className="flex items-center min-w-0">
          <Link href="/" className="flex items-center min-w-0">
            <Image
              src="/images/smaitlogo.png"
              alt="SMA IT Consulting Group"
              width={280}
              height={90}
              className="h-[40px] sm:h-[44px] w-auto object-contain"
            />
          <span
  className="
    hidden sm:inline-block
    ml-3
    text-[#f2c27b]
    font-medium
    text-[10px] sm:text-[12px] lg:text-[14px]
    tracking-[0.22em]
    uppercase
    whitespace-nowrap
  "
>
  SMA IT CONSULTING GROUP
</span>

          </Link>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13px] xl:text-sm font-medium tracking-wide text-white">
          {/* SERVICES MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="hover:text-gray-200 transition flex items-center gap-1"
            >
              SERVICES
              <span className="text-xs mt-[1px]">▾</span>
            </button>

            {servicesOpen && (
  <div className="absolute  top-full pt-2 w-[800px] max-w-[calc(100vw-6rem)]">
                <div className="rounded-3xl bg-white shadow-2xl overflow-hidden border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* LEFT: list */}
                    <div className="md:col-span-1 bg-[#f6f8fb] p-4 pt-6">
                      <h3 className="text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase mb-4">
                        Services
                      </h3>

                      <ul className="space-y-1.5">
                        {servicesMegaItems.map((item) => {
                          const isActive = item.id === activeServiceId;
                          return (
                            <li key={item.id}>
                              <button
                                type="button"
                                onMouseEnter={() =>
                                  setActiveServiceId(item.id)
                                }
                                className={`w-full flex items-center gap-3 px-3 py-2 rounded-2xl text-left text-xs md:text-sm transition ${
                                  isActive
                                    ? "bg-white text-[#0a63c9] shadow-sm"
                                    : "text-gray-700 hover:bg-white/70"
                                }`}
                              >
                                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-50 text-base">
                                  {item.icon}
                                </span>
                                <span className="font-medium">
                                  {item.label}
                                </span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* RIGHT: active service details */}
                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col gap-5">
                      <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-6">
                        <div className="flex-1 flex flex-col gap-3">
                          <h4 className="text-sm font-semibold text-gray-800">
                            {activeService.label}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            {activeService.blurb}
                          </p>
                          <Link
                            href="/Services"
                            className="inline-flex items-center justify-center rounded-full bg-[#062a57] text-white text-xs md:text-sm font-semibold px-5 py-2 w-fit hover:bg-[#041d3a] transition"
                          >
                            Learn more
                          </Link>
                        </div>

                        <div className="w-full md:w-40 h-24 md:h-28 rounded-2xl bg-white shadow-sm border border-blue-50 flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full bg-[radial-gradient(circle_at_10%_20%,#ffb74d,transparent_60%),radial-gradient(circle_at_80%_0,#4ab0ff,transparent_60%),radial-gradient(circle_at_25%_80%,#9b6bff,transparent_60%)] opacity-80" />
                        </div>
                      </div>

                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Our services, processes, and frameworks{" "}
                        <span className="font-semibold text-[#0a63c9]">
                          inspire a sense of confidence
                        </span>{" "}
                        that no matter the complexity we&apos;ll{" "}
                        <span className="font-semibold text-[#0a63c9]">
                          find clarity.
                        </span>
                      </p>

                      <div className="mt-1 rounded-2xl bg-gradient-to-r from-[#0a63c9] via-[#084b9c] to-[#062a57] text-white px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div className="text-xs md:text-sm font-medium">
                          Ready to take action and find your clarity?
                        </div>
                        <Link
                          href="/ContactUs"
                          className="inline-flex items-center justify-between rounded-full border-2 border-[#ff9800] bg-[#ff9800] text-xs md:text-sm font-semibold px-4 py-2 text-[#0b2342] shadow-sm hover:bg-transparent hover:text-[#ff9800] transition"
                        >
                          Let&apos;s Get to Work
                          <span className="ml-1 text-sm">➜</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* INDUSTRIES MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={openIndustries}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              type="button"
              className="hover:text-gray-200 transition flex items-center gap-1"
            >
              INDUSTRIES
              <span className="text-xs mt-[1px]">▾</span>
            </button>

            {industriesOpen && (
  <div className="absolute left-[290%] -translate-x-1/2 mt-4 w-[720px] max-w-[calc(100vw-4rem)]">
                <div className="rounded-3xl bg-white shadow-2xl overflow-hidden border border-gray-200 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                      Our work inspires action across a broad array of
                      industries and sectors.
                    </h3>
                    <Link
                      href="/Industries"
                      className="inline-flex items-center justify-center rounded-full bg-[#062a57] text-white text-xs md:text-sm font-semibold px-5 py-2 hover:bg-[#041d3a] transition"
                    >
                      Learn more
                    </Link>
                  </div>

                  <hr className="border-t border-gray-200 mb-4" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                    {industriesItems.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 text-xs md:text-sm text-gray-700 hover:text-[#0a63c9] cursor-pointer transition"
                      >
                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-50 text-base">
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* INSIGHTS MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={openInsights}
            onMouseLeave={() => setInsightsOpen(false)}
          >
            <button
              type="button"
              className="hover:text-gray-200 transition flex items-center gap-1"
            >
              INSIGHTS
              <span className="text-xs mt-[1px]">▾</span>
            </button>

            {insightsOpen && (
  <div className="absolute left-[330%] -translate-x-1/2 top-full pt-2 w-[760px] max-w-[calc(100vw-4rem)]">
                <div className="rounded-3xl bg-white shadow-2xl overflow-hidden border border-gray-200 p-6 md:p-8">
                  <div className="grid grid-cols-[220px,1fr] gap-8">
                    {/* LEFT COLUMN */}
                    <div className="flex flex-col justify-between">
                      <div className="space-y-3">
                        {insightsLeftItems.map((item) => (
                          <button
                            key={item}
                            type="button"
                            className="w-full text-left text-xs md:text-sm text-gray-800 hover:text-[#0a63c9] hover:bg-blue-50/50 rounded-full px-3 py-2 transition"
                          >
                            {item}
                          </button>
                        ))}
                      </div>

                      <Link
                        href="/Insights"
                        className="mt-5 inline-flex items-center justify-center rounded-full bg-[#062a57] text-white text-xs md:text-sm font-semibold px-5 py-2 hover:bg-[#041d3a] transition w-max"
                      >
                        All Insights
                      </Link>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="border-l border-gray-200 pl-8">
                      <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3">
                        Insights
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
                        {insightsTopics.map((topic) => (
                          <button
                            key={topic}
                            type="button"
                            className="flex items-center gap-2 text-xs md:text-sm text-gray-700 hover:text-[#0a63c9] transition text-left"
                          >
                            <span className="w-4 h-4 rounded-full border border-[#0a63c9] flex items-center justify-center text-[10px]">
                              ◇
                            </span>
                            <span>{topic}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SIMPLE LINKS */}
          <Link href="/AboutUs" className="hover:text-gray-200 transition">
            ABOUT
          </Link>
          <Link href="/" className="hover:text-gray-200 transition">
            CAREERS
          </Link>
        </nav>

        {/* CTA (RIGHT) */}
        <div className="hidden lg:flex shrink-0">
          <button
            className="
              group flex items-center gap-2 
              rounded-full border-2 border-[#ff9800]
              bg-[#ff9800] text-[13px] font-semibold
              px-4 py-2
              shadow-md
              transition-all
              hover:bg-transparent hover:text-[#ff9800]
              hover:shadow-lg
            "
          >
            <span>Let&apos;s get to work</span>
            <span className="transition-transform group-hover:translate-x-1">
              ➜
            </span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="block lg:hidden text-white focus:outline-none cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={26} className="text-white" />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </header>
  );
}
