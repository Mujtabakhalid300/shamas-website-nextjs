"use client";

export default function ScrollButton({sectionName,bottom}) {
  const handleScroll = () => {
    const nextSection = document.getElementById(sectionName);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className={`absolute bottom-12   text-white bg-opacity-50 p-3 rounded-full border border-white`}
    >
      ↓ Scroll Down
    </button>
  );
}
