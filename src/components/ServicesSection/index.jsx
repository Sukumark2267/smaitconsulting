"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Strategy",
    description:
      "Our strategy consulting services will provide your business with the knowledge and decision-making support it needs to move forward with confidence.",
    icon: "📈",
  },
  {
    title: "Process Management",
    description:
      "We support the full process lifecycle, helping your organization achieve greater operating efficiencies and improve margins.",
    icon: "🔄",
  },
  {
    title: "Program & Project Management",
    description:
      "We deliver tailored business solutions, integrating top methodologies and working closely with your team to resolve priorities and optimize resources.",
    icon: "📁",
  },
  {
    title: "Data & Analytics",
    description:
      "Customized data & analytics solutions enable you to drive more value from your data and gain a competitive advantage.",
    icon: "📊",
  },
  {
    title: "Technology",
    description:
      "Our technology services help bridge the gap between business and IT, ensuring secure, scalable and resilient solutions.",
    icon: "💻",
  },
  {
    title: "Cyber Security",
    description:
      "Adaptive cyber security solutions safeguard critical assets, manage risk and support secure digital transformation.",
    icon: "🛡️",
  },
];

const industries = [
  {
    title: "Financial Services",
    description:
      "Supporting banks, insurers and capital markets with regulatory change, risk, finance and operational excellence initiatives.",
    icon: "🏦",
  },
  {
    title: "Public & Social Sector",
    description:
      "Helping public, education and non-profit organizations deliver better outcomes for citizens and communities.",
    icon: "🏛",
  },
  {
    title: "Energy & Utilities",
    description:
      "Driving transformation across power, renewables and utilities with data, technology and operating model change.",
    icon: "⚡",
  },
  {
    title: "Health & Life Sciences",
    description:
      "Enabling patient-centric and compliant operations for providers, payers and life sciences organizations.",
    icon: "⚕️",
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("services");
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

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

  const items = activeTab === "services" ? services : industries;

  return (
    <section
      ref={ref}
      className={`relative bg-white py-16 md:py-20 ${
        visible ? "section-reveal visible" : "section-reveal"
      }`}
    >
      {/* decorative abstract shape top-right */}
      <div className="pointer-events-none absolute -top-10 right-4 w-48 h-48 md:w-64 md:h-64 opacity-30 blur-[2px]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_10%_20%,#ff9f43,transparent_55%),radial-gradient(circle_at_80%_0,#4ab0ff,transparent_55%),radial-gradient(circle_at_30%_80%,#9b6bff,transparent_55%)] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-0 relative z-10">
       
          <span className="text-[#0a63c9] font-bold">
           Our services, processes, and frameworks  inspire a sense of confidence  that no matter the complexity we'll find clarity.{" "}
          </span>{" "}

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full"
            >
              {/* icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#d5e5ff] text-xl mb-4">
                {item.icon}
              </div>

              {/* title */}
              <h3 className="text-[16px] md:text-[17px] font-semibold text-[#0a63c9] mb-2">
                {item.title}
              </h3>

              {/* description */}
              <p className="text-sm md:text-[13px] text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
