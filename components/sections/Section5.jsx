"use client";

import { RiArrowRightLongFill } from "@remixicon/react"

const Section5 = () => {
    return (
        <div className='bg-[#e5e0da] flex flex-col md:flex-row min-h-screen md:h-[120vh] py-12 md:py-0'>
            <div className="left w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 lg:px-16 text-left max-w-xl mx-auto order-2 md:order-1 mt-8 md:mt-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left w-full">
                    Hi, I'm Lilac.
                </h2>

                <p className="text-sm sm:text-base md:text-md font-semibold mt-4 sm:mt-6">
                    I'm committed to providing a safe and supportive environment where we can
                    explore your thoughts, feelings, and behaviors. With empathy and guidance,
                    we'll work together to navigate the challenges life throws your way.
                </p>

                <button className="mt-8 sm:mt-12 md:mt-20 flex items-center gap-2 border border-[#223614] py-2 px-6 sm:px-8 text-xs font-bold hover:bg-[#223614] hover:text-white transition duration-700 self-start">
                    LET'S CHAT
                    <RiArrowRightLongFill className="w-4 h-4" />
                </button>
            </div>
            <div className="right w-full md:w-[50%] relative flex justify-center pt-8 sm:pt-12 md:pt-20 px-6 sm:px-8 md:px-0 order-1 md:order-2">

                {/* MAIN ARCH IMAGE */}
                <div className="w-full sm:w-[80%] md:w-auto overflow-hidden rounded-t-full">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=1500w"
                        alt="hero"
                        className="w-full h-[50vh] sm:h-[60vh] md:h-[80%] object-cover object-bottom"
                    />
                </div>

                {/* OVERLAPPING CIRCLE IMAGE */}
                <div className="absolute right-6 sm:right-8 md:right-10 bottom-4 sm:bottom-6 md:bottom-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=1500w"
                        alt="subhero"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </div>
    )
}

export default Section5