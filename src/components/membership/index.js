// components/MembershipSection.jsx
"use client";
import React, { useLayoutEffect } from 'react';
import './membership.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const membershipPlans = [
  {
    name: 'BASIC',
    description: 'Perfect for starting your fitness journey',
    price: 59,
    features: [
      'Unlimited gym access',
      '1 group class/week',
      'Locker room access',
      'Progress tracking',
    ],
    isPopular: false,
  },
  {
    name: 'PERFORMANCE',
    description: 'For serious athletes committed to results',
    price: 99,
    features: [
      'Unlimited gym + classes',
      'Monthly body comp analysis',
      'Recovery area access',
      'Nutrition guide',
    ],
    isPopular: true,
  },
  {
    name: 'ELITE',
    description: 'Premium coaching for maximum results',
    price: 199,
    features: [
      'Everything in Performance',
      '2 personal training sessions',
      'Custom meal plan',
      '24/7 facility access',
    ],
    isPopular: false,
  },
];

const MembershipSection = () => {
  useLayoutEffect(() => {
    const cards = gsap.utils.toArray('.price-box');
  
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { rotateX: 35, rotateY: 20, opacity: 0 },
        {
          rotateX: 0,
          rotateY: 0,
          opacity: 1,
          delay:0.1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  
  return (
    <section id="membership">
      <h2 className="section-title">MEMBERSHIP PLANS</h2>
      <div className="pricing-table">
        {membershipPlans.map((plan, index) => (
          <div key={index} className={`price-box ${plan.isPopular ? 'popular' : ''}`}>
            {plan.isPopular && <div className="popular-tag">MOST POPULAR</div>}
            <div className="content">
              {/* Front Face */}
              <div className="front">
                <h4>{plan.name}</h4>
                <h4>What&rsquo;s Included</h4>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  {/* <button className="cta-button" style={{ marginTop: '1rem' }}>
                    Join Now
                  </button> */}

                {/* <p>{plan.description}</p> */}
                {/* <div className="price">
                  ${plan.price}
                  <span>/month</span>
                </div> */}
                <button className="cta-button" style={{ marginTop: '1.5rem' }}>
                  Turn the Cards!!
                </button>
              </div>

              {/* Back Face */}
              <div className="back">
                <div className="back-content">
                <h4>{plan.name}</h4>
                <div className="price">
                  ${plan.price}
                  <span>/month</span>
                </div>
                <button className="cta-button" style={{ marginTop: '1.5rem' }}>
                  Join Now!!
                </button>

                  {/* <h4>Whats Included</h4>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <button className="cta-button" style={{ marginTop: '1rem' }}>
                    Join Now
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default MembershipSection;
