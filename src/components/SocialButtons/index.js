import React from 'react';
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaTiktok,
} from 'react-icons/fa';

const socialButtons = [
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    bg: 'bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
    href: 'https://www.instagram.com/dreamland_brampton',
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp />,
    bg: 'bg-gradient-to-tr from-[#02ff2c] to-[#008a12]',
    href: 'https://wa.me/9055551234',
  },
  {
    name: 'Linkedin',
    icon: <FaLinkedin/>,
    bg: 'bg-[#45bbff]',
    href: 'https://www.linkedin.com/in/chirag-guleria-22337098',
  },
  {
    name: 'Tiktok',
    icon: <FaTiktok />,
    bg: 'bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
    href: 'https://www.tiktok.com/@dreamlandathletics?_t=ZM-8xfOaYLpTXS&_r=1',
  },
];

const SocialButtons = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {socialButtons.map(({ name, icon, bg, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={`relative z-0 w-[50px] h-[50px] ${bg} rounded-full flex items-center justify-center
                      transition-transform duration-100 active:scale-90 group`}
        >
          <span
            className="absolute w-[55px] h-[55px] bg-[#212121] rounded-full z-[-1]
                       border border-amber-400/50 transition-all duration-300 group-hover:w-0 group-hover:h-0"
          />
          <span className="text-white text-[20px] z-10">{icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;
