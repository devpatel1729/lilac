"use client";

import { RiArrowRightLongFill } from "@remixicon/react"

const Started = () => {
    return (
        <div className="bg-[#7e7b46] text-white py-16 sm:py-20 md:py-[20vh] flex items-center justify-center flex-col gap-4 sm:gap-5 md:gap-6 px-6 sm:px-8 md:px-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                Get started today.
            </h1>
            <div className="flex items-center justify-center flex-col w-full sm:w-[80%] md:w-[70%] lg:w-[50%] text-center">
                <p className="text-sm sm:text-base mb-2">
                    Ready to take the first step towards a happier, healthier you?
                </p>
                <p className="text-sm sm:text-base">
                    Contact me to book your first session. I look forward to starting this therapeutic journey with you.
                </p>
            </div>
            <button className="mt-6 sm:mt-8 md:mt-10 flex items-center gap-2 border border-white py-2 px-6 sm:px-8 text-xs font-bold hover:bg-white hover:text-[#7e7b46] transition duration-700">
                GET IN TOUCH
                <RiArrowRightLongFill className="w-4 h-4" />
            </button>
        </div>
    )
}

export default Started