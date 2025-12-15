"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROPERTIES } from "@/data/projectsData";

// --- 1. CONFIGURATION ---
const MAP_WIDTH = 598;
const MAP_HEIGHT = 767;

// ✅ NEW: Centralized Map Image Configuration
// Simply add new filters here as "Key": "Image Path"
const MAP_IMAGES = {
  All: "/map.jpeg", // Default map
  Manhattan: "/manhattan_map.jpg",
  Bronx: "/bronx_map.jpg", // Example: easy to add in future
  Queens: "/queens_map.jpg",
  // "Brooklyn": "/brooklyn_map.jpg",
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

// --- 2. HELPER FUNCTIONS ---
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

// --- 3. MAIN COMPONENT ---
export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeRegion, setActiveRegion] = useState(null);

  // ✅ SCALABLE LOGIC:
  // Look up the image for the current filter.
  // If no specific image exists for that filter, fallback to "All" (the default map).
  const mapImageSrc = MAP_IMAGES[activeFilter] || MAP_IMAGES["All"];

  // Reset active region when filter changes
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
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 p-6 md:p-10">
                {filteredProperties.map((property) => (
                  <Link
                    href={`/portfolio/${property.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}`}
                    key={property.id}
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
                ))}

                {filteredProperties.length === 0 && (
                  <div className="col-span-full py-20 text-center text-gray-400 font-gothic">
                    No properties found in **{activeFilter}**
                  </div>
                )}
              </div>
            </div>

            {/* --- RIGHT SIDE: INTERACTIVE MAP --- */}
            <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center p-10 bg-white">
              <div className="relative w-full max-h-full aspect-[598/767] overflow-hidden rounded-lg bg-gray-50 shadow-lg group">
                {/* 1. Base Image - Dynamic Src from MAP_IMAGES */}
                <Image
                  key={mapImageSrc}
                  src={mapImageSrc}
                  alt={`${activeFilter} Map`}
                  fill
                  className="object-cover transition-opacity duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />

                {/* 2. SVG Overlay */}
                <svg
                  viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
                  className="absolute inset-0 w-full h-full"
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
                {activeRegion && (
                  <div
                    className="absolute z-50 pointer-events-none flex flex-col items-center justify-center"
                    style={{
                      left: `${(activeRegion.x / MAP_WIDTH) * 100}%`,
                      top: `${(activeRegion.y / MAP_HEIGHT) * 100}%`,
                      transform: "translate(-50%, -100%) translateY(-12px)",
                    }}
                  >
                    <div className="bg-[#1a2533] text-white px-3 py-2 rounded shadow-xl flex flex-col items-center min-w-[120px] animate-in fade-in zoom-in duration-200">
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
