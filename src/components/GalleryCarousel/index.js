"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/gallery/poster-1.webp",
  "/images/gallery/poster-2.webp",
  "/images/gallery/poster-3.webp",
  "/images/gallery/poster-4.webp",
  "/images/gallery/poster-5.webp",
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <h2 className="text-6xl md:text-7xl lg:text-8xl mt-6 text-white uppercase text-center">
        <span className="text-white font-medium">GALLERY</span>
      </h2>
      <div className="relative flex items-center justify-center w-full overflow-hidden h-screen">
        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-1 lg:left-90 z-30 hover:backdrop-blur-sm rounded-4xl p-3 shadow cursor-pointer hover:scale-110 transition"
        >
          <ChevronLeft className="w-15 h-15" />
        </button>

        {/* Carousel */}
        <div className="relative flex items-center justify-center w-full max-w-7xl">
          {images.map((img, index) => {
            const offset = (index - current + images.length) % images.length;
            let translateX = 0;
            let scale = 1;
            let zIndex = 20 - offset;
            let opacity = 1;

            // define offset effects for overlap
            if (offset === 0) {
              translateX = 0;
              scale = 1;
              opacity = 1;
            } else if (offset === 1 || offset === images.length - 1) {
              translateX = offset === 1 ? 150 : -150;
              scale = 0.9;
              opacity = 0.8;
            } else if (offset === 2 || offset === images.length - 2) {
              translateX = offset === 2 ? 250 : -250;
              scale = 0.8;
              opacity = 0.6;
            } else {
              opacity = 0;
              scale = 0.7;
            }

            return (
              <motion.div
                key={img}
                className="absolute rounded-xl overflow-hidden shadow-2xl"
                animate={{
                  x: translateX,
                  scale,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                }}
              >
                <Image
                  src={img}
                  alt=""
                  width={580}
                  height={700}
                  className="object-cover rounded-xl"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-1 lg:right-90 z-30 hover:backdrop-blur-sm rounded-4xl p-3 shadow cursor-pointer hover:scale-110 transition"
        >
          <ChevronRight className="w-15 h-15" />
        </button>
      </div>
    </>
  );
}
