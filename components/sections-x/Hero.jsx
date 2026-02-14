"use client";

import { RiArrowRightLongFill } from '@remixicon/react'

const Hero = () => {
  return (
    <div className='flex items-center justify-between bg-[#fbf6f1] min-h-[140vh]'>
      <div className="left w-[45%] mt-[8%] flex items-center justify-center">
        <img className='h-[56vw] rounded-t-full' src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=1500w" alt="hero" />
      </div>
      <div className="right w-[55%] flex flex-col items-center justify-center gap-5">
        <p className='text-[11vh] leading-[110%] font-extrabold text-center w-[60%]'>Live your life in full bloom</p>
        <p className='text-base font-bold'>Therapy for Adults in Minneapolis, MN.</p>
        <button className='flex text-base font-bold border py-3 px-8 hover:bg-[#223614] hover:text-white cursor-pointer transition duration-700 ease-in-out'>CONNECT WITH ME <RiArrowRightLongFill /></button>
      </div>
    </div>
  )
}

export default Hero