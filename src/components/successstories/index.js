// components/SuccessStories.jsx
import React from 'react';
import Image from 'next/image';

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
    <section className="dark-section">
      <h2 className="section-title">SUCCESS STORIES</h2>
      <div className="testimonials-container">
        {testimonials.map((item, idx) => (
          <div className="testimonial" key={idx}>
            <p>&apos;{item.text}&apos;</p> 
            <div className="testimonial-author">
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
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
