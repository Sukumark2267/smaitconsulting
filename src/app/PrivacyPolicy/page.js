"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Preloader from "@/components/Preloader";

export default function PrivacyPolicy() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <>
      <Navbar />
      <section className="PrivacyPolicy px-6 md:px-20 py-16 text-gray-100 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-widest">
            Privacy Policy
          </h1>
          <p className="mb-6 text-lg text-gray-300 text-center">
            Last updated: October 9, 2025
          </p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-3xl mb-3 tracking-normal">1. Introduction</h2>
              <p>
                smaitconsultinggroup (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to
                protecting your personal information and your right to privacy.
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                2. Information We Collect
              </h2>
              <p>
                We may collect personal information that you provide directly to
                us such as your name, email address, phone number, and any other
                details you share through contact forms or newsletter. We may
                also collect non-personal information automatically such as your
                browser type, device, and browsing activity.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                3. How We Use Your Information
              </h2>
              <p>
                We use your information to improve our services, communicate
                with you, respond to inquiries, send updates or promotional
                materials, and ensure a better experience with Dreamland
                Athletics.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                4. Sharing Your Information
              </h2>
              <p>
                We do not sell or rent your personal data. We may share
                information with trusted service providers who help us operate
                our website and deliver our services, subject to strict data
                protection agreements.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                5. Cookies and Tracking
              </h2>
              <p>
                Our website may use cookies to enhance your browsing experience
                and analyze site traffic. You can choose to disable cookies
                through your browser settings, though some features may not
                function properly as a result.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                6. Data Security
              </h2>
              <p>
                We use industry-standard security measures to protect your
                personal data. However, please note that no electronic
                transmission or storage system is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                7. Your Privacy Rights
              </h2>
              <p>
                Depending on your location, you may have rights to access,
                correct, delete, or restrict the use of your personal
                information. To exercise these rights, please contact us using
                the details below.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-3 tracking-normal">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be reflected on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-3 tracking-normal">9. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <p className="mt-3">
                <strong>Email:</strong> support@dreamlandathletics.com
                <br />
                <strong>Address:</strong> 860 N Park Dr, Brampton, ON L6S 4N5,
                Canada
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
