"use client";

import React from "react";

const reviews = [
  {
    name: "Ananya",
    role: "Senior IT Consultant",
    quote:
      "The team at SMA IT Consulting Group is exceptional. They guided me every step of the way to secure a fantastic position.",
  },
  {
    name: "Daniel",
    role: "Program Manager",
    quote:
      "SMA IT Consulting Group was instrumental in landing my next role. Their industry connections are unmatched.",
  },
  {
    name: "Ozgur",
    role: "Lending Operations Specialist",
    quote:
      "SMA IT Consulting Group is the go-to consulting firm. Their expertise and connections in the industry are unparalleled.",
  },
  {
    name: "Sonia",
    role: "Project Manager",
    quote:
      "SMA IT Consulting Group exceeded my expectations. Their dedication and network within the industry are remarkable.",
  },
  {
    name: "Wasim",
    role: "Business Analyst",
    quote:
      "I highly recommend SMA IT Consulting Group. Their commitment and connections in the industry are incredible.",
  },
  {
    name: "Roy",
    role: "Vice President, Technology",
    quote:
      "SMA IT Consulting Group played a crucial role in strengthening our delivery outcomes and client relationships.",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="w-full py-16 sm:py-20 bg-[#f5f7fb]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#8a9ac4]">
            REVIEWS
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152347]">
            Accelerate Your Career with Our Talent Acceleration Program
          </h2>
          {/* <p className="mt-3 text-sm sm:text-base text-[#5f6e90] max-w-2xl mx-auto">
            Feedback from consultants, managers, and leaders who have worked
            with SMA IT Consulting Group.
          </p> */}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="relative bg-white rounded-2xl sm:rounded-3xl border border-[#e3e9f7] shadow-[0_14px_40px_rgba(20,46,100,0.06)] px-6 py-6 sm:px-7 sm:py-7 flex flex-col justify-between"
            >
              {/* Quote icon */}
              <div className="text-[#4765d0] text-3xl sm:text-4xl leading-none mb-3">
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#273553] mb-6">
                {review.quote}
              </p>

              {/* Footer: avatar + name/role */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#4ab0ff] to-[#ffb74d] flex items-center justify-center text-xs sm:text-sm font-semibold text-[#152347]">
                  {getInitials(review.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#152347]">
                    {review.name}
                  </p>
                  <p className="text-[11px] sm:text-[12px] text-[#7b89b0]">
                    {review.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
