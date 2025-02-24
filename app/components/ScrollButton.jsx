"use client";

export default function ScrollButton() {
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="absolute bottom-20 animate-bounce text-white bg-opacity-50 p-3 rounded-full border border-white"
    >
      ↓ Scroll Down
    </button>
  );
}
