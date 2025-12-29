"use client";
import { ChevronDown } from "lucide-react";

export default function ScrollButton({ sectionName, bottom }) {
  const handleScroll = () => {
    const nextSection = document.getElementById(sectionName);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button
        onClick={handleScroll}
        className={`absolute -bottom-[0.25rem]   text-white bg-opacity-50 `}
      >
        <ChevronDown size={100} strokeWidth={0.75} />
      </button>
    </>
  );
}
