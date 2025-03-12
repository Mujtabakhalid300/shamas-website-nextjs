"use client";
import { Roboto } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "./components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

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
          <div className="flex justify-center items-center h-screen bg-black text-white">
            Loading...
          </div>
        ) : (
          <>
            {/* Sticky Navbar */}
            <div className="sticky top-0 left-0 w-full bg-originalBlue text-white   z-50">
              <div className="hidden md:flex bg-originalBlue text-white text-center border-b-[0.5px] border-opacity-50 border-white items-center justify-center py-3">
                <img className="h-8" src="/navbarLogo.png" />
              </div>
              <div className="flex justify-between md:justify-around items-center ">
                <img className="md:hidden h-8" src="/navbarLogo.png" />

                {/* Desktop Menu (Hidden on small screens) */}
                <div className="hidden md:flex  h-full">
                  <Link
                    href="/"
                    className={`hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue w-full h-full p-3 ${roboto.className} font-normal`}
                  >
                    OVERVIEW
                  </Link>
                  <Link
                    href="/portfolio"
                    className={`hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue w-full h-full p-3 ${roboto.className} font-normal`}
                  >
                    PORTFOLIO
                  </Link>
                  <Link
                    href="#"
                    className={`hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue w-full h-full p-3 ${roboto.className} font-normal`}
                  >
                    AVAILABILITY
                  </Link>
                  <Link
                    href="#"
                    className={`hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue w-full h-full p-3 ${roboto.className} font-normal`}
                  >
                    MANAGEMENT
                  </Link>
                  <Link
                    href="#"
                    className={`hover:bg-navbarFocusBlue focus:bg-navbarFocusBlue w-full h-full p-3 ${roboto.className} font-normal`}
                  >
                    CONTACT
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden focus:outline-none"
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
              </div>

              {/* Mobile Menu (Dropdown) */}
              <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                  menuOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
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
            </div>

            {/* Content (No Margin Needed) */}
            <div>{children}</div>
          </>
        )}
        <Footer />
      </body>
    </html>
  );
}
