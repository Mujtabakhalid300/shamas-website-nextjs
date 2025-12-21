"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Mitchell",
    title: "Senior Program Manager",
    company: "Microsoft",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Shamas Contracting delivers enterprise-level execution with absolute precision. Their ability to manage complex construction timelines is outstanding.",
  },
  {
    name: "Daniel Roberts",
    title: "Director of Infrastructure",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The professionalism and transparency we experienced were exceptional. Projects were delivered faster than expected without compromising quality.",
  },
  {
    name: "Priya Nair",
    title: "VP Real Estate Development",
    company: "Oracle",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Shamas Contracting brings a rare mix of strategic planning and on-ground excellence. Truly a long-term partner for large-scale developments.",
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 tracking-tight">
          Trusted by Industry Leaders
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Avatar */}
              <Image
                src={testimonials[index].image}
                alt={testimonials[index].name}
                width={80}
                height={80}
                className="rounded-full object-cover border border-white/20"
              />

              {/* Quote */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                “{testimonials[index].quote}”
              </p>

              {/* Name & Title */}
              <div className="text-center">
                <p className="text-white font-semibold text-lg">
                  {testimonials[index].name}
                </p>
                <p className="text-sm text-gray-400">
                  {testimonials[index].title} ·{" "}
                  <span className="text-blue-400">
                    {testimonials[index].company}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index ? "bg-blue-500 w-6" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
