"use client";

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#fbf6f1] text-[#223622]">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-3">

        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Lilac Template</h2>

          <div className="text-sm space-y-1">
            <p>123 Example Road</p>
            <p>Minneapolis, MN</p>
          </div>

          <div className="text-sm space-y-1 underline">
            <p>email@example.com</p>
            <p>(555) 555-5555</p>
          </div>
        </div>

        {/* HOURS */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Hours</h3>
          <div className="text-sm space-y-1">
            <p>Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>
        </div>

        {/* FIND */}
        <div className="space-y-4 md:text-right">
          <h3 className="text-xl font-semibold">Find</h3>
          <div className="text-sm space-y-1 underline">
            <p>Home</p>
            <p>Contact</p>
            <p>Blog</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#e5e0da] text-center px-6 py-10 space-y-6">

        <div className="flex flex-wrap justify-center gap-6 text-sm underline">
          <p>Privacy & Cookies Policy</p>
          <p>Good Faith Estimate</p>
          <p>Website Terms & Conditions</p>
          <p>Disclaimer</p>
        </div>

        <p className="text-sm">
          Website Template Credits: Go Bloom Creative
        </p>

        <p className="text-sm">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>

      </div>
    </footer>
  )
}

export default Footer