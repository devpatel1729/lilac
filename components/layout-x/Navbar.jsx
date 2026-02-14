"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      className={`fixed top-0 w-full z-50 bg-[#fbf6f1] px-12 py-4 flex justify-between transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <h1 className="font-bold text-3xl">Lilac Template</h1>

      <div className="flex gap-9 text-xl font-medium">
        <h3>Blog</h3>
        <h3>Contact</h3>
      </div>
    </div>
  );
}
