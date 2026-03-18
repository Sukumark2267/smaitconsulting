// components/ContactSection.jsx
"use client";

import React from "react";
import "./contact.css";

const ContactSection = () => {
  // New CONNECT form handler
  const handleConnectSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const payload = {
      fname:
        `${data.get("firstName") || ""} ${data.get("lastName") || ""}`.trim(),
      email: data.get("email") || "",
      phone: data.get("phone") || "",
      company: data.get("company") || "",
      need: data.get("need") || "",
      message: data.get("message") || "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || "Message sent successfully.");
        form.reset();
      } else {
        alert(result.error || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#020c1f] text-white py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 space-y-14">
        {/* ===================== 1) CONNECT CARD ===================== */}
        <div className="w-full flex flex-col md:flex-row rounded-3xl bg-white shadow-[0_18px_55px_rgba(17,30,63,0.16)] overflow-hidden border border-[#e1e7f3]">
          {/* LEFT PANEL */}
          <div className="md:w-[38%] bg-gradient-to-b from-[#063a78] via-[#0663b6] to-[#04a4d9] text-white px-7 py-10 sm:px-10 sm:py-12 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
              Connect
            </h2>

            <div className="h-px w-16 bg-white/40 mb-6" />

            <p className="text-sm sm:text-[15px] leading-relaxed max-w-xs">
              Find out how our team can help you achieve great outcomes. Share a
              bit about what you&apos;re working on, and we&apos;ll follow up
              with the right next steps.
            </p>
          </div>

          {/* RIGHT: FORM */}
          <div className="md:w-[62%] px-7 py-8 sm:px-10 sm:py-10">
            <form onSubmit={handleConnectSubmit} className="space-y-5">
              {/* First / Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[13px] font-medium text-[#1a2750] mb-1.5"
                  >
                    First name<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="Your first name"
                    className="w-full rounded-none border-b border-[#0b6bbd] bg-transparent px-0 py-2 text-[14px] text-[#1a2750] placeholder:text-[#9aa4c4] focus:outline-none focus:border-[#084b9c]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[13px] font-medium text-[#1a2750] mb-1.5"
                  >
                    Last name<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Your last name"
                    className="w-full rounded-none border-b border-[#0b6bbd] bg-transparent px-0 py-2 text-[14px] text-[#1a2750] placeholder:text-[#9aa4c4] focus:outline-none focus:border-[#084b9c]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[13px] font-medium text-[#1a2750] mb-1.5"
                >
                  Work Email<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-none border-b border-[#0b6bbd] bg-transparent px-0 py-2 text-[14px] text-[#1a2750] placeholder:text-[#9aa4c4] focus:outline-none focus:border-[#084b9c]"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-[13px] font-medium text-[#1a2750] mb-1.5"
                >
                  Company name<span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  placeholder="Your company"
                  className="w-full rounded-none border-b border-[#0b6bbd] bg-transparent px-0 py-2 text-[14px] text-[#1a2750] placeholder:text-[#9aa4c4] focus:outline-none focus:border-[#084b9c]"
                />
              </div>

              {/* Need select */}
              <div>
                <label
                  htmlFor="need"
                  className="block text-[13px] font-medium text-[#1a2750] mb-1.5"
                >
                  Which best describes your need?
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="need"
                  name="need"
                  required
                  defaultValue=""
                  className="w-full rounded-none border-b border-[#0b6bbd] bg-transparent px-0 py-2 text-[14px] text-[#1a2750] focus:outline-none focus:border-[#084b9c]"
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option value="strategy">Strategy &amp; advisory</option>
                  <option value="technology">
                    Technology / platform delivery
                  </option>
                  <option value="talent">Talent &amp; resourcing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[13px] font-medium text-[#1a2750] mb-1.5"
                >
                  Tell us what you’re experiencing.
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Share a few details about your request."
                  className="w-full rounded-none border-b border-[#0b6bbd] bg-transparent px-0 py-2 text-[14px] text-[#1a2750] placeholder:text-[#9aa4c4] resize-none focus:outline-none focus:border-[#084b9c]"
                />
              </div>

              {/* Privacy copy */}
              <p className="text-[11px] text-[#7c88aa] leading-relaxed">
                To better understand how we protect your privacy, please review
                our{" "}
                <span className="text-[#0a63c9] underline cursor-pointer">
                  Privacy Policy
                </span>
                .
              </p>

              {/* Submit button */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-md bg-[#0b6bbd] hover:bg-[#084b9c] text-white text-[13px] font-semibold px-6 py-2.5 shadow-sm"
                >
                  Send Your Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ===================== 2) LOCATION / HOURS / CONTACT + MAP ===================== */}
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-white uppercase text-left md:text-center">
            GET IN TOUCH
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="contact-info">
              <h4 style={{ fontWeight: "bolder" }}>LOCATION</h4>
              <p>30 Eglinton Ave W #400, Mississauga, ON, L5R 3E7</p>
            </div>

            <div className="contact-info">
              <h4 style={{ fontWeight: "bolder" }}>HOURS</h4>
              <p>Monday–Friday: 9am – 5:30pm</p>
            </div>

            <div className="contact-info">
              <h4 style={{ fontWeight: "bolder" }}>CONTACT</h4>
              <a href="tel:+14387229543">(438) 7229543</a>
              <a href="mailto:info@smaitconsultinggroup.com">
                info@smaitconsultinggroup.com
              </a>
              <a
                href="https://www.instagram.com/smaitconsultinggroup/"
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            </div>
          </div>

         <div className="map-container">
  <iframe
    title="SMA IT Consulting Group Location"
    src="https://www.google.com/maps?q=30%20Eglinton%20Ave%20W%20%23400%2C%20Mississauga%2C%20ON%20L5R%203E7&output=embed"
    width="100%"
    height="450"
    allowFullScreen
    loading="lazy"
    style={{ border: 0 }}
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
