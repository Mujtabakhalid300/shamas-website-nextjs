"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import Link from "next/link";

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
  const [menuOpen, setMenuOpen] = useState(false); // State for the hamburger menu
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for everything to load
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
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
        {!isLoaded ? (
          // Loading Screen
          <div className="flex justify-center items-center h-screen bg-black text-white">
            Loading...
          </div>
        ) : (
          <>
            {/* First Fixed Header (Hidden on small screens) */}
            {showFirstHeader && (
              <div className="text-center fixed top-0 left-0 w-full bg-originalBlue text-white p-4 border-b-2 border-white">
                SHAMAS
              </div>
            )}

            {/* Second Fixed Header (Moves to Top When First Header is Hidden) */}
            <div
              className={`flex justify-between md:justify-around fixed left-0 w-full bg-originalBlue text-white p-4 transition-all border-b-2 border-white ${
                showFirstHeader ? "top-14" : "top-0"
              }`}
            >
              {!showFirstHeader ? (
                <>
                  <div>SHAMAS</div>

                  {/* Hamburger Menu Button */}
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="focus:outline-none"
                  >
                    {menuOpen ? (
                      // Close Icon (X)
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    ) : (
                      // Hamburger Icon (Three Lines)
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="4" y1="6" x2="20" y2="6"></line>
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="18" x2="20" y2="18"></line>
                      </svg>
                    )}
                  </button>
                </>
              ) : (
                <>
                  <Link href="#">OVERVIEW</Link>
                  <Link href="#">PORTFOLIO</Link>
                  <Link href="#">AVAILABILITY</Link>
                  <Link href="#">MANAGEMENT</Link>
                  <Link href="#">CONTACT</Link>
                </>
              )}
            </div>

            {/* Mobile Menu - Slides Down When Hamburger is Clicked */}
            {!showFirstHeader && (
              <div
                className={`absolute left-0 w-full bg-originalBlue text-white transition-all duration-300 ease-in-out ${
                  menuOpen
                    ? "top-14 opacity-100 py-4"
                    : "top-14 opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <ul className="flex flex-col items-start gap-4">
                  <Link
                    href="/"
                    className="pl-4 w-full focus:bg-[#193658] transition-all duration-300"
                  >
                    OVERVIEW
                  </Link>
                  <Link
                    href="/portfolio"
                    className="pl-4 w-full focus:bg-[#193658] transition-all duration-300"
                  >
                    PORTFOLIO
                  </Link>
                  <Link
                    href="/availability"
                    className="pl-4 w-full focus:bg-[#193658] transition-all duration-300"
                  >
                    AVAILABILITY
                  </Link>
                  <Link
                    href="/management"
                    className="pl-4 w-full focus:bg-[#193658] transition-all duration-300"
                  >
                    MANAGEMENT
                  </Link>
                  <Link
                    href="/contact"
                    className="pl-4 w-full focus:bg-[#193658] transition-all duration-300"
                  >
                    CONTACT
                  </Link>
                </ul>
              </div>
            )}

            {/* Content Below the Headers */}
            <div className={showFirstHeader ? "mt-28" : "mt-16"}>{children}</div>
          </>
        )}
      </body>
    </html>
  );
}
