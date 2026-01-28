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
      {/* Blue overlay – a bit lighter so buildings show more */}
      <div className="absolute inset-0 bg-[#062a57]/75" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 lg:px-16 py-24">
        {/* MAIN HEADING – no background box, just text */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
          We Deliver{" "}
          <span className="font-bold italic">what matters most</span>
          <br />
          for your Organization
        </h1>

        {/* Supporting text */}
        <p className="mt-6 text-sm sm:text-base max-w-2xl leading-relaxed  drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
          Our team of dedicated consultants help
          <br />
          clients hit the ground running to{" "}
          <span className="font-semibold">deliver</span>{" "}
          <span className="font-semibold italic">game-changing results.</span>
        </p>
      </div>
    </section>
  );
}
