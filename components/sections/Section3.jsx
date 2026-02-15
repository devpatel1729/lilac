"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
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
        <div ref={container} className="min-h-screen bg-[#f7f5f0] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center py-12 sm:py-16 md:py-20">
            <h1 ref={boxRef} className="text-3xl sm:text-4xl md:text-5xl font-extrabold py-8 sm:py-10 md:py-15 text-center">
                My Specialties
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cards gap-4 sm:gap-5 w-full max-w-7xl">
                <div className="card border border-[#074461] bg-[#e5e0da] p-4 sm:p-5 h-full flex flex-col">
                    <h2 className="font-bold mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg">Anxiety & Panic Relief</h2>
                    <p className="text-xs sm:text-sm text-wrap mb-4 sm:mb-5 grow">
                        Unhook yourself from constant worry and physical tension. We work to quiet the overthinking mind and regulate your nervous system so you can find ease in your daily life.
                    </p>
                    <img
                        className="w-full aspect-square object-cover rounded-full object-left mx-auto"
                        src="https://images.openai.com/static-rsc-3/qUdX7L64Xti1aPqM7aDbqaN0FU_wo-OWC6IiqteF7zu_cPsgbdRCdw-Qp3E332VK8qd0Fszs3XxITK2KCzMptZTjoWBSQRX891sMwcXcSgk?purpose=fullsize&v=1"
                        alt="Stonetower representing anxiety releif"
                    />
                </div>
                <div className="card border border-[#074461] bg-[#e5e0da] p-4 sm:p-5 h-full flex flex-col">
                    <h2 className="font-bold mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg">Trauma Therapy & EMDR</h2>
                    <p className="text-xs sm:text-sm text-wrap mb-4 sm:mb-5 grow">
                        Deeply paced work for single-incident trauma or complex, long-standing patterns. I prioritize safety and stabilization to help you process past experiences without feeling overwhelmed.
                    </p>
                    <img
                        className="w-full aspect-square object-cover rounded-full mx-auto"
                        src="https://cdn.sanity.io/images/eztzxh9q/production/46b78f8137ca4f5f17ae851b98dad2a08ee8ab8a-2121x1414.jpg?auto=format&fit=clip&q=75&w=3840"
                        alt="Hands interacting"
                    />
                </div>
                <div className="card border border-[#074461] bg-[#e5e0da] p-4 sm:p-5 h-full flex flex-col md:col-span-2 lg:col-span-1">
                    <h2 className="font-bold mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg">Burnout & Professional Resilience</h2>
                    <p className="text-xs sm:text-sm text-wrap mb-4 sm:mb-5 grow">
                        Specialized support for entrepreneurs and creatives who feel disconnected after years of pushing through stress. We will dismantle perfectionism and build sustainable ways of working.
                    </p>
                    <img
                        className="w-full aspect-square object-cover rounded-full object-left mx-auto"
                        src="https://hips.hearstapps.com/hmg-prod/images/laptop-on-wooden-table-in-home-interior-with-many-royalty-free-image-1737491671.pjpeg?crop=0.577xw%3A0.865xh%3B0.220xw%2C0.135xh&resize=640%3A%2A"
                        alt="Laptop with plants in background"
                    />
                </div>
            </div>
        </div>
    )
}

export default Section3