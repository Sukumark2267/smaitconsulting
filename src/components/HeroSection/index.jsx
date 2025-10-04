"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { z } from "zod";
import { toast } from "sonner";
import { PulseLoader } from "react-spinners";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import SplitType from "split-type";
import gsap from "gsap";
import InstagramFeed from "../instagram";
import FounderSocials from "../FounderSocials";
import { thumbnails } from "@/data/thumbs";

const newsletterSchema = z.object({
  fname: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
});

// Collage thumbnails provided by thumbs data

const shuffle = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function ComingSoon() {
  const headingRef = useRef(null);
  let [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ fname: "", email: "" });
  const [rowCount, setRowCount] = useState(6); // Default to desktop

  // Hook to handle responsive row count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile: 9-10 rows (using 10)
        setRowCount(10);
      } else {
        // Desktop: 6 rows
        setRowCount(6);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fname = form.fname;
    const email = form.email;

    // Validate with Zod
    const result = newsletterSchema.safeParse({ fname, email });
    if (!result.success) {
      console.log(result.error);
      toast.error("Something went wrong.", {
        description: result.error.issues[0].message,
      });
      return;
    }

    try {
      setLoading(true);
      // Send to API
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fname, email }),
      });

      // Handle response
      if (res.ok) {
        toast.success("Thank you for signing up!");
        setForm({ fname: "", email: "" }); // Reset form on success
      } else {
        toast.error("There was an error. Please try again.");
      }
    } catch (error) {
      toast.error("There was an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   const split = new SplitType(headingRef.current, { types: 'chars' });

  //   gsap.from('.char', {
  //     y: -100,
  //     opacity: 0,
  //     duration: 0.6,
  //     ease: 'bounce.out',
  //     stagger: 0.05,
  //   });

  //   return () => split.revert();
  // }, []);

  return (
    <div className="landing-page min-h-screen bg-black text-white">
      {/* Hero Section with Video */}
      <section className="relative min-h-screen overflow-hidden">
      {/* Background Collage */}
      <div className="absolute inset-0 z-0 flex flex-col space-y-1 overflow-hidden">
      {[...Array(6)].map((_, rowIndex) => {
        // Shuffle + double the array to ensure smooth looping
        const rowImages = [...shuffle(thumbnails), ...shuffle(thumbnails)];


            return (
              <div
                key={rowIndex}
                className={`flex whitespace-nowrap ${
                  rowIndex % 2 === 0
                    ? "animate-scroll-ltr"
                    : "animate-scroll-rtl"
                }`}
              >
                {rowImages.map((src, idx) => (
                  <img
                    key={`${rowIndex}-${idx}`}
                    src={src}
                    alt={`Thumb ${idx}`}
                    className="aspect-[2/1] w-40 md:w-60 xl:w-80 object-cover mx-[2px] rounded"
                  />
                ))}
              </div>
            );
          })}
        </div>

        {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-start items-center h-full px-4 top-5 text-center">
        <Image
          src="/images/logo/logo-primary.png"
          alt="Dreamland Athletics Gym"
          width={256}
          height={256}
          className="w-32 md:w-48 lg:w-44 h-auto object-contain rounded-xl"
          priority
        />
        <h1 id="Hero-Heading"
              ref={headingRef}
          className="text-3xl md:text-md lg:text-4xl font-bold lg:px-100 md:px-50 px-15 pt-2 pb-10 leading-tight text-white"
          style={{
            fontFamily: "Swiss721Black",
            textShadow: "0 0 20px rgba(0,0,0,0.8)",
            letterSpacing: "2px",
          }}
        >
          DREAMLAND <br/> ATHLETICS
        </h1>

        {/* <Badge variant="outline" className="mb-6 text-primary border-primary">

          Premium Fitness Experience
        </Badge> */}

          <h1
            className="text-[6rem] md:text-[8rem] xl:text-[12rem] 2xl:text-[15rem] m-0 leading-tight text-white relative h-25 md:h-35 xl:h-55 before:content-[''] before:block before:w-[110%] before:h-[4px] before:bg-primary before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2"
            style={{
              fontFamily: "AlternateGothicNo1",
              textShadow: "0 0 20px rgba(0,0,0,0.8)",
              letterSpacing: "2px",
            }}
          >
            BE A TURTLE
          </h1>

          <p className="text-[1.35rem] md:text-[1.75rem] xl:text-[3rem] mb-6 leading-relaxed text-white">
            SLOW<span className="text-[#e7b826]">.</span>STEADY
            <span className="text-[#e7b826]">.</span>UNSTOPPABLE
            <span className="text-[#e7b826]">.</span>
          </p>
          {/*       <p className="text-base md:text-xl mb-12 max-w-3xl text-gray-300 leading-relaxed">
          Your journey to greatness starts here. Join the elite community of
          athletes who dare to dream big and work harder.
        </p> */}
          <Link
            href="#Newsletter"
            className="btn--primary bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-8 md:py-3.5 md:px-10 rounded-lg transition duration-300 text-sm md:text-md"
          >
            LET'S GO !!
          </Link>
        </div>

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/60 z-[20]" /> */}
      </section>

      {/* Main content */}
      {/* <div className="relative"> */}
        {/* <div
          className="inset-0 top-0 h-screen"
          style={{
            backgroundImage: "url('/images/elements/bg-texture.webp')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        /> */}
        {/* <div className="flex flex-col gap-5 mx-auto lg:px-8 h-full">
        </div> */}
    
      {/* </div> */}

      {/* <InstagramFeed />
      <FounderSocials /> */}
    </div>
  );
}
