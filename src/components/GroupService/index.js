'use client';
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const session = {
  title: 'BRONZE',
  descriptions: [
    '12 professionally guided group fitness sessions designed to build endurance, strength, and flexibility.',
    'Led by certified trainers focused on personalized attention and correct form.',
    'Flexible scheduling options to fit your lifestyle and weekly routine.',
    'Exclusive access to our community fitness challenges and wellness events.',
  ],
  price: '$175',
  image: '/images/elements/477395712_17845184157410936_8145847497434619736_n.jpg',
};

export default function GroupService() {
  useEffect(() => {
    gsap.fromTo(
      ".service-content",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".service-image",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-image",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="group-service bg-black text-white py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#e7b826]">Group Service</h1>
        <p className="text-gray-300 mt-3 text-base max-w-2xl mx-auto">
          A plan that fits your goals. Our Bronze Membership gives you access to
          expert-led group sessions and a vibrant community atmosphere.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 md:px-12 gap-8">
        {/* LEFT SIDE: TEXT */}
        <div className="service-content flex-1 space-y-6">
          <h2 className="text-3xl text-[#ffd700]">{session.title} MEMBERSHIP</h2>

          <ul className="space-y-3 text-gray-300 leading-relaxed text-[1rem]">
            {session.descriptions.map((desc, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#ffd700] text-lg mt-1">✦</span>
                <p>{desc}</p>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 pt-4">
          <Link href="/contact">

            <button className="bg-[#ffd700] text-black font-semibold px-6 py-2 rounded-md border-2 border-transparent hover:bg-transparent hover:text-[#ffd700] hover:border-[#ffd700] cursor-pointer transition duration-300">
              Join Now
            </button>
            </Link>

            <span className="text-2xl font-bold text-[#ffd700]">{session.price}</span>
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE */}
        <div className="service-image flex-1">
          <div className="relative w-full h-[350px] md:h-[420px] rounded-xl overflow-hidden border-2 border-[#ffd700] shadow-lg">
            <Image
              src={session.image}
              alt={`${session.title} Membership`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
