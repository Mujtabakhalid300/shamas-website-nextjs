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
      className="sticky top-0 left-0 w-full bg-originalBlue text-white p-2 sm:p-0  z-50"
    >
      <div className="hidden md:flex bg-originalBlue text-white text-center border-b-[0.5px] border-opacity-50 border-white items-center justify-center py-3">
        <img className="h-8" src="/navbarLogo.png" />
      </div>
      <div className="flex justify-between md:justify-around items-center ">
        <img className="md:hidden h-8" src="/navbarLogo.png" />

        {/* Desktop Menu (Hidden on small screens) */}
        <div className="hidden md:flex  h-full">
          <Link
            href="/"
            className={`hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue w-full h-full p-3 ${roboto.className} font-normal`}
          >
            OVERVIEW
          </Link>
          <Link
            href="/portfolio"
            className={`hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue w-full h-full p-3 ${roboto.className} font-normal`}
          >
            PORTFOLIO
          </Link>
          <Link
            href="#"
            className={`hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue w-full h-full p-3 ${roboto.className} font-normal`}
          >
            AVAILABILITY
          </Link>
          <Link
            href="#"
            className={`hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue w-full h-full p-3 ${roboto.className} font-normal`}
          >
            MANAGEMENT
          </Link>
          <Link
            href="#"
            className={`hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue w-full h-full p-3 ${roboto.className} font-normal`}
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? (
            // Close Icon (X)
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
            // Hamburger Icon (Three Lines)
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

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-2">
          <Link
            href="/"
            className={` w-full focus:bg-[#193658] transition-all duration-300  ${roboto.className}`}
          >
            OVERVIEW
          </Link>
          <Link
            href="/portfolio"
            className={` w-full focus:bg-[#193658] transition-all duration-300  ${roboto.className}`}
          >
            PORTFOLIO
          </Link>
          <Link
            href="/availability"
            className={` w-full focus:bg-[#193658] transition-all duration-300  ${roboto.className}`}
          >
            AVAILABILITY
          </Link>
          <Link
            href="/management"
            className={` w-full focus:bg-[#193658] transition-all duration-300  ${roboto.className}`}
          >
            MANAGEMENT
          </Link>
          <Link
            href="/contact"
            className={` w-full focus:bg-[#193658] transition-all duration-300  ${roboto.className}`}
          >
            CONTACT
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
