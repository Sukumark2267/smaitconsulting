"use client";

import React from "react";

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="bg-[#020c1f] text-white py-16 px-6 lg:px-16"
    >
      {/* SECTION HEADER */}
      <div className="max-w-5xl mx-auto mb-10">
        <p className="text-[11px] tracking-[0.24em] uppercase text-[#7fb3ff] mb-2">
          Case Study
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
          Bell Platform Engineering &amp; Infrastructure Modernization
        </h2>
        <p className="mt-4 text-sm md:text-base text-[#c5d3ea] max-w-3xl">
          How SMA IT Consulting Group partnered with Bell Canada to modernize
          platform engineering, strengthen observability, and enable
          zero-downtime deployments across mission-critical systems.
        </p>
      </div>

      {/* HIGHLIGHT CARD – INSPIRED BY CLIENT SAMPLE IMAGE */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="relative overflow-hidden rounded-3xl border border-[#244477] bg-gradient-to-br from-[#061a3b] via-[#08254f] to-[#030b1a] p-6 md:p-8">
          {/* subtle pattern overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen">
            <div className="w-full h-full bg-[radial-gradient(circle_at_0_0,#4ab0ff_0,transparent_55%),radial-gradient(circle_at_100%_0,#ffb74d_0,transparent_55%),radial-gradient(circle_at_0_100%,#9b6bff_0,transparent_55%)]" />
          </div>

          <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            {/* LEFT TEXT BLOCK */}
            <div className="flex-1 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/30 border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#d5e3ff]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ab0ff]" />
                Bell Canada – Platform Engineering
              </div>
              <h3 className="text-lg md:text-xl font-semibold">
                Modernizing CI/CD, observability, and infrastructure reliability
                for mission-critical platforms.
              </h3>
              <p className="text-sm md:text-[15px] text-[#d5e3ff]">
                SMA IT Consulting Group worked with Bell to evolve platform
                engineering capabilities, reduce deployment risk in
                data-intensive environments, and build a scalable, future-ready
                infrastructure foundation.
              </p>
            </div>

            {/* RIGHT STAT / OUTCOME BLOCK */}
            <div className="w-full md:w-60 lg:w-72 shrink-0">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-black/30 border border-white/10 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#9fb6ff] mb-1">
                    Deployments
                  </p>
                  <p className="text-lg font-semibold">Zero-downtime</p>
                  <p className="text-[11px] text-[#c5d3ea]/90 mt-1">
                    Service continuity preserved across releases
                  </p>
                </div>

                <div className="rounded-2xl bg-black/30 border border-white/10 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#9fb6ff] mb-1">
                    Reliability
                  </p>
                  <p className="text-lg font-semibold">Higher stability</p>
                  <p className="text-[11px] text-[#c5d3ea]/90 mt-1">
                    Resilient CI/CD and platform operations
                  </p>
                </div>

                <div className="rounded-2xl bg-black/30 border border-white/10 px-4 py-3 col-span-2">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#9fb6ff] mb-1">
                    Focus Areas
                  </p>
                  <p className="text-[12px] text-[#d5e3ff] leading-relaxed">
                    CI/CD modernization, Kubernetes &amp; OpenShift, enhanced
                    observability, Infrastructure as Code, and data-integrity
                    focused deployment strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILED CASE STUDY CONTENT */}
      <div className="max-w-5xl mx-auto space-y-10 text-sm md:text-[15px] text-[#d5e3ff] leading-relaxed">
        {/* Client + Engagement */}
        <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-8 border-t border-[#243456] pt-8">
          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#7fb3ff] mb-2">
              Client
            </h4>
            <p>
              Bell Canada is one of Canada’s largest telecommunications and
              media enterprises, delivering wireless, internet, television, home
              phone, and enterprise communication services nationwide.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#7fb3ff] mb-2">
              Engagement
            </h4>
            <p>
              <span className="font-semibold">
                Platform Engineering &amp; Infrastructure Modernization
              </span>
              . SMA IT Consulting Group partnered with Bell to modernize its
              platform engineering capabilities and strengthen deployment,
              observability, and infrastructure reliability across
              mission-critical systems.
            </p>
          </div>
        </div>

        {/* Executive Overview */}
        <div className="border-t border-[#243456] pt-8">
          <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#7fb3ff] mb-3">
            Executive Overview
          </h4>
          <p className="mb-3">
            Bell initiated a strategic modernization program to evolve its CI/CD
            pipelines and infrastructure in response to growing scale, data
            volumes, and operational complexity. The mandate was clear:{" "}
            <span className="font-semibold">
              enable zero-downtime deployments, maintain absolute data
              integrity, and create a scalable foundation
            </span>{" "}
            capable of supporting future innovation.
          </p>
          <p>
            SMA IT Consulting Group was engaged as a trusted delivery partner to
            design and implement a robust, enterprise-grade solution—building on
            an established relationship and prior successful delivery.
          </p>
        </div>

        {/* Business Challenge */}
        <div className="border-t border-[#243456] pt-8">
          <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#7fb3ff] mb-3">
            Business Challenge
          </h4>
          <p className="mb-3">
            Bell’s platform engineering teams faced several high-impact
            challenges:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Deployment risk in data-intensive environments, where any data
              loss was unacceptable
            </li>
            <li>
              Limited CI/CD resilience, slowing release cycles and increasing
              operational risk
            </li>
            <li>
              Insufficient observability, reducing visibility into system health
              and incident root causes
            </li>
            <li>
              Infrastructure complexity, driving higher operational overhead and
              longer recovery times
            </li>
          </ul>
          <p className="mt-3">
            Left unaddressed, these issues posed risks to service continuity,
            customer experience, and business operations.
          </p>
        </div>

        {/* Solution */}
        <div className="border-t border-[#243456] pt-8">
          <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#7fb3ff] mb-3">
            SMA IT Consulting Group Solution
          </h4>
          <p className="mb-3">
            SMA IT Consulting Group conducted a comprehensive assessment of
            Bell’s existing technology landscape, including OpenShift,
            Kubernetes, GitLab, and Prometheus. Based on this assessment, we
            designed and implemented a tailored modernization strategy aligned
            with Bell’s scale and reliability requirements.
          </p>
          <p className="mb-3">Key solution components included:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Enterprise-grade CI/CD pipelines optimized for containerized,
              distributed workloads
            </li>
            <li>
              Kubernetes-driven deployment strategies enabling controlled,
              zero-downtime releases
            </li>
            <li>
              Enhanced observability and logging frameworks for proactive
              monitoring and rapid issue resolution
            </li>
            <li>
              Infrastructure as Code (IaC) to standardize provisioning, improve
              repeatability, and support scalability
            </li>
          </ul>
          <p className="mt-3">
            This approach reduced deployment risk while significantly improving
            operational transparency and platform stability.
          </p>
        </div>

        {/* Technologies & Delivery Approach */}
        <div className="border-t border-[#243456] pt-8">
          <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#7fb3ff] mb-3">
            Technologies &amp; Delivery Approach
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Kubernetes – Container orchestration and workload management</li>
            <li>OpenShift – Secure, enterprise Kubernetes platform</li>
            <li>GitLab – Source control and CI/CD automation</li>
            <li>Prometheus – Metrics, monitoring, and alerting</li>
            <li>Containerization – Standardized and portable deployments</li>
            <li>
              Infrastructure as Code (IaC) – Automated, scalable infrastructure
              management
            </li>
          </ul>
        </div>

        {/* Business Outcomes */}
        <div className="border-t border-[#243456] pt-8">
          <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#7fb3ff] mb-3">
            Business Outcomes
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">Zero-Downtime Deployments –</span>{" "}
                Seamless releases with no service disruption
              </li>
              <li>
                <span className="font-semibold">Improved Platform Reliability –</span>{" "}
                Increased system stability and resilience
              </li>
              <li>
                <span className="font-semibold">Enhanced Observability –</span>{" "}
                Faster detection, diagnosis, and resolution of issues
              </li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">Scalable Architecture –</span>{" "}
                Infrastructure designed to support future growth and new
                capabilities
              </li>
              <li>
                <span className="font-semibold">Preserved Data Integrity –</span>{" "}
                Eliminated data-loss risks during deployments
              </li>
              <li>
                <span className="font-semibold">
                  Modular, Maintainable Infrastructure –
                </span>{" "}
                Reduced complexity and long-term operational effort
              </li>
            </ul>
          </div>
        </div>

        {/* Engagement Model */}
        <div className="border-t border-[#243456] pt-8">
          <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#7fb3ff] mb-3">
            Engagement Model
          </h4>
          <p>
            This engagement was delivered exclusively by SMA IT Consulting Group
            in close collaboration with Bell’s platform engineering teams. No
            third-party vendors were involved. Open-source technologies were
            strategically leveraged to ensure flexibility, transparency, and
            long-term sustainability.
          </p>
        </div>

        {/* Key Learnings */}
        <div className="border-t border-[#243456] pt-8">
          <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#7fb3ff] mb-3">
            Key Learnings
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Design for maintainability – modular platforms reduce risk and cost</li>
            <li>
              Deep platform understanding matters – modernization starts with
              mastering the existing ecosystem
            </li>
            <li>
              Observability is foundational – monitoring &amp; logging are
              critical to operational excellence
            </li>
            <li>
              Data integrity is non-negotiable – deployment strategies must
              prioritize data protection
            </li>
            <li>
              Build for scale from day one – future growth should be embedded
              into architecture decisions
            </li>
            <li>
              Collaboration drives results – strong client partnerships enable
              faster adoption and success
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="border-t border-[#243456] pt-8">
          <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#7fb3ff] mb-3">
            Conclusion
          </h4>
          <p>
            The Bell Platform Engineering &amp; Infrastructure Modernization
            engagement highlights SMA IT Consulting Group’s expertise in
            delivering enterprise-scale platform modernization, resilient CI/CD
            pipelines, and mission-critical infrastructure solutions. By
            enabling zero-downtime deployments, strengthening observability, and
            ensuring data integrity, SMA IT Consulting Group helped Bell
            establish a future-ready platform—positioned to support continued
            growth, innovation, and operational excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
