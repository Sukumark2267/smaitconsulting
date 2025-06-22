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
import SplitType from 'split-type';
import gsap from 'gsap';


const newsletterSchema = z.object({
  fname: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
});


const thumbnails = [
  "images/bg-slideshow/2.webp",
  "images/bg-slideshow/1.webp",
  "images/bg-slideshow/3.webp",
  "images/bg-slideshow/4.webp",
  "images/bg-slideshow/5.webp",
  "images/bg-slideshow/6.webp",
  "images/bg-slideshow/7.webp",
  "images/bg-slideshow/8.webp",
  "images/bg-slideshow/9.webp",
  "images/bg-slideshow/10.webp",
  "images/bg-slideshow/11.webp",
  "images/bg-slideshow/12.webp",
  "images/bg-slideshow/13.webp",
  "images/bg-slideshow/14.webp",
  "images/bg-slideshow/15.webp",
  "images/bg-slideshow/16.webp",
  "images/bg-slideshow/17.webp",
  "images/bg-slideshow/18.webp",
  "images/bg-slideshow/19.webp",
  "images/bg-slideshow/20.webp",
  "images/bg-slideshow/21.webp",
  "images/bg-slideshow/22.webp",
  "images/bg-slideshow/23.webp",
  "images/bg-slideshow/24.webp",
  "images/bg-slideshow/25.webp",
  "images/bg-slideshow/26.webp",
  "images/bg-slideshow/27.webp",
  "images/bg-slideshow/28.webp",
  "images/bg-slideshow/29.webp",
  "images/bg-slideshow/30.webp",
  "images/bg-slideshow/31.webp",
  "images/bg-slideshow/32.webp",
  "images/bg-slideshow/33.webp",
  "images/bg-slideshow/34.webp",
  "images/bg-slideshow/35.webp",
  "images/bg-slideshow/36.webp",
  "images/bg-slideshow/37.webp",
  "images/bg-slideshow/38.webp",
  "images/bg-slideshow/39.webp",
  "images/bg-slideshow/40.webp",
  "images/bg-slideshow/41.webp",
];

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

  useEffect(() => {
    const split = new SplitType(headingRef.current, { types: 'chars' });

    gsap.from('.char', {
      y: -100,
      opacity: 0,
      duration: 0.6,
      ease: 'bounce.out',
      stagger: 0.05,
    });

    // Clean up
    return () => split.revert();
  }, []);


  return (
    <div className="landing-page min-h-screen bg-black text-white">
      {/* Hero Section with Video */}
      <section className="relative h-screen overflow-hidden">
      {/* Background Collage */}
      <div className="absolute inset-0 z-0 flex flex-col space-y-1 overflow-hidden">
      {[...Array(6)].map((_, rowIndex) => {
        // Shuffle + double the array to ensure smooth looping
        const rowImages = [...shuffle(thumbnails), ...shuffle(thumbnails)];

        return (
          <div
            key={rowIndex}
            className={`flex whitespace-nowrap ${
              rowIndex % 2 === 0 ? "animate-scroll-ltr" : "animate-scroll-rtl"
            }`}
          >
            {rowImages.map((src, idx) => (
              <img
                key={`${rowIndex}-${idx}`}
                src={src}
                alt={`Thumb ${idx}`}
                className="w-48 h-32 md:w-60 md:h-40 object-cover m-[1px] rounded"
              />
            ))}
          </div>
        );
      })}
    </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center">
        <Image
          src="/images/logo/logo-primary.png"
          alt="Dreamland Athletics Gym"
          width={256}
          height={256}
          className="w-32 md:w-48 lg:w-64 h-auto object-contain rounded-xl mb-5"
          priority
        />

        <Badge variant="outline" className="mb-6 text-primary border-primary">
          Premium Fitness Experience
        </Badge>

        <h1 id="Hero-Heading"
              ref={headingRef}
          className="text-3xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight text-primary"
          style={{
            fontFamily: "Swiss721Bold",
            textShadow: "0 0 20px rgba(0,0,0,0.8)",
            letterSpacing: "2px",
          }}
        >
          Dreamland Athletics
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl leading-relaxed text-white">
          Where Champions Are Made
        </p>

        <p className="text-base md:text-xl mb-12 max-w-3xl text-gray-300 leading-relaxed">
          Your journey to greatness starts here. Join the elite community of
          athletes who dare to dream big and work harder.
        </p>
        <Link
          href="#"
          className="btn--primary inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg"
        >
          Start Your Journey
        </Link>
      </div>
    </section>

      {/* Main content */}
      <div className="relative my-5">
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
        <div className="flex flex-col gap-5 mx-auto p-3 lg:px-8 h-full">
          {/* About Section */}
          <section className="py-16 px-4 rounded-xl flex items-center my-5">
            <div className="max-w-7xl w-full mx-auto">
              <div className="text-center mb-16">
                <Badge
                  variant="secondary"
                  className="mb-4 text-primary border-primary"
                >
                  About Dreamland Athletics
                </Badge>
                <h2 className="text-2xl md:text-5xl font-bold mb-5 text-primary">
                  Your Hustle Starts Here
                </h2>
                <p className="text-sm md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  At Dreamland Athletics, we believe that every champion begins
                  with a dream. Our state-of-the-art facility and expert
                  trainers provide the perfect environment to transform your
                  aspirations into achievements.
                </p>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <Card className="bg-white/10 md:bg-white/5 md:hover:bg-white/10 border-primary/20 hover:border-primary transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-white">
                        Elite Training
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Pro-grade equipment and custom training to maximize your potential.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                <div>
                  <Card className="bg-white/10 md:bg-white/5 md:hover:bg-white/10 border-primary/20 hover:border-primary transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-white">
                        Expert Coaches
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Learn from certified trainers and former athletes who
                        understand what it takes to reach the top.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                <div>
                  <Card className="bg-white/10 md:bg-white/5 md:hover:bg-white/10 border-primary/20 hover:border-primary transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-white">
                        State-of-the-art Equipment
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        State-of-the-art equipment and facilities to help you
                        achieve your goals.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4 rounded-xl flex items-center my-5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge
                  variant="outline"
                  className="mb-4 text-primary border-primary"
                >
                  World-Class Facilities
                </Badge>
                <h2 className="text-2xl md:text-5xl font-bold mb-6 text-white">
                  Everything You Need to Succeed
                </h2>
              </div>

              <div className="flex flex-col lg:flex-row-reverse gap-12 items-center h-full">
                <div className="relative w-full lg:w-1/3 h-full">
                  <Image
                    src="/images/elements/bg.webp"
                    alt="Gym Facilities"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl hover:shadow-primary/20 transition-shadow duration-300 w-full h-full object-cover lg:aspect-[4/5]"
                  />
                </div>

                <div className="space-y-8 w-full lg:w-2/3">
                  <div className="group flex items-start space-x-4 bg-white/10 lg:bg-transparent lg:hover:bg-white/10 p-4 rounded-lg transition-colors duration-300">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 group-hover:rotate-12">
                      <span className="text-xl font-bold text-black">🏋️</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                        Stretching Area
                      </h3>
                      <p className="text-sm md:text-lg text-gray-400">
                        Stretching area with professional stretching equipment.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 bg-white/10 lg:bg-transparent lg:hover:bg-white/10 p-4 rounded-lg transition-colors duration-300">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 group-hover:rotate-12">
                    <span className="text-xl font-bold text-black">🏃</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                      High-Intensity Interval Training Zone
                    </h3>
                    <p className="text-sm md:text-lg text-gray-400">
                      High-intensity interval training equipment with entertainment systems to keep you motivated.
                    </p>
                  </div>
                </div>


                <div className="group flex items-start space-x-4 bg-white/10 lg:bg-transparent lg:hover:bg-white/10 p-4 rounded-lg transition-colors duration-300">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 group-hover:rotate-12">
                      <span className="text-xl font-bold text-black">🏋️</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                        Strength Training Zone
                      </h3>
                      <p className="text-sm md:text-lg text-gray-400">
                        Olympic-standard weightlifting equipment and dedicated
                        powerlifting area with professional platforms.
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex items-start space-x-4 bg-white/10 lg:bg-transparent lg:hover:bg-white/10 p-4 rounded-lg transition-colors duration-300">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 hover:rotate-12">
                      <span className="text-xl font-bold text-black">🥊</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                        Combat Sports Arena
                      </h3>
                      <p className="text-sm md:text-lg text-gray-400">
                        Fully equipped boxing and MMA training area with
                        professional-grade equipment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-white/10 lg:bg-transparent lg:hover:bg-white/10 p-4 rounded-lg transition-colors duration-300">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 hover:rotate-12">
                      <span className="text-xl font-bold text-black">🧘</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                        Recovery & Wellness
                      </h3>
                      <p className="text-sm md:text-lg text-gray-400">
                        Dedicated space for stretching, yoga, and recovery with
                        premium amenities.
                      </p>
                    </div>
                  </div> */}
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

          {/* Newsletter Section */}
          <section className="py-16 px-4 rounded-xl flex items-center my-5">
            <div className="max-w-4xl mx-auto text-center">
              <Badge
                variant="outline"
                className="mb-6 text-primary border-primary"
              >
                Join the Movement
              </Badge>
              <h2 className="text-2xl md:text-5xl font-bold mb-6 text-white">
                Be the First to Know
              </h2>
              <p className="text-sm md:text-lg text-gray-300 mb-12 leading-relaxed">
                Get exclusive access to training tips, member benefits, and be
                the first to hear about our grand opening.
              </p>

              <Card className="bg-white/5 border-primary/20 py-8 px-4">
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
                    className="btn--primary transition-all duration-300"
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
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-16 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div>
            <Image
              src="/images/logo/logo-primary.png"
              alt="Dreamland Athletics"
              width={150}
              height={150}
              className="w-24 h-auto mx-auto mb-6"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Dreamland Athletics
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Where dreams become reality through dedication, hard work, and the
            relentless pursuit of excellence.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
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
          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dreamland Athletics. All rights
            reserved. | Your journey to greatness starts here.
          </p>
        </div>
      </footer>
    </div>
  );
}
