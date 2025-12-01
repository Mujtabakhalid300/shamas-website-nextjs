"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <html lang="en">
      <body className="antialiased">
        {!isLoaded ? (
          // Loading Screen
          <div className="flex justify-center items-center h-screen bg-white text-black">
            Loading...
          </div>
        ) : (
          <>
            {/* Sticky Navbar */}
            <Navbar />

            {/* Content (No Margin Needed) */}
            <div>{children}</div>

            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
