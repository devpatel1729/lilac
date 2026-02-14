"use client";

import { RiArrowRightLongFill } from "@remixicon/react"

const Started = () => {
    return (
        <div className="bg-[#7e7b46] text-white py-[20vh] flex items-center justify-center flex-col gap-4">
            <h1 className="text-4xl font-bold">Get started today.</h1>
            <div className="flex items-center justify-center flex-col w-[50%]">
                <p>Ready to take the first step towards a happier, healthier you? </p>
                <p className="text-center">Contact me to book your first session. I look forward to starting this therapeutic journey with you.</p>
            </div>
            <button className="mt-10 flex items-center gap-2 border py-2 px-8 text-xs font-bold hover:bg-white hover:text-[#7e7b46] transition duration-700">
                GET IN TOUCH
                <RiArrowRightLongFill />
            </button>
        </div>
    )
}

export default Started