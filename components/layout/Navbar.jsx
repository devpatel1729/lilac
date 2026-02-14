"use client";

import { useEffect, useState } from "react";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 w-full z-50 bg-[#fbf6f1] px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4 flex justify-between items-center transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">Lilac Template</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 lg:gap-9 text-base md:text-lg lg:text-xl font-medium">
        <h3 className="cursor-pointer hover:opacity-70 transition">Blog</h3>
        <h3 className="cursor-pointer hover:opacity-70 transition">Contact</h3>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <RiCloseLine size={24} />
        ) : (
          <RiMenuLine size={24} />
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#fbf6f1] md:hidden border-t border-gray-200 shadow-lg">
          <div className="flex flex-col py-4 px-6 gap-4 text-lg font-medium">
            <h3 
              className="cursor-pointer hover:opacity-70 transition py-2 border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </h3>
            <h3 
              className="cursor-pointer hover:opacity-70 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}