"use client";

import { useState } from "react";

const faqs = [
    {
        q: "Do you take insurance?",
        a: "Answer goes here.",
    },
    {
        q: "What are your rates?",
        a: "Answer goes here.",
    },
    {
        q: "Do you have any openings?",
        a: "Answer goes here.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col md:flex-row bg-[#fbf6f1] py-12 sm:py-16 md:py-20">
            <div className="w-full md:w-[50%] px-6 sm:px-8 md:px-0 mb-8 md:mb-0">
                <img 
                    className="mx-auto rounded-t-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] w-auto object-cover" 
                    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=1500w" 
                    alt="hero" 
                />
            </div>
            <div className="w-full md:w-[50%] flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:pr-15">
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
                                <span className="relative w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center flex-shrink-0">

                                    <span
                                        className={`absolute h-0.5 w-4 sm:w-5 bg-[#2d3b2f] transition-transform duration-300`}
                                    />

                                    <span
                                        className={`absolute w-0.5 h-4 sm:h-5 bg-[#2d3b2f] transition-transform duration-300 ${
                                            isOpen ? "-rotate-90 ease-in-out" : "rotate-0 ease-in-out"
                                        }`}
                                    />
                                </span>

                                <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                                    {item.q}
                                </span>
                            </button>

                            {/* ANSWER */}
                            <div
                                className={`grid transition-all duration-500 ease-in-out ${
                                    isOpen ? "grid-rows-[1fr] mt-3 sm:mt-4" : "grid-rows-[0fr]"
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