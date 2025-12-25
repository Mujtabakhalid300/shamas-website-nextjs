"use client";

import React, { use } from "react"; // Combined imports
import Slider from "react-slick";
import { motion } from "framer-motion"; // Import Framer Motion
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { PROPERTIES } from "@/data/projectsData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between Text and Image loading
      delayChildren: 0.1,
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

// Convert title -> slug format
const createSlug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// --- CUSTOM ARROWS ---
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className="absolute top-1/2 -right-12 md:-right-16 z-20 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-black transition-colors bg-transparent border-none outline-none p-2"
  >
    <MdArrowForwardIos size={40} className="font-thin" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className="absolute top-1/2 -left-12 md:-left-16 z-20 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-black transition-colors bg-transparent border-none outline-none p-2"
  >
    <MdArrowBackIosNew size={40} className="font-thin" />
  </button>
);

export default function PortfolioPage({ params }) {
  const { slug } = use(params);

  // Find matching project by slug (based on title)
  const project = PROPERTIES.find((p) => createSlug(p.title) === slug);

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 font-serif">
        Project Not Found
      </div>
    );

  // Create full image array (main + additional)
  const projectImages = [project.image, ...(project.images || [])];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
  };

  return (
    <motion.main
      className="min-h-screen w-full flex items-center justify-center bg-white lg:px-12 lg:pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-start">
        {/* --- TEXT DETAILS (Animates First) --- */}
        <motion.div
          className="flex flex-col items-center text-center mx-auto max-w-lg md:col-span-3"
          variants={itemVariants}
        >
          <h1 className="font-serif text-5xl lg:text-6xl text-black mb-4 leading-tight mt-0">
            {project.title}
          </h1>

          <p className="text-gray-600 text-sm leading-7 font-light">
            {project.description ||
              "Detailed project description is currently not available."}
          </p>
        </motion.div>

        {/* --- IMAGE CAROUSEL (Animates Second) --- */}
        <motion.div
          className="w-full relative px-8 md:px-0 md:col-span-2 md:max-w-[325px] mx-auto"
          variants={itemVariants}
        >
          <Slider {...settings}>
            {projectImages.map((img, idx) => (
              <div key={idx} className="outline-none">
                <div className="relative aspect-[4/5] w-full bg-gray-100">
                  <img
                    src={img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </motion.main>
  );
}
