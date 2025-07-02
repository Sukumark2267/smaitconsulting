import React from "react";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const card1Socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/jay.chundawat23?igsh=MjY5N2NkaGh3Z2p6&utm_source=qr",
    icon: <FaInstagram size={40} />,
  },
];

const card2Socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/elevatewith_chirag?igsh=MWRlZzkyZ3Fkc2drOA%3D%3D&utm_source=qr",
    icon: <FaInstagram size={40} />,
  },
];

const Card = ({ bg, profileImg, socials, name, description }) => (
  <div
    className={`w-[24em] h-[32.5em] ${bg} border-2 border-yellow-400 p-5
                transition-all duration-1000 ease-in-out 
                flex flex-col rounded-tr-[20px] rounded-bl-[20px] 
                [clip-path:polygon(30px_0%,100%_0,100%_calc(100%_-_30px),calc(100%_-_30px)_100%,0_100%,0%_30px)]`}
  >
    <div className="w-[18.8em] h-[18.8em] relative rounded-[15px] overflow-hidden mx-auto my-4">
      <Image
        src={profileImg}
        alt="Profile"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>

    <span className="font-bold text-white text-center text-lg">{name}</span>

    <p className="font-normal text-white text-justify text-md m-4">
      {description}
    </p>

    <div className="mt-2 flex justify-center gap-4">
      {socials.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary transition-colors duration-300"
          aria-label={name}
        >
          {icon}
        </a>
      ))}
    </div>
  </div>
);

const FounderSocials = () => {
  return (
    <>
      <section className="py-16 px-10 md:px-10 lg:px-40 rounded-xl items-center">
        <h2 className="text-6xl md:text-7xl lg:text-8xl mb-6 text-white uppercase text-center">
          Our Founders
        </h2>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-10">
          <Card
            bg="bg-[#1a1a1a]"
            profileImg="/images/elements/founder1.png"
            socials={card1Socials}
            name="Chirag Guleria"
            description="I'm Chirag, the mind behind Elevate With Chirag. I help people grow through motivating content and real talk that inspires daily progress."
          />
          <Card
            bg="bg-[#121212]"
            profileImg="/images/elements/founder2.png"
            socials={card2Socials}
            name="Jay Chundawat"
            description="I'm Jay, a digital creator who blends style and stories. My passion lies in curating content that connects people and aesthetics through Instagram."
          />
        </div>
      </section>
    </>
  );
};

export default FounderSocials;
