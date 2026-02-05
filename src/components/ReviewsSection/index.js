"use client";

import React from "react";

const reviews = [
  {
    name: "Ananya C",
    role: "Senior IT Consultant",
    quote:
      "The team at SMA is exceptional. They guided me every step of the way to secure a fantastic position.",
  },
  {
    name: "Daniel C",
    role: "Program Manager",
    quote:
      "SMA IT Consulting Group was instrumental in landing my next role. Their industry connections are unmatched. Incredible management consulting firm with the best talent in the industry!",
  },
  {
    name: "John B",
    role: "Lending Operations Specialist",
    quote:
      "I've had the pleasure of working with SMA IT Consulting for many years, first as a client and now as their consultant. Their team is knowledgeable, responsive, and truly committed to delivering top-quality IT solutions. It's been amazing to see their consistent growth and dedication to innovation. A reliable, forward-thinking company that's always a step ahead. They've been a trusted TECH partner. Highly recommend!",
  },
  {
    name: "Sony S",
    role: "Project Manager",
    quote:
      "As a consultant placed through SMA IT, I had an excellent experience throughout the entire process. They went above and beyond to identify the right opportunity and provided clear guidance at every stage.",
  },
  {
    name: "Wasim K",
    role: "Business Analyst",
    quote:
      "I highly recommend SMA IT. Their commitment and connections in the industry are incredible. Their professionalism, reliability, and genuine commitment to acting in the best interests of both the consultant and the client truly set them apart.",
  },
  {
    name: "Roy S",
    role: "Sr Developer, Technology",
    quote:
      "SMA IT team was consistently responsive, knowledgeable, and proactive in offering advice and solutions when questions or time-sensitive issues arose.",
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
    <section id="reviews" className="w-full py-16 sm:py-20 bg-[#f5f7fb]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* TOP INTRO: How We Can Help */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#4765d0]">
            Bring Your Vision to Life
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#152347]">
            How We Can Help
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-12 sm:mb-16 text-left">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#152347] mb-2">
              Experienced Consultants
            </h3>
            <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#273553]">
              We bring more than technical expertise; we partner with banks and
              financial organizations to navigate ongoing technological
              evolution. Our proven delivery history reflects our ability to
              drive successful outcomes in complex environments.
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#152347] mb-2">
              Technology Advisory
            </h3>
            <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#273553]">
              Our Technology Advisory Services deliver seamless, end-to-end
              guidance across technology implementation, custom software
              development, cloud transformation, cybersecurity, and tailored IT
              solutions. We ensure comprehensive support for today’s complex
              technology landscape.
            </p>
          </div>
        </div>

        {/* REVIEWS HEADING */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#8a9ac4]">
            Reviews
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152347]">
            Accelerate Your Career with Our Talent Acceleration Program
          </h2>
        </div>

        {/* CARDS GRID */}
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
