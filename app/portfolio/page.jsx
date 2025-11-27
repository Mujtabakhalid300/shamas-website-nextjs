"use client";
import React, { useState } from "react";
import Link from "next/link"; // IMPORTED LINK
import Image from "next/image"; // IMPORTED NEXT/IMAGE
import { PROPERTIES } from "@/data/projectsData";

// Function to generate the optimized thumbnail URL using Cloudinary transformations
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

// --- FILTERS ARRAY ---
const FILTERS = ["All", "Bronx", "Manhattan", "Queens", "S.I", "Brooklyn"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProperties = PROPERTIES.filter((prop) => {
    if (activeFilter === "All") return true;
    return prop.borough === activeFilter;
  });

  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-slate-900 font-gothic">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@200;400;700&family=Libre+Baskerville&family=Lora&family=Playfair+Display:wght@400;700&display=swap');
        .font-gothic { font-family: 'Gothic A1', sans-serif; }
        .font-libre { font-family: 'Libre Baskerville', serif; }
        .font-lora { font-family: 'Lora', serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
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
          <div className="ml-auto hidden md:block text-xs font-bold uppercase border-b border-black cursor-pointer">
            View All
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="w-full relative">
        <div className="w-full bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8 p-6 md:p-10">
            {filteredProperties.map((property) => (
              /* CHANGE: Wrapped in <Link>. 
                 Using property.slug if available, otherwise falling back to property.id 
              */
              <Link
                href={`/portfolio/${property.slug || property.id}`}
                key={property.id}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 mb-3">
                  {/* CHANGE: Replaced <img> with <Image /> using 'fill' */}
                  <Image
                    src={getThumbnailUrl(property.image)}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay Badge */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 text-black text-[10px] font-bold uppercase tracking-widest py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-gothic z-10">
                    {property.borough}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-sm md:text-base font-medium text-gray-900 tracking-wide uppercase group-hover:text-blue-900 transition-colors font-libre">
                  {property.title}
                </h3>
              </Link>
            ))}

            {/* Empty State */}
            {filteredProperties.length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-400 font-gothic">
                No properties found in **{activeFilter}**
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
