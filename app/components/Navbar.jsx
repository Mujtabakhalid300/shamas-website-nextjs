import React, { useState } from "react";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      id="navbar"
      className="sticky top-0 left-0 w-full md:bg-originalBlue bg-black text-white p-2 sm:p-0 z-50"
    >
      {/* Logo bar */}
      <div className="hidden md:flex md:bg-black bg-black text-white text-center border-b-[0.5px] border-opacity-50 border-white items-center justify-center py-3">
        <img className="h-12 rounded-md" src="/navbarLogoSolid.png" />
      </div>

      <div className="flex justify-between md:justify-around items-center">
        <img className="md:hidden h-8" src="/navbarLogoSolid.png" />

        {/* Desktop Menu */}
        <div className="hidden md:flex h-full whitespace-nowrap">
          <Link
            href="/"
            className={`text-[bisque] hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue px-3 py-2 tracking-tighter ${roboto.className} font-normal transition-transform duration-200 hover:scale-105`}
          >
            OVERVIEW
          </Link>
          <Link
            href="/portfolio"
            className={`text-[bisque] hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue px-3 py-2 tracking-tighter ${roboto.className} font-normal transition-transform duration-200 hover:scale-105`}
          >
            PORTFOLIO
          </Link>
          <Link
            href="/services"
            className={`text-[bisque] hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue px-3 py-2 tracking-tighter ${roboto.className} font-normal transition-transform duration-200 hover:scale-105`}
          >
            SERVICES
          </Link>
          <Link
            href="/management"
            className={`text-[bisque] hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue px-3 py-2 tracking-tighter ${roboto.className} font-normal transition-transform duration-200 hover:scale-105`}
          >
            MANAGEMENT
          </Link>
          <Link
            href="/contact"
            className={`text-[bisque] hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue px-3 py-2 tracking-tighter ${roboto.className} font-normal transition-transform duration-200 hover:scale-105`}
          >
            CONTACT
          </Link>
          <Link
            href="/form"
            className={`text-[bisque] hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue px-3 py-2 tracking-tighter ${roboto.className} font-normal transition-transform duration-200 hover:scale-105`}
          >
            WORK WITH US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? (
            // Close Icon
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-2">
          <Link href="/" className={`text-[bisque] px-3 py-2 ${roboto.className}`}>
            OVERVIEW
          </Link>
          <Link href="/portfolio" className={`text-[bisque] px-3 py-2 ${roboto.className}`}>
            PORTFOLIO
          </Link>
          <Link href="/services" className={`text-[bisque] px-3 py-2 ${roboto.className}`}>
            SERVICES
          </Link>
          <Link href="/management" className={`text-[bisque] px-3 py-2 ${roboto.className}`}>
            MANAGEMENT
          </Link>
          <Link href="/contact" className={`text-[bisque] px-3 py-2 ${roboto.className}`}>
            CONTACT
          </Link>
          <Link href="/form" className={`text-[bisque] px-3 py-2 ${roboto.className}`}>
            WORK WITH US
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
