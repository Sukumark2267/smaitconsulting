"use client";

import { useState, useEffect, useRef } from "react";

// Testimonials data with graphic avatars
const testimonials = [
  {
    name: "Anita",
    role: "CFO",
    icon: "👩‍💼",
    text: "They brought clarity to complex regulatory requirements and helped us build a scalable operating model.",
  },
  {
    name: "Michael",
    role: "Head of Operations",
    icon: "👨‍💼",
    text: "Their consultants quickly became trusted partners for our internal teams, driving measurable improvements.",
  },
  {
    name: "Sonia",
    role: "Project Manager",
    icon: "👩‍💻",
    text: "SMA IT Consulting Group exceeded my expectations. Their dedication and insight into our business challenges were remarkable.",
  },
  {
    name: "Wasim",
    role: "Business Analyst",
    icon: "🧑‍💻",
    text: "I highly recommend SMA IT Consulting Group. Their structure and communication throughout the engagement were incredible.",
  },
];

const ITEMS_PER_PAGE = 3;

export default function ReviewsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const currentPage = Math.floor(startIndex / ITEMS_PER_PAGE);

  // Scroll reveal animation
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }),
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Next / Prev
  const handleNext = () => {
    setStartIndex((prev) =>
      (prev + ITEMS_PER_PAGE) % (ITEMS_PER_PAGE * totalPages)
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      (prev - ITEMS_PER_PAGE + ITEMS_PER_PAGE * totalPages) %
      (ITEMS_PER_PAGE * totalPages)
    );
  };

  // Visible items handling
  const visibleItems = testimonials.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const itemsToShow =
    visibleItems.length < ITEMS_PER_PAGE
      ? [
          ...visibleItems,
          ...testimonials.slice(0, ITEMS_PER_PAGE - visibleItems.length),
        ]
      : visibleItems;

  return (
    <section
      ref={ref}
      className={`relative 
      bg-gradient-to-b from-[#eef4ff] to-[#d9e7ff] 
      py-16 md:py-20 
      ${
        visible ? "section-reveal visible" : "section-reveal"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-12">
          Reviews
        </h2>

        {/* Row with arrows */}
        <div className="flex items-center gap-4 md:gap-8">
          
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="hidden md:flex items-center justify-center
                       w-11 h-11 rounded-full border border-gray-400
                       text-gray-600 hover:bg-white hover:shadow-sm transition"
          >
            ←
          </button>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-10">
            {itemsToShow.map((item, idx) => (
              <article
                key={`${item.name}-${idx}`}
                className="flex flex-col h-full"
              >
                {/* Quote */}
                <div className="text-4xl text-gray-400 leading-none mb-4">”</div>

                {/* Review Text */}
                <p className="text-sm md:text-[13px] text-gray-700 leading-relaxed mb-6">
                  {item.text}
                </p>

                {/* Person */}
                <div className="mt-auto flex items-center gap-3">
                  {/* Avatar Graphic */}
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full 
                               bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300
                               text-blue-900 text-2xl font-bold shadow-sm"
                  >
                    {item.icon || item.name.charAt(0)}
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-800">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-500">{item.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next testimonials"
            className="hidden md:flex items-center justify-center
                       w-11 h-11 rounded-full border border-gray-400
                       text-gray-600 hover:bg-white hover:shadow-sm transition"
          >
            →
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index * ITEMS_PER_PAGE)}
              className={`h-2.5 w-2.5 rounded-full transition
               ${
                 index === currentPage
                   ? "bg-gray-800"
                   : "bg-gray-400 hover:bg-gray-500"
               }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
