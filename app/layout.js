"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import Image from "next/image"; // Import Image component
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
          // --- UPDATED LOADING SCREEN START ---
          <div className="flex h-screen w-full items-center justify-center bg-black">
            <Image
              src="/navbarLogo.png" // Make sure this path is correct in your public folder
              alt="Logo"
              width={150}
              height={150}
              priority={true}
              className="animate-pulse" // Optional: Adds a subtle breathing effect
            />
          </div>
        ) : (
          // --- UPDATED LOADING SCREEN END ---
          <>
            <Navbar />
            <div>{children}</div>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
