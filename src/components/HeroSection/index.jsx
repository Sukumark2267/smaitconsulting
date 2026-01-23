"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] w-full text-white flex items-center"
      style={{
        backgroundImage: "url('/images/axispartBG_1.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#062a57]/85" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 lg:px-16 py-24">
        {/* Black box with main heading */}
<div className="bg-[#062a57]/40 backdrop-blur-sm border border-white/20 px-6 py-8 sm:px-10 sm:py-10 max-w-3xl animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
            We Deliver{" "}
            <span className="font-bold italic">what matters most</span>
            <br />
            for your Organization
          </h1>
        </div>

        {/* Supporting text */}
        <p className="mt-6 text-sm sm:text-base max-w-2xl leading-relaxed animate-fade-in">
          Our team of dedicated consultants help
          <br />
          clients hit the ground running to{" "}
          <span className="font-semibold">deliver</span>{" "}
          <span className="font-semibold italic">
            game-changing results.
          </span>
        </p>
      </div>
    </section>
  );
}
