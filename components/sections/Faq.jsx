"use client";

import { useState } from "react";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        q: "Do you take insurance?",
        a: "I am an out-of-network provider. I can provide a monthly Superbill (receipt) for you to submit to your insurance for potential reimbursement.",
    },
    {
        q: "What are your rates?",
        a: "Please contact me directly for current session rates. I offer a free 15-minute consultation to ensure we are a good financial fit.",
    },
    {
        q: "Do you have any openings?",
        a: "Yes, I am currently accepting new clients for in-person sessions in Santa Monica and secure telehealth appointments across California.",
    },
];

export default function FAQ() {
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
                trigger: boxRef.current,
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
        <div ref={container} className="flex flex-col md:flex-row bg-[#f7f5f0] py-12 sm:py-16 md:py-20">
            <div className="w-full md:w-[50%] px-6 sm:px-8 md:px-0 mb-8 md:mb-0">
                <img
                    className="mx-auto rounded-t-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] w-auto object-cover"
                    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=1500w"
                    alt="flower vase representing answers"
                />
            </div>
            <div ref={boxRef} className="w-full md:w-[50%] flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:pr-15">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 md:mb-10">FAQs</h2>

                {faqs.map((item, index) => {
                    const isOpen = activeIndex === index;

                    return (
                        <div key={index} className="border-t border-[#2d3b2f] py-3 sm:py-4">

                            {/* QUESTION */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center gap-4 sm:gap-6 text-left"
                            >
                                {/* PLUS / MINUS */}
                                <span className="relative w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center shrink-0">

                                    <span
                                        className={`absolute h-0.5 w-4 sm:w-5 bg-[#2d3b2f] transition-transform duration-300`}
                                    />

                                    <span
                                        className={`absolute w-0.5 h-4 sm:h-5 bg-[#2d3b2f] transition-transform duration-300 ${isOpen ? "-rotate-90 ease-in-out" : "rotate-0 ease-in-out"
                                            }`}
                                    />
                                </span>

                                <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                                    {item.q}
                                </span>
                            </button>

                            {/* ANSWER */}
                            <div
                                className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] mt-3 sm:mt-4" : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden pl-8 sm:pl-10 md:pl-11">
                                    <p className="text-xs sm:text-sm">{item.a}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className="border-t border-[#2d3b2f]" />
            </div>
        </div>
    );
}