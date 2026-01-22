// components/ContactSection.jsx
'use client';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from 'next/image';
import './contact.css';

const ContactSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: '100%',
        transition: {
          duration: 1,
          ease: 'easeInOut',
        },
      });
    } else {
      controls.start({
        width: '0%',
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      });
    }
  }, [inView, controls]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = e.target;
    const formData = {
      fname: form[0].value,
      email: form[1].value,
      phone: form[2].value,
      message: form[3].value,
    };
  
    try {
      console.log(formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message);
        form.reset();
      } else {
        alert(data.error || 'Something went wrong!');
      }
    } catch (err) {
      alert('Network error. Please try again.');
      console.error(err);
    }
  };

    return (
    <>
      <div className="flex justify-center">
      <motion.div
        ref={ref}
        initial={{ width: '0%' }}
        animate={controls}
        className="yellowborder relative h-3 mt-[-1px] overflow-hidden"
        style={{ originX: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
      
      </motion.div>
    </div>

    <section id="contact">
    <h2 className="text-6xl md:text-7xl lg:text-8xl mb-8 text-white uppercase text-center">
        GET IN TOUCH
    </h2> 
      <div className="contact-grid">
        <div>
          <div className="contact-info">
            <h4 style={{fontWeight:'bolder'}}>LOCATION</h4>
            <p>77 City Center Drive, Suite 501,Mississauga,Ontario,L5B 1M5</p>
          </div>
          <div className="contact-info">
            <h4 style={{fontWeight:'bolder'}}>HOURS</h4>
            <p>Monday–Friday: 5am – 10pm</p>
            <p>Saturday–Sunday: 7am – 8pm</p>
          </div>
          <div className="contact-info">
            <h4 style={{fontWeight:'bolder'}}>CONTACT</h4>
            <a href="tel:+14387229543">(438) 7229543</a>
            <a href="mailto:info@smitconsultinggroup.com">info@smitconsultinggroup.com</a>
            <a
              href="https://www.instagram.com/smaitconsultinggroup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @sm
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="cta-button" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <motion.div
      className="map-container"
      initial={{ opacity: 0, scaleX: 0.5, transformOrigin: 'center' }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
      style={{ overflow: 'hidden' }}
    >
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6012634864283!2d-79.7612346845022!3d43.73154897912171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cbec4f4d7b%3A0x6d9275f6e8d5b6e2!2s860%20N%20Park%20Dr%2C%20Brampton%2C%20ON%20L6S%204N5%2C%20Canada!5e0!3m2!1sen!2sin!4v1700344567890!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </motion.div>
    </section>
    </>
  );
};

export default ContactSection;
