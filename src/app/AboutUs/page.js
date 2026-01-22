"use client";

import "./AboutUs.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Newsletter from "@/components/ServicesSection";
import Preloader from "@/components/Preloader";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <>
      <Navbar />

      <main className="AboutUs bg-slate-950 text-slate-50 min-h-screen">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden">
          {/* subtle gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1e4ed8,transparent_60%),radial-gradient(circle_at_bottom_right,#0ea5e9,transparent_55%)] opacity-40 pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 lg:px-6 py-20 lg:py-24 grid gap-12 lg:grid-cols-[1.4fr,1fr] items-center">
            {/* Left: title text */}
            <div>
              {/* <div className="inline-block mb-4">
                <TextHoverEffect
                  className="about-us-text text-xs tracking-[0.25em] font-semibold text-sky-300"
                  text="ABOUT US"
                />
              </div> */}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-5">
                We help organizations{" "}
                <span className="text-sky-300">
                  turn complex change into clear outcomes.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200/85 max-w-xl mb-6">
                SMA IT Consulting Group is a strategy and technology consulting firm
                working at the intersection of business goals, data, and
                digital platforms. We partner with financial services and
                technology-driven organizations to design, deliver, and scale
                programmes that actually move the needle.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/ContactUs"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-sky-400 text-slate-950 text-sm font-semibold shadow-lg shadow-sky-500/25 hover:bg-sky-300 transition"
                >
                  Talk to our team
                </Link>
                <Link
                  href="/Services"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-slate-400/60 text-sm font-semibold hover:border-sky-300 hover:text-sky-200 transition"
                >
                  Explore our services
                </Link>
              </div>
            </div>

            {/* Right: mini highlight cards */}
            <div className="grid gap-4 sm:gap-5">
              <div className="bg-slate-900/80 border border-slate-700/70 rounded-2xl p-4 shadow-xl">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-300 mb-1">
                  WHY CLIENTS CHOOSE US
                </p>
                <p className="text-sm text-slate-100">
                  A blend of management consulting discipline and deep delivery
                  experience across regulatory, data, and transformation
                  programmes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/80 border border-slate-700/70 rounded-2xl p-4">
                  <p className="text-2xl font-semibold text-sky-300 mb-1">
                    15+
                  </p>
                  <p className="text-xs text-slate-200">
                    years of combined leadership experience in consulting and
                    delivery.
                  </p>
                </div>
                <div className="bg-slate-900/80 border border-slate-700/70 rounded-2xl p-4">
                  <p className="text-2xl font-semibold text-sky-300 mb-1">
                    End-to-end
                  </p>
                  <p className="text-xs text-slate-200">
                    from strategy and roadmaps to solution design and execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============== WHO WE ARE / WHAT WE DO =============== */}
        <section className="border-t border-slate-800 bg-slate-950/95">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-14 lg:py-18 grid gap-10 lg:grid-cols-2">
            {/* Who we are */}
            <div>
              <h2 className="section-label">WHO WE ARE</h2>
              <h3 className="section-title">
                A partner that understands both business and engineering.
              </h3>
              <p className="section-body">
                We&apos;re a consulting firm built by practitioners. Our team has
                led programmes inside banks, fintechs, and technology companies
                across strategy, product, data, and engineering functions.
                That experience lets us quickly understand real constraints and
                design solutions that can actually be delivered.
              </p>
              <p className="section-body">
                We&apos;re small by design, which means our clients work directly
                with senior people who stay involved from idea to go-live.
              </p>
            </div>

            {/* What we do */}
            <div>
              <h2 className="section-label">WHAT WE DO</h2>
              <h3 className="section-title">
                We translate strategy into programmes, and programmes into
                measurable outcomes.
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-200/90">
                <li>• Programme &amp; project management for complex change.</li>
                <li>• Regulatory, risk, and compliance initiatives.</li>
                <li>• Data &amp; analytics foundations and governance.</li>
                <li>• Operating model and process redesign.</li>
                <li>• Technology roadmaps and implementation support.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =================== STATS STRIP =================== */}
        <section className="bg-slate-900 border-y border-slate-800">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-semibold text-sky-300">100%</p>
              <p className="text-xs text-slate-300 mt-1">
                independent &amp; founder-led
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-sky-300">350+</p>
              <p className="text-xs text-slate-300 mt-1">
                combined consulting engagements delivered
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-sky-300">40+</p>
              <p className="text-xs text-slate-300 mt-1">
                initiatives across data, risk &amp; technology
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-sky-300">9</p>
              <p className="text-xs text-slate-300 mt-1">
                sectors supported across financial and technology domains
              </p>
            </div>
          </div>
        </section>

        {/* ================ HOW WE WORK ================ */}
        <section className="bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
            <h2 className="section-label text-center">HOW WE WORK</h2>
            <h3 className="section-title text-center max-w-3xl mx-auto">
              A simple, collaborative way of working that keeps everyone focused
              on outcomes.
            </h3>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="about-card">
                <p className="about-card-label">01 • UNDERSTAND</p>
                <h4 className="about-card-title">Context before solutions</h4>
                <p className="about-card-body">
                  We start by understanding your customers, teams, architecture,
                  and constraints – not just your project brief.
                </p>
              </div>
              <div className="about-card">
                <p className="about-card-label">02 • SHAPE</p>
                <h4 className="about-card-title">Design the path forward</h4>
                <p className="about-card-body">
                  Together we define outcomes, governance, and delivery
                  structure, then translate them into a realistic roadmap.
                </p>
              </div>
              <div className="about-card">
                <p className="about-card-label">03 • DELIVER</p>
                <h4 className="about-card-title">Hands-on leadership</h4>
                <p className="about-card-body">
                  We stay close through execution – coaching teams, clearing
                  blockers, and measuring impact along the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =============== CULTURE & CAREERS CTA =============== */}
        <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-14 lg:py-18 grid gap-10 lg:grid-cols-[1.3fr,1.4fr] items-center">
            {/* Left: culture text */}
            <div>
              <h2 className="section-label">CULTURE &amp; CAREERS</h2>
              <h3 className="section-title">
                A place for consultants, technologists, and problem-solvers who
                care about doing the work well.
              </h3>
              <p className="section-body">
                We&apos;re building a team that loves detail, asks difficult
                questions, and takes ownership of results. No layers of
                bureaucracy, no huge teams where your work disappears.
              </p>
              <p className="section-body">
                If you like working closely with clients, shaping ideas, and
                seeing the impact of your work, you&apos;ll fit right in.
              </p>
            </div>

            {/* Right: card with CTA */}
            <div className="flex justify-end">
              <div className="career-card-about">
                <span className="career-pill-about">Careers</span>
                <h4 className="career-title-about">
                  Interested in working with SMA IT Partners?
                </h4>
                <p className="career-body-about">
                  We&apos;re always happy to hear from experienced consultants,
                  project leaders, and engineers who enjoy solving complex
                  problems with a calm, structured approach.
                </p>
               
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
