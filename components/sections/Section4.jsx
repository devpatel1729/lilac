"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { RiArrowRightLongFill } from '@remixicon/react'
gsap.registerPlugin(ScrollTrigger);
const Section4 = () => {
    const container = useRef();
    const boxRef = useRef();

    useGSAP(() => {
        gsap.from(container.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                //markers: true,
            }
        });
    }, { scope: container });
    return (
        <div ref={container} className='bg-[#d4cee7] flex flex-col-reverse md:flex-row min-h-screen md:h-[110vh]'>
            <div className="right w-full md:w-[50%] h-[60vh] md:h-full">
                <img
                    className='h-full w-full object-cover'
                    src="/images/office2.jpeg"
                    alt="A calm therapist room"
                />
            </div>
            <div ref={boxRef} className="left w-full md:w-[50%] relative flex flex-col justify-center items-center">
                <div className='flex flex-col items-start justify-center gap-4 sm:gap-5 md:gap-7 p-6 sm:p-8 md:p-10 lg:p-12 leading-relaxed'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                        A Quiet Space to Reconnect
                    </h2>
                    <p className='text-base sm:text-lg font-semibold'>
                        Therapy works best when you feel respected and safe. My Santa Monica office is a private sanctuary designed with natural light and a calm, uncluttered atmosphere to help you ground yourself the moment you arrive.
                    </p>
                    {/* <ul className="list-disc pl-6 sm:pl-8 md:pl-10 space-y-2 sm:space-y-3 text-sm sm:text-base font-semibold">
                        <li>Persistent feelings of sadness or hopelessness</li>
                        <li>Trouble focusing or making decisions</li>
                        <li>Difficulty maintaining relationships</li>
                        <li>Feeling constantly exhausted or unmotivated</li>
                        <li>A pervasive sense of being overwhelmed</li>
                    </ul> */}
                    <p className='text-base sm:text-lg font-semibold'>
                        Telehealth Services: For clients across California who cannot visit in person, I offer secure online sessions that bring this same grounded presence to you.
                    </p>
                </div>
                <button className='text-xs sm:text-sm relative md:absolute bottom-0 flex items-center justify-center font-bold border-t border-[#074461] w-full py-4 sm:py-5 hover:bg-[#074461] hover:text-white transition duration-700 ease-in-out cursor-pointer gap-2'>
                    WORK WITH ME <RiArrowRightLongFill className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
        </div>
    )
}

export default Section4