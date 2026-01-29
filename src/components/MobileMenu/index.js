"use client";

import Link from "next/link";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleItemClick = () => {
    onClose?.();
  };

  return (
    // Full-screen overlay under the fixed navbar
    <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-[#062a57] text-white border-t border-white/10 overflow-y-auto">
      {/* changed nav -> div to avoid global nav CSS */}
      <div className="px-6 py-5 flex flex-col gap-4 text-sm uppercase tracking-[0.16em]">
        {/* MAIN MENU ITEMS */}
        <Link
          href="/Services"
          onClick={handleItemClick}
          className="py-2 border-b border-white/10 hover:text-[#4ab0ff]"
        >
          Services
        </Link>

        <Link
          href="/Industries"
          onClick={handleItemClick}
          className="py-2 border-b border-white/10 hover:text-[#4ab0ff]"
        >
          Industries
        </Link>

        <Link
          href="/case-studies"
          onClick={handleItemClick}
          className="py-2 border-b border-white/10 hover:text-[#4ab0ff]"
        >
          Insights
        </Link>

        <Link
          href="/AboutUs"
          onClick={handleItemClick}
          className="py-2 border-b border-white/10 hover:text-[#4ab0ff]"
        >
          About
        </Link>

        <Link
          href="/"
          onClick={handleItemClick}
          className="py-2 border-b border-white/10 hover:text-[#4ab0ff]"
        >
          Careers
        </Link>

        <Link
          href="/ContactUs"
          onClick={handleItemClick}
          className="py-2 border-b border-white/10 hover:text-[#4ab0ff]"
        >
          Contact
        </Link>

        {/* CTA BUTTON */}
        <Link
          href="/ContactUs"
          onClick={handleItemClick}
          className="mt-4 mb-4 inline-flex items-center justify-center w-full rounded-full bg-white text-[#062a57] text-[13px] font-semibold py-2 shadow-md hover:bg-[#e5ecff] transition"
        >
          Let&apos;s get to work
        </Link>
      </div>
    </div>
  );
}
