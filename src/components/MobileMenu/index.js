"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-black border-b border-neutral-800">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/dl_primary_logo.png"
            alt="smaitconsultinggroup"
            width={150}
            height={50}
            className="h-auto w-[150px]"
            priority
          />
        </Link>

        {/* Menu Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Slide Menu */}
      {open && (
        <div className="lg:hidden bg-black text-white px-6 py-4 font-swiss text-[14px] tracking-[0.15em] uppercase">
          <nav className="flex flex-col space-y-4">

            <Link href="/" onClick={() => setOpen(false)} className="hover:text-[var(--dl-gold)] transition">
              Home
            </Link>

            <Link href="/about" onClick={() => setOpen(false)} className="hover:text-[var(--dl-gold)] transition">
              About
            </Link>

            <Link href="/what-we-offer" onClick={() => setOpen(false)} className="hover:text-[var(--dl-gold)] transition">
              What We Offer
            </Link>

            <Link href="/memberships" onClick={() => setOpen(false)} className="hover:text-[var(--dl-gold)] transition">
              Memberships
            </Link>

            <Link href="/gallery" onClick={() => setOpen(false)} className="hover:text-[var(--dl-gold)] transition">
              Gallery
            </Link>

            <Link href="/reviews" onClick={() => setOpen(false)} className="hover:text-[var(--dl-gold)] transition">
              Reviews
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[var(--dl-gold)] transition">
              Contact
            </Link>

            {/* Free Pass Button */}
            <Link
              href="/free-pass"
              onClick={() => setOpen(false)}
              className="mt-4 bg-[var(--dl-gold)] text-black py-2 px-5 rounded-md font-bold text-[13px] uppercase tracking-[0.20em] text-center"
            >
              Free Pass
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
