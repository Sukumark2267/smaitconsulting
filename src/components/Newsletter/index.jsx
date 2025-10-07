"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PulseLoader } from "react-spinners";

export default function Newsletter() {
  const [form, setForm] = useState({ fname: "", email: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Example API call (replace with your endpoint)
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to subscribe");
      alert("Successfully subscribed!");
      setForm({ fname: "", email: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="Newsletter"
      className="Newsletter py-16 px-4 rounded-xl flex items-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-6xl md:text-7xl lg:text-8xl mb-6 text-white uppercase">
          Be the First to Know
        </h2>
        <p className="text-md md:text-lg lg:text-2xl text-gray-300 mb-12 leading-relaxed">
          Get exclusive access to training tips, member benefits, and be the
          first to hear about our grand opening.
        </p>

        <Card className="bg-transparent border-0 py-8 px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fname"
                value={form.fname}
                onChange={handleChange}
                className="h-12 bg-black border border-primary/20 rounded-lg focus:outline-none focus:border-primary w-full placeholder:text-gray-400 px-4 text-white transition-colors duration-300"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="h-12 bg-black border border-primary/20 rounded-lg focus:outline-none focus:border-primary w-full placeholder:text-gray-400 px-4 text-white transition-colors duration-300"
                placeholder="Your Email"
                required
              />
            </div>

            <button
              type="submit"
              className="btn--primary transition-all duration-300 px-6 pb-4 pt-5"
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
  );
}
