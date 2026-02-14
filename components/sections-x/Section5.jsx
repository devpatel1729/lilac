"use client";

import { RiArrowRightLongFill } from "@remixicon/react"

const Section5 = () => {
    return (
        <div className='bg-[#e5e0da] flex h-[120vh]'>
            <div className="left w-1/2 flex flex-col justify-center items-center m-auto text-left max-w-xl">
                <h2 className="text-5xl font-bold text-left w-full">
                    Hi, I’m Lilac.
                </h2>

                <p className="text-md font-semibold mt-6">
                    I'm committed to providing a safe and supportive environment where we can
                    explore your thoughts, feelings, and behaviors. With empathy and guidance,
                    we'll work together to navigate the challenges life throws your way.
                </p>

                <button className="mt-20 flex items-center gap-2 border py-2 px-8 text-xs font-bold hover:bg-[#223614] hover:text-white transition duration-700">
                    LET'S CHAT
                    <RiArrowRightLongFill />
                </button>
            </div>
            <div className="right w-[50%] relative flex justify-center pt-20">

                {/* MAIN ARCH IMAGE */}
                <div className="w-auto overflow-hidden rounded-t-full">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=1500w"
                        alt="hero"
                        className="w-full h-[80%] object-cover object-bottom"
                    />
                </div>

                {/* OVERLAPPING CIRCLE IMAGE */}
                <div className="absolute right-10 bottom-10 w-70 h-70 rounded-full overflow-hidden">
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