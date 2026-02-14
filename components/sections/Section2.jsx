"use client";

import { RiArrowRightLongFill } from '@remixicon/react'

const Section2 = () => {
    return (
        <div className='bg-[#e5e0da] flex flex-col md:flex-row min-h-screen md:h-[95vh]'>
            <div className="left w-full md:w-[50%] relative flex flex-col justify-center items-center">
                <div className='flex flex-col items-start justify-center gap-4 sm:gap-5 md:gap-7 p-6 sm:p-10 md:p-12 lg:p-20'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Live a fulfilling life.</h2>
                    <p className='text-base sm:text-lg font-semibold'>
                        Life can be challenging—especially when you're trying to balance your personal and professional life.
                    </p>
                    <p className='text-base sm:text-lg font-semibold'>
                        It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
                    </p>
                </div>
                <button className='relative md:absolute bottom-0 flex items-center justify-center text-sm sm:text-base font-bold border-t border-[#223614] w-full py-4 sm:py-5 hover:bg-[#223614] hover:text-white transition duration-700 ease-in-out cursor-pointer gap-2'>
                    GET IN TOUCH <RiArrowRightLongFill className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
            <div className="right w-full md:w-[50%] h-[60vh] md:h-full">
                <img 
                    className='h-full w-full object-cover' 
                    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=1500w" 
                    alt="hero-image" 
                />
            </div>
        </div>
    )
}

export default Section2