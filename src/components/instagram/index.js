// components/InstagramFeed.jsx
import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

const instagramImages = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1571019614243-c4cd3aa76293?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80',
];

const InstagramFeed = () => {
  return (
    <section id="instagram">
      <h2 className="section-title">#DREAMLANDLIFE</h2>
      <p>
        Follow our vibrant community on Instagram{' '}
        <a
          href="https://www.instagram.com/dreamland_brampton"
          style={{ color: 'var(--primary)', textDecoration: 'underline' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          @dreamland_brampton
        </a>{' '}
        for daily motivation, workout tips, and member spotlights.
      </p>

      <div className="instagram-feed">
        {instagramImages.map((src, index) => (
          <div className="instagram-post" key={index}>
            {/* <Image
              src={src}
              alt={`Instagram post ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            /> */}
            <div className="instagram-overlay">
              <FaInstagram />
            </div>
          </div>
        ))}
      </div>
      <div className="instagram-cta">
      <button className="cta-button">
        <i className="fab fa-instagram"></i> Follow Us
      </button>
      </div>
    </section>
  );
};

export default InstagramFeed;
