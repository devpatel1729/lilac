"use client";
import { useState } from "react";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        q: "Education",
        a: "I hold a Doctor of Psychology (PsyD), emphasizing clinical practice and applying psychological theory to real-world challenges.",
    },
    {
        q: "Licensure",
        a: "I am a Licensed Clinical Psychologist authorized to practice throughout the state of California.",
    },
    {
        q: "Certifications",
        a: "My advanced training includes EMDR (Trauma), CBT (Cognitive Behavioral Therapy), and Mindfulness-Based Stress Reduction.",
    },
];

const Section6 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
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

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div ref={container} className="w-full flex items-center justify-center bg-[#e5e0da] px-4 sm:px-6 md:px-8">
            <div ref={boxRef} className="max-w-xl w-full py-12 sm:py-16 md:py-20 flex flex-col">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8 md:mb-10 w-full text-center">
                    My Professional Background
                </h2>

                {faqs.map((item, index) => {
                    const isOpen = activeIndex === index;

                    return (
                        <div key={index} className="border-t border-[#2d3b2f] py-3 sm:py-4">

                            {/* QUESTION */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between gap-4 sm:gap-6 text-left"
                            >
                                <span className="text-lg sm:text-xl font-bold">
                                    {item.q}
                                </span>
                                <span className="relative w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center shrink-0">

                                    <span
                                        className={`absolute h-0.5 w-3 sm:w-4 bg-[#2d3b2f] transition-transform duration-300`}
                                    />

                                    <span
                                        className={`absolute w-0.5 h-3 sm:h-4 bg-[#2d3b2f] transition-transform duration-300 ${
                                            isOpen ? "-rotate-90 ease-in-out" : "rotate-0 ease-in-out"
                                        }`}
                                    />
                                </span>
                            </button>

                            {/* ANSWER */}
                            <div
                                className={`grid transition-all duration-500 ease-in-out ${
                                    isOpen ? "grid-rows-[1fr] mt-3 sm:mt-4" : "grid-rows-[0fr]"
                                }`}
                            >
                                <div className="overflow-hidden flex items-center justify-center px-4 sm:px-8 md:px-12">
                                    <p className="text-sm sm:text-base md:text-md font-bold text-center">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className="border-t border-[#2d3b2f]" />
            </div>
        </div>
    )
}

export default Section6