"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import { PROPERTIES } from "@/data/projectsData";

// --- 1. CONFIGURATION ---
const MAP_WIDTH = 598;
const MAP_HEIGHT = 767;

const MAP_IMAGES = {
  All: "/map.jpeg",
  Manhattan: "/manhattan_map.jpg",
  Bronx: "/bronx_map.jpg",
  Queens: "/queens_map.jpg",
};

const MAP_REGIONS = [
  {
    id: "box-1",
    label: "Warehouse District",
    subLabel: "Available Now",
    path: "M 207 406 H 207 V 367 H 255 H 255 V 407",
    x: 231,
    y: 367,
  },
];

// --- 2. ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each project card
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const mapVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// --- 3. HELPER FUNCTIONS ---
const getThumbnailUrl = (originalUrl) => {
  if (!originalUrl.includes("cloudinary.com")) {
    return originalUrl.includes("?")
      ? `${originalUrl}&w=300&h=375&fit=crop`
      : `${originalUrl}?w=300&h=375&fit=crop`;
  }
  const parts = originalUrl.split("/upload/");
  const transformation = "f_auto,q_auto,dpr_auto,c_fill,w_300,h_375/";
  return parts[0] + "/upload/" + transformation + parts[1];
};

const FILTERS = ["All", "Bronx", "Manhattan", "Queens", "S.I", "Brooklyn"];

// --- 4. MAIN COMPONENT ---
export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeRegion, setActiveRegion] = useState(null);

  const mapImageSrc = MAP_IMAGES[activeFilter] || MAP_IMAGES["All"];

  useEffect(() => {
    setActiveRegion(null);
  }, [activeFilter]);

  const filteredProperties = PROPERTIES.filter((prop) => {
    if (activeFilter === "All") return true;
    return prop.borough === activeFilter;
  });

  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-slate-900 font-gothic">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@200;400;700&family=Libre+Baskerville&family=Lora&family=Playfair+Display:wght@400;700&display=swap');
        .font-gothic { font-family: 'Gothic A1', sans-serif; }
      `}</style>

      {/* --- FILTER BAR --- */}
      <div className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center px-6 py-3 bg-white text-[#1a2533] border-b border-gray-200">
          <span className="text-xs font-bold uppercase mr-6 mb-2 md:mb-0 tracking-wider font-gothic">
            Filter By
          </span>
          <div className="flex flex-wrap gap-4 md:gap-6 text-[11px] md:text-xs font-semibold tracking-wide uppercase text-slate-500 font-gothic">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`transition-colors duration-200 hover:text-[#1a2533] ${
                  activeFilter === filter
                    ? "text-[#1a2533] font-bold border-b-2 border-[#1a2533]"
                    : ""
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <button
            onClick={() => setActiveFilter("All")}
            className="ml-auto hidden md:block text-xs font-bold uppercase border-b border-black cursor-pointer hover:text-[#1a2533] transition-colors"
          >
            View All
          </button>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="w-full relative">
        <div className="w-full bg-white">
          <div className="flex flex-col md:flex-row min-h-screen w-full">
            {/* LEFT SIDE: Property List */}
            <div className="w-full md:w-1/2 bg-white">
              {/* We use key={activeFilter} here. 
                When filter changes, React unmounts and remounts this list,
                triggering the staggered animation from scratch.
              */}
              <motion.div
                key={activeFilter}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 p-6 md:p-10"
              >
                {filteredProperties.map((property) => (
                  <motion.div key={property.id} variants={cardVariants}>
                    <Link
                      href={`/portfolio/${property.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")}`}
                      className="group cursor-pointer flex flex-col"
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 mb-3">
                        <Image
                          src={getThumbnailUrl(property.image)}
                          alt={property.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-white/90 text-black text-[10px] font-bold uppercase tracking-widest py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-gothic z-10">
                          Completed
                        </div>
                      </div>
                      <div className="text-black text-[10px] font-bold uppercase tracking-widest py-2 text-center font-gothic">
                        {property.title}
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {filteredProperties.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full py-20 text-center text-gray-400 font-gothic"
                  >
                    No properties found in **{activeFilter}**
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* --- RIGHT SIDE: INTERACTIVE MAP --- */}
            <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center p-10 bg-white">
              {/* Animate the map container slightly when mounting */}
              <motion.div
                className="relative w-full max-h-full aspect-[598/767] overflow-hidden rounded-lg bg-gray-50 shadow-lg group"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* 1. Base Image - Animate switch with AnimatePresence */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mapImageSrc} // Unique key triggers animation on change
                    variants={mapVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={mapImageSrc}
                      alt={`${activeFilter} Map`}
                      fill
                      className=""
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-black/5 pointer-events-none" />

                {/* 2. SVG Overlay */}
                <svg
                  viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
                  className="absolute inset-0 w-full h-full z-10" // z-10 to sit above image
                  preserveAspectRatio="none"
                >
                  {MAP_REGIONS.map((region) => (
                    <path
                      key={region.id}
                      d={region.path}
                      vectorEffect="non-scaling-stroke"
                      className="cursor-pointer fill-transparent stroke-transparent"
                      onMouseEnter={() => setActiveRegion(region)}
                      onMouseLeave={() => setActiveRegion(null)}
                    />
                  ))}
                </svg>

                {/* 3. DYNAMIC TOOLTIP */}
                <AnimatePresence>
                  {activeRegion && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 pointer-events-none flex flex-col items-center justify-center"
                      style={{
                        left: `${(activeRegion.x / MAP_WIDTH) * 100}%`,
                        top: `${(activeRegion.y / MAP_HEIGHT) * 100}%`,
                        transform: "translate(-50%, -100%) translateY(-12px)",
                      }}
                    >
                      <div className="bg-[#1a2533] text-white px-3 py-2 rounded shadow-xl flex flex-col items-center min-w-[120px]">
                        <span className="text-[10px] font-bold uppercase tracking-wider font-gothic">
                          {activeRegion.label}
                        </span>
                        {activeRegion.subLabel && (
                          <span className="text-[9px] text-gray-300 mt-0.5">
                            {activeRegion.subLabel}
                          </span>
                        )}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a2533] rotate-45"></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
