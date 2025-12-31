"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainPageVideo from "./components/MainPageVideo";
import ScrollButton from "./components/ScrollButton";
import Counter from "./components/Counter";
import Image from "next/image";
import {
  Gothic_A1,
  Libre_Baskerville,
  Lora,
  Playfair_Display,
} from "next/font/google";

const gothic_A1 = Gothic_A1({
  subsets: ["latin"],
  weight: ["400", "700", "200"],
});

const libre_basker = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      // Logic Update: Show button when scrolled halfway through the viewport (video)
      // window.innerHeight is the height of the screen/video section
      // dividing by 2 triggers it at 50% scroll depth of that section
      if (window.scrollY > window.innerHeight / 2) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative scroll-smooth">
      <MainPageVideo />
      {/* Hero Section */}
      {/* CHANGE 1: Added 'justify-center' to vertically align content automatically */}
      {/* CHANGE 2: Removed 'items-center' here if you want full width control, but kept it for centering children */}
      <section className="px-4 relative w-full h-[calc(100vh-32px)] md:h-[calc(100vh-132px)] flex flex-col items-center justify-center bg-black bg-opacity-40">
        {/* Logo Container */}
        {/* CHANGE 3: Removed 'mt-20'. The parent 'justify-center' handles the spacing now. */}
        <div className="relative flex flex-col items-center justify-center mb-2 z-10">
          {/* 1. Rotating GIF (Positioned ABOVE) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-4"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* CHANGE 4: Made width/height responsive. 
                  - Default (Mobile/Small Laptop): 220px
                  - Large Screens (lg): 300px 
              */}
              <Image
                src="/Logo_Animation.gif"
                alt="Logo Animation"
                width={400}
                height={400}
                className="w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] rounded-md object-cover max-w-none"
                unoptimized={true}
              />
            </motion.div>
          </motion.div>

          {/* 2. Main Logo Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut",
            }}
            // CHANGE 5: Adjusted width constraints for better scaling on laptops
            className="w-[80%] md:w-[60%] lg:max-w-md"
          >
            <Image
              className="object-contain w-full h-auto"
              src="/navbarLogo.png"
              alt="Navbar Logo"
              width={600}
              height={360}
              priority
            />
          </motion.div>
        </div>

        {/* 3. Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3
            className={`mt-0 mb-2 ${gothic_A1.className} font-[400] tracking-wide text-white text-lg md:text-2xl lg:text-3xl text-center mt-4`}
          >
            Defining the Standards of Real Estate Development
          </h3>
        </motion.div>

        <ScrollButton sectionName={"img-section"} />
      </section>

      {/* Next Section (Skyline) */}
      <section
        id="img-section"
        className="pt-16 md:pt-32 px-4 relative w-full h-screen bg-[url(/skyline.jpg)] bg-black/60 bg-cover bg-center bg-no-repeat bg-blend-darken flex flex-col items-center"
      >
        <h2
          className={`leading-normal md:leading-tight ${libre_basker.className} tracking-wider my-2 mt-[12rem] text-white text-center text-3xl font-[400]`}
        >
          Turning around distressed properties to wonderful homes
        </h2>

        <div
          className={`${gothic_A1.className} break-words my-2 md:max-w-xl text-white text-base font-[400] text-center max-w-3xl`}
        >
          Shamas has a proven track record for successful execution of a broad
          range of construction, restoration & renovation projects.
        </div>

        <ScrollButton sectionName={"stats-section"} />
      </section>

      {/* Stats Section */}
      <section
        id="stats-section"
        className="pt-8 md:pt-32 px-4 w-full bg-white flex flex-col items-center"
      >
        <div
          className={`${playfair_display.className} font-[700] my-10 text-center text-3xl`}
        >
          COMPANY OVERVIEW
        </div>

        <motion.div
          className="flex flex-col md:flex-row my-8 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start justify-center"
          >
            <div className={`${lora.className} text-7xl`}>
              <Counter value={18} />+
            </div>
            <div
              className={`${gothic_A1.className} font-[100] text-base text-center max-w-3xl mx-auto`}
            >
              Years of track record
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start justify-center"
          >
            <div className={`${lora.className} text-7xl`}>
              <Counter value={200} />+
            </div>
            <div
              className={`${gothic_A1.className} font-[100] text-base text-center max-w-3xl mx-auto`}
            >
              buildings
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start justify-center"
          >
            <div className={`${lora.className} text-7xl`}>
              <Counter value={2500} />+
            </div>
            <div
              className={`${gothic_A1.className} font-[100] text-base text-center max-w-3xl mx-auto`}
            >
              Units
            </div>
          </motion.div>
        </motion.div>

        {/* Company Bio Section */}
        <div className="my-16 px-6">
          <div
            className={`${gothic_A1.className} text-justify text-black text-base leading-relaxed max-w-3xl mx-auto`}
          >
            For nearly two decades, Shamas and Hammad, two brothers with a
            shared vision and a hands-on work ethic, have been leading the firm
            as a trusted general contractor throughout New York City. With 18+
            years of experience, we specialize in occupied rehabilitations,
            full-gut renovations, masonry, roofing, and ground-up construction,
            delivering high-quality results across some of the city’s most
            challenging and tightly regulated environments.
          </div>

          <div className="border-t border-gray-600 w-16 mx-auto my-6"></div>

          <div
            className={`${gothic_A1.className} text-black text-base text-justify leading-relaxed max-w-3xl mx-auto`}
          >
            Our deep understanding of affordable housing and public-sector
            construction sets us apart. We are proud to be recognized as a
            respected leader within the industry, with extensive experience
            working with HUD, UHAB, HPD, and other affiliated programs. Our team
            is skilled at navigating complex compliance requirements,
            coordinating with stakeholders, and ensuring that projects remain
            efficient, safe, and community-focused—especially in occupied
            buildings where sensitivity and coordination are key.
          </div>

          <div className="border-t border-gray-600 w-16 mx-auto my-6"></div>

          <div
            className={`${gothic_A1.className} text-black text-base text-justify leading-relaxed max-w-3xl mx-auto`}
          >
            At the core of our work is a commitment to sustainability,
            innovation, and precision. By integrating advanced engineering
            solutions, value engineering, and cutting-edge construction
            technology, we consistently deliver projects on time and within
            budget while proactively responding to NYC’s evolving landscape of
            climate mandates and energy-efficiency goals. Our portfolio spans
            mixed-use developments, affordable housing, and energy-efficient
            residential projects, resulting in a strong track record of
            performance, reliability, and lasting value for property owners,
            partners, and investors
          </div>

          <div className="border-t border-gray-600 w-16 mx-auto my-6"></div>

          <div
            className={`${gothic_A1.className} text-black font-bold text-base text-justify leading-relaxed max-w-3xl mx-auto`}
          >
            Driven by integrity, craftsmanship, and family leadership, we
            continue to build spaces that serve communities, support long-term
            sustainability, and reflect the highest standards of New York City
            construction.
          </div>
        </div>

        <a
          href="/SCC Portfolio_R3.pdf"
          download
          className={`bg-originalBlue hover:bg-navbarFocusBlue text-white ${gothic_A1.className} font-bold p-4 transition duration-200 tracking-tighter block text-center`}
        >
          DOWNLOAD THE SHAMAS BROCHURE
        </a>
      </section>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-originalBlue hover:bg-navbarFocusBlue text-white shadow-lg focus:outline-none transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
