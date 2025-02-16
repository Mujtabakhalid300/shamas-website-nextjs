"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const [showFirstHeader, setShowFirstHeader] = useState(true);


  useEffect(() => {
    // Example: Hide first header on small screens (adjust logic as needed)
    const handleResize = () => {
      setShowFirstHeader(window.innerWidth >= 768); // Show only on md+ screens
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <html lang="en">
      <body className="antialiased">
        {/* First Fixed Header (Hidden on small screens) */}
        {showFirstHeader && (
          <div className="text-center fixed top-0 left-0 w-full bg-originalBlue text-white p-4  border-b-2 border-white">
            SHAMAS
          </div>
        )}

        {/* Second Fixed Header (Moves to Top When First Header is Hidden) */}
        <div
          className={`fixed left-0 w-full bg-originalBlue text-white p-4  transition-all border-b-2 border-white ${
            showFirstHeader ? "top-14" : "top-0"
          }`}
        >
          Second Header
        </div>
      

        {/* Content Below the Headers */}
        <div className={showFirstHeader ? "mt-28" : "mt-16"}>{children}</div>
      </body>
    </html>
  );
}
