"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

import { RiArrowRightLongFill } from "@remixicon/react"

const Section5 = () => {
    
    const container = useRef();
    const boxRef = useRef();
    useGSAP(() => {
        gsap.from(container.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: boxRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                //markers: true,
            }
        });
    }, { scope: container });
    return (
        <div ref={container} className='bg-[#e5e0da] flex flex-col md:flex-row min-h-screen md:h-[120vh] py-12 md:py-0'>
            <div ref={boxRef} className="left w-full md:w-1/2 flex flex-col justify-center items-center pl-6 sm:pl-8 md:pl-12 lg:pl-16 text-left max-w-xl mx-auto order-2 md:order-1 mt-8 md:mt-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left w-full">
                    Inside the Therapy Room
                </h2>
                <ul className="list-disc pl-5">
                    <li>
                        <p className="text-sm sm:text-base md:text-md font-semibold mt-4 sm:mt-6">
                            A Space to Land
                        </p>
                        <p className="text-sm sm:text-base md:text-md font-medium">
                            We begin every session by establishing immediate safety and grounding, ensuring you feel settled and respected before exploring deeper topics.
                        </p>
                    </li>
                    <li>
                        <p className="text-sm sm:text-base md:text-md font-semibold mt-4 sm:mt-6">
                            Collaborative & Structured
                        </p>
                        <p className="text-sm sm:text-base md:text-md font-medium">
                            I blend open reflection with active feedback, offering a structured approach that moves you from understanding why you feel this way to knowing how to move forward.
                        </p>
                    </li>
                    <li>
                        <p className="text-sm sm:text-base md:text-md font-semibold mt-4 sm:mt-6">
                            Paced for Your Nervous System
                        </p>
                        <p className="text-sm sm:text-base md:text-md font-medium">
                            We prioritize stabilization and move at a manageable pace, ensuring you leave sessions feeling regulated and clear, rather than overwhelmed or shattered.
                        </p>
                    </li>
                </ul>

                {/* <p className="text-sm sm:text-base md:text-md font-semibold mt-4 sm:mt-6">
                    I'm committed to providing a safe and supportive environment where we can
                    explore your thoughts, feelings, and behaviors. With empathy and guidance,
                    we'll work together to navigate the challenges life throws your way.
                </p> */}

                <button className="mt-8 sm:mt-12 md:mt-20 flex items-center gap-2 border border-[#074461] py-2 px-6 sm:px-8 text-xs font-bold hover:bg-[#074461] hover:text-white transition duration-700 self-start">
                    LET'S CHAT
                    <RiArrowRightLongFill className="w-4 h-4" />
                </button>
            </div>
            <div className="right w-full md:w-[50%] relative flex justify-center pt-8 sm:pt-12 md:pt-20 px-6 sm:px-8 md:px-0 order-1 md:order-2">

                {/* MAIN ARCH IMAGE */}
                <div className="w-full sm:w-[80%] md:w-auto overflow-hidden rounded-t-full">
                    <img
                        src="https://www.marthastewart.com/thmb/YWZbEbhqwz71QFmLH-vqfMdUO2A%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/2022-11-18-ColinMiller-OWS-0015-1248-v2-091fc51309df4533aa805bfcabbd1965.jpg"
                        alt="therapist room white"
                        className="w-full h-[50vh] sm:h-[60vh] md:h-[80%] object-cover object-bottom"
                    />
                </div>

                {/* OVERLAPPING CIRCLE IMAGE */}
                <div className="absolute right-6 sm:right-8 md:right-10 bottom-4 sm:bottom-6 md:bottom-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
                    <img
                        src="https://assets.zencare.co/2020/04/How-to-Set-Yourself-Up-for-Successful-Online-Therapy-Sessions.jpg"
                        alt="A laptop and a cup"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </div>
    )
}

export default Section5