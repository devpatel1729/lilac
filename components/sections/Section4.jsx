"use client";

import { RiArrowRightLongFill } from "@remixicon/react"

const Section4 = () => {
    return (
        <div className='bg-[#c2bfcb] flex flex-col-reverse md:flex-row min-h-screen md:h-[110vh]'>
            <div className="right w-full md:w-[50%] h-[60vh] md:h-full">
                <img 
                    className='h-full w-full object-cover' 
                    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=1500w" 
                    alt="hero-image" 
                />
            </div>
            <div className="left w-full md:w-[50%] relative flex flex-col justify-center items-center">
                <div className='flex flex-col items-start justify-center gap-4 sm:gap-5 md:gap-7 p-6 sm:p-8 md:p-10 lg:p-12 leading-relaxed'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                        You don't have to do this all alone.
                    </h2>
                    <p className='text-base sm:text-lg font-semibold'>
                        If you are facing any of these, there's hope:
                    </p>
                    <ul className="list-disc pl-6 sm:pl-8 md:pl-10 space-y-2 sm:space-y-3 text-sm sm:text-base font-semibold">
                        <li>Persistent feelings of sadness or hopelessness</li>
                        <li>Trouble focusing or making decisions</li>
                        <li>Difficulty maintaining relationships</li>
                        <li>Feeling constantly exhausted or unmotivated</li>
                        <li>A pervasive sense of being overwhelmed</li>
                    </ul>
                    <p className='text-base sm:text-lg font-semibold'>
                        With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                    </p>
                </div>
                <button className='text-xs sm:text-sm relative md:absolute bottom-0 flex items-center justify-center font-bold border-t border-[#223614] w-full py-4 sm:py-5 hover:bg-[#223614] hover:text-white transition duration-700 ease-in-out cursor-pointer gap-2'>
                    WORK WITH ME <RiArrowRightLongFill className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
        </div>
    )
}

export default Section4