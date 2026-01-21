"use client";
import React, { useState } from "react";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "OVERVIEW", href: "/" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "SERVICES", href: "/services" },
    { name: "JOIN SHAMAS", href: "/joinshamas" },
    { name: "CONTACT", href: "/contact" },
    { name: "WORK WITH US", href: "/form" },
    // { name: "TESTIMONIALS", href: "/testimonials" },
  ];

  // Simplified Mobile Variants (No scaling or long durations)
  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.2 },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="sticky top-0 left-0 w-full bg-black md:bg-originalBlue text-white z-50 shadow-lg">
      {/* 1. Desktop Top Bar (Logo) */}
      <div className="hidden md:flex md:bg-black text-white text-center border-b-[0.5px] border-opacity-30 border-white items-center justify-center py-3">
        <img
          className="h-12 rounded-md"
          src="/navbarLogoSolid.png"
          alt="Logo"
        />
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="flex justify-between md:justify-center items-center px-6 py-3 relative z-50">
        {/* Mobile Logo Only */}
        <img className="md:hidden h-8" src="/navbarLogoSolid.png" alt="Logo" />

        {/* Desktop Menu */}
        <div className="hidden md:flex h-full gap-8 items-center">
          {menuItems.map((item, i) => (
            <div key={i} className="relative group">
              <Link
                href={item.href}
                className={`${roboto.className} text-[bisque] text-sm font-medium tracking-widest py-2 px-1 block`}
              >
                {item.name}

                {/* Simple Hover Underline Logic */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 focus:outline-none"
        >
          {/* Static Hamburger Icon (No animation) */}
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* 3. Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden overflow-hidden bg-black border-t border-white/10"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <ul className="flex flex-col py-4">
              {menuItems.map((item, i) => (
                <li key={i} className="w-full">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block w-full text-[bisque] px-8 py-4 text-sm font-medium tracking-widest hover:bg-white/10 transition-colors ${roboto.className}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
