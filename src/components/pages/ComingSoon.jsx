"use client";

import { useState } from "react";
import Image from "next/image";
import { z } from "zod";
import { toast } from "sonner";
import { PulseLoader } from "react-spinners";

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
      // Show error (result.error.issues[0].message)
      console.log(result.error);
      toast.error("Something went wrong.", {
        description: result.error.issues[0].message,
      });
      // alert(result.error.issues[0].message);
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
    <div
      className="flex flex-col justify-center items-center h-dvh max-h-full"
      style={{
        background: "url('/images/elements/bg.webp') no-repeat center center",
        backgroundSize: "cover",
        fontFamily: "'AgudaBlack', 'Roboto', 'Arial', sans-serif",
      }}
    >
      <div className="absolute flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.46)]">
      <Image
        src="/images/logo/logo-primary.png"
        alt="Dreamland Athletics Gym"
        width={250}
        height={250}
        className="bg-logo w-[150px] md:w-[250px] h-auto object-cover rounded-xl mb-5"
        priority
      />
      <h1
        className="text-5xl md:text-8xl text-center font-bold mb-5"
        style={{
          fontFamily: "octinspray",
          textShadow: "0 0 15px #000",
          color: "#ffd700",
          letterSpacing: "2px",
        }}
      >
        Welcome to Dreamland
      </h1>
      <div className="w-full mt-10">
        <div className="grid grid-cols-12 justify-between items-center p-4 lg:p-12">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-2xl md:text-5xl leading-none font-bold mb-6">
              Your Hustle Starts Here.
            </h1>
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-11">
                <p className="leading-7 lg:pr-10 text-justify">
                  Join the movement. Be the first to know when we launch.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 mt-12 lg:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-6 mt-4">
                <input
                  type="text"
                  name="fname"
                  value={form.fname}
                  onChange={handleChange}
                  className="h-18 leading-10 bg-gray-950 bg-opacity-10 border border-transparent rounded-2xl focus:outline-none focus:border-[#ffd700] w-full placeholder:text-white pl-4"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-4 mt-3">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="h-18 leading-10 bg-gray-950 bg-opacity-10 border border-transparent rounded-2xl focus:outline-none focus:border-[#ffd700] w-full placeholder:text-white pl-4"
                  placeholder="Email"
                />
              </div>

              <button
                type="submit"
                className="cta-button px-7 py-3 w-full mt-2"
              >
                {loading ? (
                  <PulseLoader color="#000" speedMultiplier={0.75} />
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
