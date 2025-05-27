'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Dreamland completely changed my relationship with fitness. The coaches genuinely care about your progress and the community keeps you accountable. I've never been stronger!",
    author: {
      name: 'JESSICA M.',
      role: 'Member since 2019',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
  },
  {
    text: "As a competitive athlete, I needed training that would push me further. Dreamland's elite program helped me shave 2 seconds off my 40yd dash in 3 months.",
    author: {
      name: 'TYLER R.',
      role: 'College Football Player',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
  },
  {
    text: "The energy at Dreamland is unmatched. Every workout feels like you're part of something bigger. Follow our journey @dreamland_brampton!",
    author: {
      name: 'PRIYA K.',
      role: 'Instagram Community Manager',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  },
];

const SuccessStories = () => {
  return (
    <>
      <section className="dark-section" id='sucessstories'>
        <h2 className="section-title">SUCCESS STORIES</h2>
        <div className="testimonials-container">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.06 }}
            >
              <div className="testimonial">
                <p>&apos;{item.text}&apos;</p>
                <div className="testimonial-author">
                  {/* Uncomment below if image is needed */}
                  {/* <Image
                    src={item.author.image}
                    alt={item.author.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  /> */}
                  <div>
                    <h5>{item.author.name}</h5>
                    <p>{item.author.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="dividerborder relative w-5/5 h-10 mt-[-1px]">
        <Image
          src="/images/elements/BORDER-Horizontal.png"
          alt="Section Divider Border"
          fill
          className="object-cover"
          priority
        />
      </div>
    </>
  );
};

export default SuccessStories;
