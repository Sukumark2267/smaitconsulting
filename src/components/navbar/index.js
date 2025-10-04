import Link from "next/link";
import Image from "next/image";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="fixed w-full bg-white z-50 transition-shadow duration-300">
      <div className="logo px-15 z-99">
        {/* <Image src="https://via.placeholder.com/50x50" alt="Dreamland Athletics Logo" width={100} height={100} /> */}
        <Link href="/">
          <Image
            src="/images/logo/dl_white_empty_primary - text.png"
            alt="Logo"
            width={200}
            height={200}
            className="scale-110"
          />
        </Link>{" "}
      </div>
      <div className="logo z-1">
        {/* <Image src="https://via.placeholder.com/50x50" alt="Dreamland Athletics Logo" width={100} height={100} /> */}
        <Link href="/">
          <Image
            src="/images/logo/logo-primary.png"
            alt="Logo"
            width={1000}
            height={1000}
            className="w-18 scale-2000 pt-1"
          />
        </Link>{" "}
      </div>
      <div className="right-section z-99 px-10">
        <button className="mobile-menu-btn" id="mobileMenuBtn">
          <i className="fas fa-bars"></i>
        </button>
        <nav id="mainNav">
          <Link href="/AboutUs">About</Link>
          {/* <Link href="/Blogs">Blogs</Link> */}
          <Link href="/Services">Services</Link>

          <Link href="/ContactUs">Contact Us</Link>

          {/* <a href="#about">About</a>
      <a href="#programs">Programs</a>
      <a href="#membership">Membership</a> */}
          {/* <a href="#trainers">Trainers</a> */}
          {/* <a href="/Store">Store</a> */}
          {/* <a href="#contact">Contact</a> */}
        </nav>
      </div>
    </header>
  );
}
