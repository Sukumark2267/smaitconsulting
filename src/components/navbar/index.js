import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed w-full bg-white z-50 transition-shadow duration-300">
    <div className="logo">
      {/* <Image src="https://via.placeholder.com/50x50" alt="Dreamland Athletics Logo" width={100} height={100} /> */}
      <span className="logo-text">DREAMLAND ATHLETICS</span>
    </div>
    <button className="mobile-menu-btn" id="mobileMenuBtn">
      <i className="fas fa-bars"></i>
    </button>
    <nav id="mainNav">
      <a href="#about">About</a>
      <a href="#programs">Programs</a>
      <a href="#membership">Membership</a>
      <a href="#trainers">Trainers</a>
      <a href="#instagram">Instagram</a>
      <a href="#contact">Contact</a>
    </nav>
    </header>
  );
}