"use client"; // Required for Framer Motion in Next.js App Router

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "General Contracting",
    description:
      "Full-service construction with complete oversight, quality control, and reliable execution.",
  },
  {
    title: "Construction Management",
    description:
      "Professional planning, supervision, and coordination across all project phases.",
  },
  {
    title: "Project Planning & Optimization",
    description:
      "Strategic planning and workflow optimization to streamline timelines, resources, and project execution.",
  },
  {
    title: "Real Estate Development",
    description:
      "Complete development lifecycle from concept to completion for multi-family and mixed-use projects.",
  },
  {
    title: "Gut Renovations",
    description:
      "Full interior demolition and rebuild, modernizing systems, finishes, and building efficiency.",
  },
  {
    title: "Exterior Renovations",
    description:
      "Façade restoration, masonry, roofing, windows, and structural enhancement.",
  },
  {
    title: "Occupied Renovations",
    description:
      "Specialized in completing complex renovations while tenants remain in place.",
  },
  {
    title: "Equity Partnership",
    description:
      "Collaborative investment opportunities for long-term growth and development.",
  },
  {
    title: "Zoning & Pre-Design",
    description:
      "Site analysis, zoning studies, compliance evaluation, and early-stage design planning.",
  },
];

// 1. Define the Container Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This creates the "one after another" effect
    },
  },
};

// 2. Define the Individual Item Variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Page = () => {
  return (
    <main className="scroll-smooth min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Services Grid with Motion */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Animations trigger when the user scrolls to this section
          viewport={{ once: true, amount: 0.2 }} // Only play once, when 20% of the grid is visible
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Page;
