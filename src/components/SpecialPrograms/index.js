'use client';
import { useEffect, useLayoutEffect, useMemo } from 'react';
import './SpecialPrograms.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollObserver, valueAtPercentage } from 'aatjs';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const programsData = [
  {
    title: 'ONE ON ONE',
    description: 'Personalized coaching sessions with focused attention on form, technique, and personal goals in a private setting.',
    features: [
      'Tailored workout sessions',
      'Real-time form correction',
      'Goal-specific planning',
      'Progress accountability',
      'Price: $40/session',
    ],
    image: '/images/elements/A.png',
  },
  {
    title: 'WEIGHT LOSS PROGRAM',
    description: 'A 12-week structured transformation program with guided workouts and nutrition advice to help you burn fat effectively.',
    features: [
      '12-week complete program',
      'Fat-burning workout routines',
      'Nutritional guidance',
      'Motivational coaching',
      'Price: $750/12 weeks',
    ],
    image: '/images/elements/C.png',
  },
  {
    title: 'POST REHABILITATION TRAINING',
    description: 'Specialized sessions focused on safe recovery and rebuilding strength after injury with professional guidance.',
    features: [
      'Customized recovery workouts',
      'Rehabilitation-focused routines',
      'Mobility enhancement',
      'Strength rebuilding',
      'Price: $80/session',
    ],
    image: '/images/elements/T.png',
  },
];

const SpecialPrograms = () => {
  // GSAP Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.servicecard', {
        opacity: 0,
        y: 60,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#ourprograms',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cardsContainer = document.querySelector('.cards');
    const cards = document.querySelectorAll('.servicecard');
    if (!cardsContainer || cards.length === 0) return;

    const firstCardHeight = cards[0].clientHeight;

    cardsContainer.style.setProperty('--cards-count', cards.length.toString());
    cardsContainer.style.setProperty('--card-height', `${firstCardHeight}px`);

    cards.forEach((card, index) => {
      const offsetTop = 20 + index * 20;
      card.style.paddingTop = `${offsetTop}px`;

      if (index === cards.length - 1) return;

      const toScale = 1 - (cards.length - 1 - index) * 0.1;
      const nextCard = cards[index + 1];
      const cardInner = card.querySelector('.servicecard__inner');

      ScrollObserver.Element(nextCard, {
        offsetTop,
        offsetBottom: window.innerHeight - firstCardHeight,
      }).onScroll(({ percentageY }) => {
        if (cardInner) {
          cardInner.style.transform = `scale(${valueAtPercentage({
            from: 1,
            to: toScale,
            percentage: percentageY,
          })})`;

          cardInner.style.filter = `brightness(${valueAtPercentage({
            from: 1,
            to: 0.6,
            percentage: percentageY,
          })})`;
        }
      });
    });
  }, []);

  const renderedPrograms = useMemo(() => {
    return programsData.map((program, index) => (
      <div className="servicecard" data-index={index} key={index}>
        <div className="servicecard__inner">
          <div className="servicecard__image-container">
            <Image
              className="servicecard__image"
              src={program.image}
              alt={program.title}
              width={400}
              height={250}
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
          <div className="servicecard__content">
            <h1 className="servicecard__title">{program.title}</h1>
            <p className="servicecard__description">{program.description}</p>
            <ul className="servicecard__features">
              {program.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <br />
            <button
              className="cta-button"
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    ));
  }, []);

  return (
    <section id="programs" className="dark-section mt-10">
      <h2 className="section-title text-6xl md:text-7xl lg:text-8xl" id="ourprograms">
        OUR PROGRAMS
      </h2>
      <div className="cards">{renderedPrograms}</div>
      <div className="space"></div>
    </section>
  );
};

export default SpecialPrograms;
