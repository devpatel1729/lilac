"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { RiArrowRightLongFill } from '@remixicon/react'
gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {

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
                // //markers: true,
            }
        });
    }, { scope: container });

    return (
        <div ref={container} className='bg-[#e5e0da] flex flex-col-reverse md:flex-row min-h-screen md:h-[95vh]'>
            <div className="left w-full md:w-[50%] relative flex flex-col justify-center items-center">
                <div className='flex flex-col items-start justify-center gap-4 sm:gap-5 md:gap-7 p-6 sm:p-10 md:p-12 lg:p-20'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Stop Bracing for the Next Problem</h2>
                    <p className='text-base sm:text-lg font-semibold'>
                        Many of the people I work with are successful, thoughtful, and self-aware—yet they feel quietly stuck in cycles of overthinking and high internal pressure. You may be navigating professional burnout, the lingering effects of past trauma, or a sense that you are always "on edge."
                    </p>
                    <p className='text-base sm:text-lg font-semibold'>
                        I’m Dr. Maya Reynolds. I offer a warm, collaborative space where we don't just manage symptoms—we build resilience. Using methods like CBT, EMDR, and mindfulness, I help you understand the physiological side of your stress so you can finally feel safe in your own body.
                    </p>
                </div>
                <button className='relative md:absolute bottom-0 flex items-center justify-center text-sm sm:text-base font-bold border-t border-[#074461] w-full py-4 sm:py-5 hover:bg-[#074461] hover:text-white transition duration-700 ease-in-out cursor-pointer gap-2'>
                    GET IN TOUCH <RiArrowRightLongFill className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
            <div ref={boxRef} className="right w-full md:w-[50%] h-[60vh] md:h-full">
                <img
                    className='h-full w-full object-cover object-top'
                    src="/images/profile.png"
                    alt="Dr. Maya Reynolds Profile"
                />
            </div>
        </div>
    )
}

export default Section2