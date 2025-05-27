'use client';
import { useLayoutEffect } from 'react';
import './programs.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programsData = [
  {
    title: 'ELITE ATHLETE TRAINING',
    description: 'Designed for athletes seeking peak performance with sport-specific training.',
    features: [
      'Personalized training plans',
      'Advanced performance metrics',
      'Nutrition coaching',
      'Recovery protocols',
    ],
  },
  {
    title: 'GROUP FITNESS',
    description: 'High-energy classes designed to challenge you in a team environment.',
    features: [
      'HIIT & Circuit Training',
      'Strength & Conditioning',
      'Mobility & Recovery',
      'Outdoor Bootcamps',
    ],
  },
  {
    title: 'DEDICATED FITNESS TRAINING',
    description: 'Our one-on-one coaching is designed just for you—tailored, focused, and results-driven.',
    features: [
      'Custom workout plans',
      'Form correction',
      'Accountability',
      'Progress tracking',
    ],
  },
];

const ProgramsSection = () => {
//         gsap.from(".card", {
//             opacity: 0,
//             x: (i) => -200 * (i + 3),
//             duration: 2,
//             stagger: 1,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: ".Aboutsection2",
//               start: "top 10%",
//               end: "bottom 30%",
//               scrub: true,
//               markers: true,
//               toggleActions: "play none none reverse",
//               pin: true,
//         },
//       });
//     });
  
//     return () => ctx.revert();
// }, []);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".program-card");
  
      gsap.from(".program-card", {
        opacity: 0,
        x: -150,
        duration: 0.5,
        ease: "power2.out",
        stagger: 1,
        scrollTrigger: {
          trigger: ".program-card",
          start: "top 80%",
          scroller: "body",         
          end: "+=0",
          scrub: 3,
          markers: false,
          toggleActions: "play none none reverse",
          pin: true,
        },
      });
  });
      
    return () => ctx.revert();
  }, []);
  


  return (
    <section id="programs" className="dark-section">
      <h2 className="section-title" id='ourprograms'>OUR PROGRAMS</h2>
      <div className="programs-wrapper">
      <div className="programs-grid">
        {programsData.map((program, index) => (
          <div key={index} className="program-card">
            <h4>{program.title}</h4>
            <p>{program.description}</p>
            <ul>
              {program.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="cta-button">Join Now</button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
