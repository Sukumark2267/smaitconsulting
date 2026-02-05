"use client";

import React, { useEffect, useRef, useState } from "react";
import "./services.css"; // keep this if you’re using it for extra styling

const serviceItems = [
  {
    title: "Strategy and Planning",
    body: `Technology that doesn’t align with your organization’s goals and with
how your teams work inhibits progress and leaves you open to risk.
Find your just-right solution—and a prioritized roadmap for achieving
it—with a team that delves deeply into your organization to support
your strategy.`,
  },
  {
    title: "Data Analytics",
    body: `In complex environments like commercial lending and capital markets,
data without direction creates noise, not value. We transform
fragmented, high-volume data into trusted insights that power better
decisions, strengthen risk management, improve regulatory confidence,
and drive sustainable growth.`,
  },
  {
    title: "IT Managed Services",
    body: `Avoid expensive shutdowns, maintenance problems, security breaches,
and daily headaches with proactive attention from a team devoted to
big-picture thinking. It’s more than just answers to day-to-day
technology concerns. It’s a proactive management strategy from experts
who’ve been there.`,
  },
  {
    title: "Multisource Service Integration",
    body: `Managing multiple suppliers uniformly and getting them to work together
effectively is a daunting task when you’re also running an
organization. We seek the best partners in each specialty and provide
a single point of contact of control back to you.`,
  },
  {
    title: "Cybersecurity and Disaster Recovery",
    body: `Security threats constantly grow and evolve—and cost organizations
dearly, in terms of financial and reputational damage. Comprehensive
cyber-threat mitigation strategies keep breaches from derailing your
progress and ensure regulatory compliance.`,
  },
  {
    title: "Cloud Solutions",
    body: `When your impact is throttled by legacy systems and outdated processes,
our technical experts can help you leverage the cloud with creative
solutions that empower your people.`,
  },
];

export default function Services() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // simple reveal-on-scroll (can remove if you don’t want any animation)
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
  <section
    id="services"
    ref={ref}
    className={`bg-[#062a57] py-12 md:py-16 ${
      visible ? "section-reveal visible" : "section-reveal"
    }`}
  >
    <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-10 lg:gap-14">

      {/* LEFT: heading + intro */}
    <div className="lg:w-[40%] flex flex-col">
  {/* Small label */}
  <h1 className="text-xs tracking-[0.20em] uppercase text-[#bcd6ff] mb-4">
    SERVICES
  </h1>

  {/* Main heading styled like your website titles */}
  <h2 className="
      text-white 
      text-[28px] 
      md:text-[34px] 
      lg:text-[40px] 
      font-semibold 
      leading-[1.25] 
      service-title-font
    ">
    Align your technology to your business goals and reach your desired
    outcomes faster and more cost-effectively.
  </h2>
</div>



      {/* RIGHT: service list */}
      <div className="lg:w-[60%]">
        <div className="divide-y divide-[#0b4079]">
          {serviceItems.map((item) => (
            <article key={item.title} className="py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-semibold text-[#4ab0ff] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-[15px] leading-relaxed text-[#e2ecff] whitespace-pre-line">
                    {item.body}
                  </p>
                </div>

                {/* Arrow */}
                <span className="hidden sm:inline-block mt-1 text-[#ffb74d] text-xl">
                  ➜
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

}
