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

const scrollingImages = [...thumbnails, ...thumbnails];

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
      <section className="relative h-screen overflow-hidden">
        {/* Background Collage */}
        <div className="absolute inset-0 z-0 flex flex-col space-y-1 overflow-hidden">
          {[...Array(rowCount)].map((_, rowIndex) => {
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
        <div className="container mx-auto relative z-[25] flex flex-col justify-center items-center h-full px-4 text-center">
          <Image
            src="/images/logo/logo-primary.png"
            alt="Dreamland Athletics Gym"
            width={256}
            height={256}
            className="w-32 md:w-48 lg:w-44 h-auto object-contain rounded-xl"
            priority
          />
          <h2
            className="text-3xl md:text-md lg:text-4xl font-bold pt-2 pb-10 leading-tight text-white"
            style={{
              fontFamily: "Swiss721Black",
              textShadow: "0 0 20px rgba(0,0,0,0.8)",
              letterSpacing: "2px",
            }}
          >
            DREAMLAND <br /> ATHLETICS
          </h2>

          {/* <Badge variant="outline" className="mb-6 text-primary border-primary">
          Premium Fitness Experience
        </Badge> */}

          <h1
            className="text-[6rem] md:text-[10rem] xl:text-[14rem] 2xl:text-[15rem] m-0 leading-tight text-white relative md:h-40 sm:h-10 lg:h-42 xl:h-55 before:content-[''] before:block before:w-[110%] before:h-[2px] before:bg-primary before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2"
            style={{
              fontFamily: "AlternateGothicNo1",
              textShadow: "0 0 20px rgba(0,0,0,0.8)",
              letterSpacing: "2px",
            }}
          >
            BE A TURTLE
          </h1>

          <p className="text-xl md:text-[2.05rem] lg:text-[2.15rem] xl:text-[3rem] mb-8 leading-relaxed text-white">
            SLOW<span className="text-[#e7b826]">.</span>STEADY
            <span className="text-[#e7b826]">.</span>UNSTOPPABLE
            <span className="text-[#e7b826]">.</span>
          </p>
          {/*       <p className="text-base md:text-xl mb-12 max-w-3xl text-gray-300 leading-relaxed">
          Your journey to greatness starts here. Join the elite community of
          athletes who dare to dream big and work harder.
        </p> */}
          <div className="">
            <Link
              href="#Newsletter"
              className="btn--primary bg-primary hover:bg-primary/90 text-white font-bold py-5 px-10 rounded-lg transition duration-300 text-md"
            >
              LET'S GO !!
            </Link>
          </div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-[20]" />
      </section>

      {/* Main content */}
      <div className="relative">
        <div
          className="fixed inset-0 top-0 h-screen"
          style={{
            backgroundImage: "url('/images/elements/bg-texture.webp')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        <div className="flex flex-col gap-5 mx-auto lg:px-8 h-full">
          {/* About Section */}
          <section className="py-16 px-4 rounded-xl flex items-center my-5">
            <div className="max-w-7xl w-full mx-auto">
              <div className="text-center mb-16">
                {/* <Badge
                  variant="secondary"
                  className="mb-4 text-primary border-primary"
                >
                  About Dreamland Athletics
                </Badge> */}
                <h2 className="text-6xl md:text-8xl lg:text-8xl border border-black border-solid mb-5 uppercase px-2 py-1 text-primary">
                  What Sets us apart
                </h2>
                <p className="text-2xl md:text-2x1 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  At Dreamland Athletics, we offer variety of services ranging
                  from fitness and wellness to nutrition and lifestyle coaching.
                </p>
              </div>

              <div className="w-full grid grid-cols lg:grid-cols-5 md:grid-cols-1 gap-20 md:px-55 px-20 lg:px-0">
                <div>
                  <Card className="bg-white/10 md:bg-white/5 md:hover:bg-white/10 border-primary/20 hover:border-primary transition-all duration-300">
                    <CardHeader className="text-center">
                      <Image
                        src="/images/elements/DLICONS/icon_dl-01.png"
                        alt="Gym Facilities"
                        width={100}
                        height={100}
                        className="rounded-2xl shadow-2xl mx-auto transition-shadow duration-300 object-cover lg:aspect-[1/1]"
                      />
                      <CardTitle className="text-white"></CardTitle>
                    </CardHeader>
                  </Card>
                  <h1 className="text-white text-center text-2xl pt-5 uppercase">
                    One-on-One <br /> Training
                  </h1>
                </div>

                <div>
                  <Card className="bg-white/10 md:bg-white/5 md:hover:bg-white/10 border-primary/20 hover:border-primary transition-all duration-300">
                    <CardHeader className="text-center">
                      <Image
                        src="/images/elements/DLICONS/icon_dl-02.png"
                        alt="Gym Facilities"
                        width={100}
                        height={100}
                        className="rounded-2xl shadow-2xl mx-auto transition-shadow duration-300 object-cover lg:aspect-[1/1]"
                      />
                      <CardTitle className="text-white"></CardTitle>
                    </CardHeader>
                  </Card>
                  <h1 className="text-white text-center text-2xl pt-5 uppercase">
                    Group <br /> Fitness
                  </h1>
                </div>

                <div>
                  <Card className="bg-white/10 md:bg-white/5 md:hover:bg-white/10 border-primary/20 hover:border-primary transition-all duration-300">
                    <CardHeader className="text-center">
                      <Image
                        src="/images/elements/DLICONS/icon_dl-03.png"
                        alt="Gym Facilities"
                        width={100}
                        height={100}
                        className="rounded-2xl shadow-2xl mx-auto transition-shadow duration-300 object-cover lg:aspect-[1/1]"
                      />
                      <CardTitle className="text-white"></CardTitle>
                    </CardHeader>
                  </Card>
                  <h1 className="text-white text-center text-2xl pt-5 uppercase">
                    HIIT <br /> Class
                  </h1>
                </div>

                <div>
                  <Card className="bg-white/10 md:bg-white/5 md:hover:bg-white/10 border-primary/20 hover:border-primary transition-all duration-300">
                    <CardHeader className="text-center">
                      <Image
                        src="/images/elements/DLICONS/icon_dl-04.png"
                        alt="Gym Facilities"
                        width={100}
                        height={100}
                        className="rounded-2xl shadow-2xl mx-auto transition-shadow duration-300 object-cover lg:aspect-[1/1]"
                      />
                      <CardTitle className="text-white"></CardTitle>
                    </CardHeader>
                  </Card>
                  <h1 className="text-white text-center text-2xl pt-5 uppercase">
                    Kids <br /> Workshop
                  </h1>
                </div>

                <div>
                  <Card className="bg-white/10 md:bg-white/5 md:hover:bg-white/10 border-primary/20 hover:border-primary transition-all duration-300">
                    <CardHeader className="text-center">
                      <Image
                        src="/images/elements/DLICONS/icon_dl-05.png"
                        alt="Gym Facilities"
                        width={100}
                        height={100}
                        className="rounded-2xl shadow-2xl mx-auto transition-shadow duration-300 object-cover lg:aspect-[1/1]"
                      />
                      <CardTitle className="text-white"></CardTitle>
                    </CardHeader>
                  </Card>
                  <h1 className="text-white text-center text-2xl pt-5 uppercase">
                    3D STYKU <br /> Body Scan
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-10 md:px-10 lg:px-40 mb-5 rounded-xl items-center">
            <div className="mx-auto">
              <div className="flex flex-col gap-12 justify-center h-full">
                <div id="contact">
                  {/* <h2 className="section-title text-3xl font-bold text-center mb-10">GET IN TOUCH</h2> */}

                  <div className="flex flex-col md:flex-row lg:flex-row gap-20 items-start justify-center">
                    {/* Contact Info */}
                    <div className="flex-2 space-y-6">
                      <div className="contact-info">
                        <h4 className="bold text-3xl">LOCATION</h4>
                        <p className="text-lg font-light">
                          860 N Park Dr, Brampton, ON L6S 4N5, Canada
                        </p>
                      </div>

                      <div className="contact-info">
                        <h4 className="text-3xl">HOURS</h4>
                        <p className="text-lg font-light">
                          Monday–Friday: 5am – 10pm
                        </p>
                        <p className="text-lg font-light">
                          Saturday–Sunday: 7am – 8pm
                        </p>
                      </div>

                      <div className="contact-info">
                        <h4 className="text-3xl">CONTACT</h4>
                        <a
                          className="block text-lg text-blue-600 hover:underline font-light"
                          href="tel:+19055551234"
                        >
                          (905) 555-1234
                        </a>
                        {/* <a className="block text-lg text-blue-600 hover:underline font-light" href="https://www.instagram.com/dreamland_brampton" target="_blank" rel="noopener noreferrer">
                          @dreamland_brampton
                        </a> */}
                        <a
                          className="block text-lg text-blue-600 hover:underline font-light"
                          href="mailto:jay@dreamlandathletics.com"
                        >
                          jay@dreamlandathletics.com
                        </a>
                        <a
                          className="block text-lg text-blue-600 hover:underline font-light"
                          href="mailto:chirag@dreamlandathletics.com"
                        >
                          chirag@dreamlandathletics.com
                        </a>
                      </div>
                    </div>

                    {/* Contact Image */}
                    <div className="flex-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.7687165970583!2d-79.74951353497413!3d43.72977157442773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b173a1b0a0e17%3A0xdadb9bd5d608dd4e!2sDreamland%20Athletics!5e0!3m2!1sen!2sin!4v1747585502192!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        style={{ border: 1 }}
                        className="rounded-lg"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          {/* <section className="py-16 px-4 rounded-xl flex items-center my-5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge
                  variant="secondary"
                  className="mb-4 text-primary border-primary"
                >
                  Success Stories
                </Badge>
                <h2 className="text-2xl md:text-5xl font-bold mb-6 text-primary">
                  Champions Choose Dreamland
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <Card className="bg-black border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
                          <span className="text-lg font-bold text-black">
                            ⭐
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Sarah M.</h4>
                          <p className="text-sm text-gray-400">
                            Professional Athlete
                          </p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-gray-300 italic">
                        "Dreamland Athletics transformed my training. The
                        coaches here understand what it takes to compete at the
                        highest level."
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="bg-black border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
                          <span className="text-lg font-bold text-black">
                            ⭐
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Marcus J.</h4>
                          <p className="text-sm text-gray-400">
                            Fitness Enthusiast
                          </p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-gray-300 italic">
                        "The community here is incredible. Everyone pushes each
                        other to be better. It's more than a gym - it's a
                        family."
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="bg-black border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
                          <span className="text-lg font-bold text-black">
                            ⭐
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Lisa K.</h4>
                          <p className="text-sm text-gray-400">
                            Personal Trainer
                          </p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-gray-300 italic">
                        "The facilities are world-class and the equipment is
                        always maintained perfectly. It's the best gym I've ever
                        trained at."
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section> */}
          <InstagramFeed />

          {/* Newsletter Section */}
          <section
            id="Newsletter"
            className="Newsletter py-16 px-4 mb-5 rounded-xl flex items-center"
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* <Badge
                variant="outline"
                className="mb-6 text-primary border-primary"
              >
                Join the Movement
              </Badge> */}
              <h2 className="text-6xl md:text-7xl lg:text-8xl mb-6 text-white uppercase">
                Be the First to Know
              </h2>
              <p className="text-md md:text-lg lg:text-2xl text-gray-300 mb-12 leading-relaxed">
                Get exclusive access to training tips, member benefits, and be
                the first to hear about our grand opening.
              </p>

              <Card className="bg-white/5 border-primary/20 py-8 px-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="fname"
                      value={form.fname}
                      onChange={handleChange}
                      className="h-12 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-primary w-full placeholder:text-gray-400 px-4 text-white transition-colors duration-300"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="h-12 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-primary w-full placeholder:text-gray-400 px-4 text-white transition-colors duration-300"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn--primary transition-all duration-300 px-5 pb-3 pt-4"
                    disabled={loading}
                  >
                    {loading ? (
                      <PulseLoader color="#000" speedMultiplier={0.75} />
                    ) : (
                      "Join the Elite"
                    )}
                  </button>
                </form>
              </Card>
            </div>
          </section>

          <FounderSocials />
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-16 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div>
            <Image
              src="/images/logo/logo-primary.png"
              alt="Dreamland Athletics"
              width={250}
              height={250}
              className="w-50 h-auto mx-auto mb-2"
            />
          </div>
          <h3 className="text-4xl tracking-wide mb-4 text-white">
            Dreamland Athletics
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl lg:text-xl md:text-lg mx-auto">
            Where dreams become reality through dedication, hard work, and the
            relentless pursuit of excellence.
          </p>

          {/* <div className="flex justify-center space-x-6 mb-8">
            <Badge
              variant="outline"
              className="footer-badge text-gray-400 border-gray-600 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              World-Class Facilities
            </Badge>
            <Badge
              variant="outline"
              className="footer-badge text-gray-400 border-gray-600 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Elite Training
            </Badge>
            <Badge
              variant="outline"
              className="footer-badge-pc text-gray-400 border-gray-600 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Elite training, Pro coaching, and Top-Tier Facilities.
            </Badge>
            <Badge
              variant="outline"
              className="footer-badge text-gray-400 border-gray-600 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Professional Coaching
            </Badge>
          </div> */}

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dreamland Athletics. All rights
            reserved. | Your journey to greatness starts here.
          </p>
        </div>
      </footer>
    </div>
  );
}
