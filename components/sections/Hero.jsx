"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { RiArrowRightLongFill } from '@remixicon/react'

const Hero = () => {
  const hero = useRef();

  useGSAP(() => {
    gsap.from(".left", {
      y: 30,
      opacity: 0,
      duration: 0.5
    });
    gsap.from(".right", {
      y: 30,
      opacity: 0,
      duration: 0.5
    });

  }, { scope: hero });

  return (
    <div ref={hero} className='flex flex-col-reverse md:flex-row items-center justify-center sm:justify-between bg-[#f7f5f0] min-h-[90vh] md:min-h-[120vh] px-4 sm:px-6 md:px-8 lg:px-12 pt-20 md:pt-0 md:pb-10'>
      <div className="left w-full md:w-[45%] mt-5 md:mt-[8%] flex items-center justify-center order-2 md:order-1">
        <img
          className='h-[70vw] sm:h-[60vw] md:h-[56vw] lg:h-[50vw] rounded-t-full w-auto object-cover object-top'
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/santa-monica-pier-sunset-retro-vertical-photo-paul-velgos.jpg"
          alt="A calm beach with pier at sunset"
        />
      </div>
      <div className="right w-full md:w-[55%] flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 px-4 py-8 md:py-0 order-1 md:order-2">
        <p className='text-2xl sm:text-4xl md:text-5xl lg:text-[7vh] leading-[110%] font-extrabold text-center w-full sm:w-[85%] md:w-[70%] lg:w-[60%]'>
          Clinical Psychologist for High-Achievers & Professionals
        </p>
        <p className='text-sm sm:text-base font-bold text-center'>
          Therapy for Adults in Santa Monica.
        </p>
        <button className='flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold border border-[#074461] py-2 sm:py-3 px-6 sm:px-8 hover:bg-[#074461] hover:text-white cursor-pointer transition duration-700 ease-in-out mt-2'>
          CONNECT WITH ME <RiArrowRightLongFill className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  )
}

export default Hero