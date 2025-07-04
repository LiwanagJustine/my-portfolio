"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Music() {
    const { theme } = useTheme();
    const images = [
        {
            src: "/images/music01.jpg",
            desc: "Ben&Ben",
            short: "Ben&Ben's music feels like a warm hug on a stormy day—raw, heartfelt, and beautifully honest."
        },
        {
            src: "/images/music02.jpg",
            desc: "The Ridleys",
            short: "The Ridleys craft indie tunes that hit deep—nostalgic, dreamy, and poetically raw."
        },
        {
            src: "/images/music03.jpg",
            desc: "Michael Bublé",
            short: "Michael Bublé’s voice is like fine wine—classic, smooth, and made to last."
        },
        {
            src: "/images/music04.jpg",
            desc: "After Image",
            short: "After Image brings powerful anthems that echo with emotion and timeless meaning."
        },
        {
            src: "/images/music05.jpg",
            desc: "Flow G",
            short: "Flow G delivers unapologetic bars with infectious energy—a true voice of the streets."
        },
        {
            src: "/images/music06.jpg",
            desc: "Lola Amour",
            short: "Lola Amour blends soul and funk into pure good vibes—undeniably refreshing."
        },
    ];

    const [start, setStart] = useState(0);
    const visibleCount = 3;

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setStart((prev) =>
                prev >= images.length - visibleCount ? 0 : prev + 1
            );
        }, 10000);
        return () => clearInterval(interval);
    }, [images.length, visibleCount]);

    return (
        <div className={`about-container min-h-screen w-full p-8 md:p-24 font-[Raleway] transition-colors duration-300 ${
            theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
                : 'bg-gradient-to-br from-[#f7fafd] to-[#e3eaff]'
        }`}>
            <div className="header mb-8 scale-in-time-01">
                <h2 className={`font-bold text-3xl sm:text-4xl tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                }`}>Listening Music</h2>
                <div className="border-b-4 border-[#149ddd] w-16 mt-4 rounded"></div>
            </div>
            <div className="content mt-8 scale-in-time-02">
                <p className={`text-base sm:text-lg leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                    I enjoy exploring different genres of music as a way to relax, stay inspired, and connect with different cultures and emotions. Music fuels my creativity and often helps me focus and recharge.
                </p>
            </div>
            <div className="slider mt-12 w-full flex flex-col items-center">
                <div className="relative w-full">
                    {/* Removed left/right buttons */}
                    <div className="flex overflow-hidden w-full gap-6 px-12">
                        {images.slice(start, start + visibleCount).map((img) => (
                            <div
                                key={img.src}
                                className="flex-1 hover:scale-105 transition-all duration-300"
                            >
                                <div className="short-description flex items-start px-4 pt-4">
                                    <span className={`w-[400px] h-[140px] font-semibold px-4 py-2 rounded-2xl relative text-md shadow-lg
                                        flex items-center justify-center text-center transition-colors duration-300
                                        before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:w-0 before:h-0
                                        before:border-l-8 before:border-l-transparent
                                        before:border-r-8 before:border-r-transparent
                                        ${theme === 'dark' 
                                            ? 'bg-gray-800 text-gray-200 before:border-t-8 before:border-t-gray-800' 
                                            : 'bg-white text-gray-700 before:border-t-8 before:border-t-white'
                                        }`}>
                                        {img.short}
                                    </span>
                                </div>
                                <img
                                    src={img.src}
                                    alt={img.desc}
                                    className="w-[90px] h-[90px] rounded-full object-cover mx-auto mt-6 shadow-lg"
                                />
                                <div className="p-4">
                                    <p className={`font-semibold text-center ${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>{img.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: images.length - visibleCount + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setStart(idx)}
                            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                                start === idx 
                                    ? "bg-blue-500" 
                                    : (theme === 'dark' ? "bg-gray-600" : "bg-gray-300")
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}