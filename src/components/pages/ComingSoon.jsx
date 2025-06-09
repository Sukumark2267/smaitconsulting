"use client";

import { useState } from "react";
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

const newsletterSchema = z.object({
  fname: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
});

export default function ComingSoon() {
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

  return (
    <div className="landing-page min-h-screen bg-black text-white">
      {/* Hero Section with Video */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/gym-hero.mp4" type="video/mp4" />
            {/* Fallback background image */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/elements/bg-texture.webp')",
              }}
            />
          </video>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center">
          <Image
            src="/images/logo/logo-primary.png"
            alt="Dreamland Athletics Gym"
            width={300}
            height={300}
            className="w-32 md:w-48 lg:w-64 h-auto object-cover rounded-xl mb-5"
            priority
          />

          <Badge variant="outline" className="mb-6 text-primary border-primary">
            Premium Fitness Experience
          </Badge>

          <h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight text-primary"
            style={{
              fontFamily: "Swiss721Bold",
              textShadow: "0 0 20px rgba(0,0,0,0.8)",
              letterSpacing: "2px",
            }}
          >
            Dreamland Athletics
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl leading-relaxed">
            Where Champions Are Made
          </p>

          <p className="text-base md:text-xl mb-12 max-w-3xl text-gray-300 leading-relaxed">
            Your journey to greatness starts here. Join the elite community of
            athletes who dare to dream big and work harder.
          </p>

          <div>
            <Link href="#" className="btn--primary">
              Start Your Journey
            </Link>
          </div>
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
                        Professional-grade equipment and personalized training
                        programs designed to maximize your potential.
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
                      <CardTitle className="text-white">24/7 Access</CardTitle>
                      <CardDescription className="text-gray-400">
                        Train on your schedule with round-the-clock access to
                        our premium facilities and equipment.
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
                  <div className="flex items-start space-x-4 bg-white/10 lg:bg-transparent lg:hover:bg-white/10 p-4 rounded-lg transition-colors duration-300">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 hover:rotate-12">
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

                  <div className="flex items-start space-x-4 bg-white/10 lg:bg-transparent lg:hover:bg-white/10 p-4 rounded-lg transition-colors duration-300">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 hover:rotate-12">
                      <span className="text-xl font-bold text-black">🏃</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                        Cardio Theater
                      </h3>
                      <p className="text-sm md:text-lg text-gray-400">
                        State-of-the-art cardio equipment with entertainment
                        systems to keep you motivated.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-white/10 lg:bg-transparent lg:hover:bg-white/10 p-4 rounded-lg transition-colors duration-300">
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
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 px-4 rounded-xl flex items-center my-5">
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
          </section>

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
              className="text-gray-400 border-gray-600 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Coming Soon
            </Badge>
            <Badge
              variant="outline"
              className="text-gray-400 border-gray-600 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Elite Training
            </Badge>
            <Badge
              variant="outline"
              className="text-gray-400 border-gray-600 hover:border-primary hover:text-primary transition-colors duration-300"
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
