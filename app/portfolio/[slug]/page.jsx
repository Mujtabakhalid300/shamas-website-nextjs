"use client";

import React from "react";
import Slider from "react-slick";
import { use } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { PROPERTIES } from "@/data/projectsData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    return <div className="text-center py-20">Project Not Found</div>;

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
    <main className="min-h-screen w-full flex items-center justify-center bg-white lg:px-12 lg:pb-12">
      {/* Changed items-center to items-start here */}
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-start">
        {/* --- TEXT DETAILS --- */}
        {/* Removed md:-mt-8 since items-start handles the alignment now */}
        <div className="flex flex-col items-center text-center mx-auto max-w-lg md:col-span-3">
          {/* <span className="font-serif text-lg text-black mb-2">
            {project.category || "Property"}
          </span> */}

          {/* <div className="w-16 h-[1px] bg-black mb-8"></div> */}

          {/* Added mt-0 or a small mt-2 here if you need to optically align the font cap-height with the image */}
          <h1 className="font-serif text-5xl lg:text-6xl text-black mb-4 leading-tight mt-0">
            {project.title}
          </h1>

          <p className="text-gray-600 text-sm leading-7 font-light">
            {project.description ||
              "Detailed project description is currently not available."}
          </p>
        </div>

        {/* --- IMAGE CAROUSEL --- */}
        <div className="w-full relative px-8 md:px-0 md:col-span-2 md:max-w-[325px] mx-auto">
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
        </div>
      </div>
    </main>
  );
}
