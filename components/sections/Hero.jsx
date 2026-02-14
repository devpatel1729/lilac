"use client";

import { RiArrowRightLongFill } from '@remixicon/react'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-[#fbf6f1] min-h-screen md:min-h-[140vh] px-4 sm:px-6 md:px-8 lg:px-12 pt-20 md:pt-0'>
      <div className="left w-full md:w-[45%] mt-8 md:mt-[8%] flex items-center justify-center order-2 md:order-1">
        <img 
          className='h-[70vw] sm:h-[60vw] md:h-[56vw] lg:h-[56vw] rounded-t-full w-auto' 
          src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=1500w" 
          alt="hero" 
        />
      </div>
      <div className="right w-full md:w-[55%] flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 px-4 py-8 md:py-0 order-1 md:order-2">
        <p className='text-4xl sm:text-6xl md:text-7xl lg:text-[11vh] leading-[110%] font-extrabold text-center w-full sm:w-[85%] md:w-[70%] lg:w-[60%]'>
          Live your life in full bloom
        </p>
        <p className='text-sm sm:text-base font-bold text-center'>
          Therapy for Adults in Minneapolis, MN.
        </p>
        <button className='flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold border border-[#223614] py-2 sm:py-3 px-6 sm:px-8 hover:bg-[#223614] hover:text-white cursor-pointer transition duration-700 ease-in-out mt-2'>
          CONNECT WITH ME <RiArrowRightLongFill className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  )
}

export default Hero