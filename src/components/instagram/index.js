"use client";

import React, { useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';
import SocialButtons from '../SocialButtons';


const InstagramFeed = () => {
  // Load Elfsight script only on the client
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="instagram">
        <h2 className="text-6xl md:text-8xl lg:text-8xl  my-5 text-center uppercase text-primary">
          #DreamlandLIFE
        </h2>
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
      <br></br>
      {/* Elfsight Instagram Widget */}
      <div
        className="elfsight-app-7b180250-b2c1-4467-8e15-f5da1f6eeb1b"
        data-elfsight-app-lazy
      ></div>

      <div className="instagram-cta mb-6">
        <a
          href="https://www.instagram.com/dreamland_brampton"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-flex items-center justify-center"
        >
          <FaInstagram style={{ marginRight: '8px' }} />
          Follow Us
        </a>
      </div>
      <div className="min-h-20 bg-none flex justify-center">
            <SocialButtons />
        </div>
    </section>
  );
};

export default InstagramFeed;
