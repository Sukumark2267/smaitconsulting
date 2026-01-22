"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import MobileMenu from "../MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#062a57] shadow-lg" : "bg-[#062a57]/90"
      }`}
    >
      <div className="w-full flex items-center justify-between px-4 lg:px-12 h-12 relative">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/smaitlogo.png"
              alt="SMA IT Consulting Group"
              width={240}
              height={70}
              className="h-[46px] w-auto object-contain"
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-white">
          {/* SERVICES with mega menu (only Strategy for now) */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
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
<div className="absolute left-[20%] mt-4 w-[800px] max-w-[calc(100vw-6rem)]">
                <div className="rounded-3xl bg-white shadow-2xl overflow-hidden border border-gray-200">
                  {/* IMPORTANT: simple 3-column grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* LEFT: menu (only Strategy now) */}
                    <div className="md:col-span-1 bg-[#f6f8fb] p-4 pt-6">
                      <h3 className="text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase mb-4">
                        Services
                      </h3>

                      <button
                        type="button"
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-2xl text-left text-xs md:text-sm transition bg-white text-[#0a63c9] shadow-sm"
                      >
                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-50 text-base">
                          📈
                        </span>
                        <span className="font-medium">Strategy</span>
                      </button>
                    </div>

                    {/* RIGHT: Strategy content */}
                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col gap-5">
                      {/* TOP ROW: heading + text + image */}
                      <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-6">
                        {/* LEFT: heading + description + learn more */}
                        <div className="flex-1 flex flex-col gap-3">
                          <h4 className="text-sm font-semibold text-gray-800">
                            Strategy
                          </h4>
                          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            Strategic advisory to align your organization,
                            prioritize initiatives, and move from intent to
                            impact.
                          </p>

                          <Link
                            href="/Services"
                            className="inline-flex items-center justify-center rounded-full bg-[#062a57] text-white text-xs md:text-sm font-semibold px-5 py-2 w-fit hover:bg-[#041d3a] transition"
                          >
                            Learn more
                          </Link>
                        </div>

                        {/* RIGHT: small graphic box */}
                        <div className="w-full md:w-40 h-24 md:h-28 rounded-2xl bg-white shadow-sm border border-blue-50 flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full bg-[radial-gradient(circle_at_10%_20%,#ffb74d,transparent_60%),radial-gradient(circle_at_80%_0,#4ab0ff,transparent_60%),radial-gradient(circle_at_25%_80%,#9b6bff,transparent_60%)] opacity-80" />
                        </div>
                      </div>

                      {/* TEXT BELOW ROW */}
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

                      {/* CTA CARD AT BOTTOM */}
                      <div className="mt-1 rounded-2xl bg-gradient-to-r from-[#0a63c9] via-[#084b9c] to-[#062a57] text-white px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div className="text-xs md:text-sm font-medium">
                          Ready to take action and find your clarity?
                        </div>
                        <Link
                          href="/ContactUs"
                          className="inline-flex items-center justify-between rounded-full border-2 border-[#ff9800] bg-[#ff9800] text-xs md:text-sm font-semibold px-5 py-2 text-[#0b2342] shadow-sm hover:bg-transparent hover:text-[#ff9800] transition"
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

          {/* OTHER TOP NAV LINKS */}
          <Link href="/" className="hover:text-gray-200 transition">
            INDUSTRIES
          </Link>
          <Link href="/" className="hover:text-gray-200 transition">
            INSIGHTS
          </Link>
          <Link href="/AboutUs" className="hover:text-gray-200 transition">
            ABOUT
          </Link>
          <Link href="/" className="hover:text-gray-200 transition">
            CAREERS
          </Link>
        </nav>

        {/* CTA (RIGHT side on desktop) */}
        <div className="hidden lg:flex">
          <button
            className="
              group flex items-center gap-2 
              rounded-full border-2 border-[#ff9800]
              bg-[#ff9800] text-sm font-semibold
              px-5 py-2
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
          <Menu size={26} />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </header>
  );
}
