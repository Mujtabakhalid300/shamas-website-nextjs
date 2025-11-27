"use client";

import React, { use } from "react";
import Slider from "react-slick";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- MOCK DATA ---
const dummyProjects = [
  {
    // This is the data that will ALWAYS show, no matter the URL
    slug: "1010-park-avenue",
    category: "Upper East Side",
    title: "1010 Park Avenue",
    subtitle: "1010 PARK AVENUE, NEW YORK",
    meta: [
      "COMPLETION DATE: 2018",
      "ARCHITECT: BEYER BLINDER BELLE",
      "INTERIORS: DAVID COLLINS STUDIO",
    ],
    description:
      "Ideally located at the center of the Upper East Side's Gold Coast, 1010 Park Avenue is one of New York's most distinguished addresses. Award-winning architects Beyer Blinder Belle have capitalized on their ample experience working with iconic buildings to design an elegant hand-cut Indiana limestone and Manhattan schist facade that is both striking and perfectly contextual to the Park Avenue Historic Landmark District.",
    images: [
      "https://res.cloudinary.com/dy4peuqxj/image/upload/v1764000737/DJI_0089_vioo4c.jpg",
      "https://res.cloudinary.com/dy4peuqxj/image/upload/v1764000736/DJI_0034_fyq0c3.jpg",
      "https://res.cloudinary.com/dy4peuqxj/image/upload/v1764000738/DSC02208copy_ox6wib.jpg",
    ],
  },
];

// --- CUSTOM ARROWS ---
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className="absolute top-1/2 -right-12 md:-right-16 z-20 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-black transition-colors bg-transparent border-none outline-none p-2"
  >
    <MdArrowForwardIos size={40} strokeWidth={1} className="font-thin" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className="absolute top-1/2 -left-12 md:-left-16 z-20 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-black transition-colors bg-transparent border-none outline-none p-2"
  >
    <MdArrowBackIosNew size={40} strokeWidth={1} className="font-thin" />
  </button>
);

export default function PortfolioPage({ params }) {
  // We still unwrap params to satisfy Next.js, but we won't use 'slug' for logic
  const unwrappedParams = use(params);

  // LOGIC CHANGE: Always grab the first project, regardless of the URL slug
  const project = dummyProjects[0];

  if (!project) return <div>Not Found</div>;

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
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center">
        {/* --- LEFT COLUMN --- */}
        <div className="flex flex-col items-center text-center mx-auto max-w-lg md:col-span-3 md:-mt-8">
          <span className="font-serif text-lg text-black mb-2">
            {project.category}
          </span>

          <div className="w-16 h-[1px] bg-black mb-8"></div>

          <h1 className="font-serif text-5xl lg:text-6xl text-black mb-4 leading-tight">
            {project.title}
          </h1>

          <h2 className="uppercase text-[11px] tracking-[0.2em] font-bold text-gray-700 mb-6">
            {project.subtitle}
          </h2>

          <div className="flex flex-col gap-1 mb-8">
            {project.meta.map((item, i) => (
              <span
                key={i}
                className="uppercase text-[10px] tracking-[0.15em] text-gray-500 font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-sm leading-7 font-light">
            {project.description}
          </p>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="w-full relative px-8 md:px-0 md:col-span-2 md:max-w-[325px] mx-auto">
          <Slider {...settings}>
            {project.images.map((img, idx) => (
              <div key={idx} className="outline-none">
                <div className="relative aspect-[4/5] w-full bg-gray-100">
                  <img
                    src={img}
                    alt="Project view"
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
