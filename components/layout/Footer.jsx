"use client";

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#fbf6f1] text-[#223622]">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20 grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

        {/* LEFT */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold">Lilac Template</h2>

          <div className="text-xs sm:text-sm space-y-1">
            <p>123 Example Road</p>
            <p>Minneapolis, MN</p>
          </div>

          <div className="text-xs sm:text-sm space-y-1 underline">
            <p className="cursor-pointer hover:opacity-70 transition">email@example.com</p>
            <p className="cursor-pointer hover:opacity-70 transition">(555) 555-5555</p>
          </div>
        </div>

        {/* HOURS */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold">Hours</h3>
          <div className="text-xs sm:text-sm space-y-1">
            <p>Monday — Friday</p>
            <p>10am — 6pm</p>
          </div>
        </div>

        {/* FIND */}
        <div className="space-y-3 sm:space-y-4 sm:text-left md:text-right">
          <h3 className="text-lg sm:text-xl font-semibold">Find</h3>
          <div className="text-xs sm:text-sm space-y-1 underline">
            <p className="cursor-pointer hover:opacity-70 transition">Home</p>
            <p className="cursor-pointer hover:opacity-70 transition">Contact</p>
            <p className="cursor-pointer hover:opacity-70 transition">Blog</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#e5e0da] text-center px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-9 md:py-10 space-y-4 sm:space-y-5 md:space-y-6">

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm underline">
          <p className="cursor-pointer hover:opacity-70 transition">Privacy & Cookies Policy</p>
          <p className="cursor-pointer hover:opacity-70 transition">Good Faith Estimate</p>
          <p className="cursor-pointer hover:opacity-70 transition">Website Terms & Conditions</p>
          <p className="cursor-pointer hover:opacity-70 transition">Disclaimer</p>
        </div>

        <p className="text-xs sm:text-sm">
          Website Template Credits: Go Bloom Creative
        </p>

        <p className="text-xs sm:text-sm">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>

      </div>
    </footer>
  )
}

export default Footer