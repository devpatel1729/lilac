"use client";
import { useState } from "react";

const faqs = [
    {
        q: "Education",
        a: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
    },
    {
        q: "Licensure",
        a: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
    },
    {
        q: "Certifications",
        a: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
    },
];

const Section6 = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full flex items-center justify-center bg-[#e5e0da] px-4 sm:px-6 md:px-8">
            <div className="max-w-xl w-full py-12 sm:py-16 md:py-20 flex flex-col">
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
                                <span className="relative w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center flex-shrink-0">

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