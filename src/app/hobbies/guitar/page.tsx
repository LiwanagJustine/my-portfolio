"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Guitar() {
    const { theme } = useTheme();
    const images = [
        "/images/animes/demon slayer.jpg",
        "/images/animes/naruto.jpg",
        "/images/animes/pokemon.jpg",
        "/images/animes/Slime.jpg",
        "/images/animes/ace of diamond.jpg",
        "/images/animes/solo leveling.jpg",
        "/images/animes/haikyuu.jpg",
    ];
    const [current, setCurrent] = useState(1);

    // Auto-slide every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <>
            <div className={`about-container min-h-screen w-full p-8 md:p-24 font-[Raleway] transition-colors duration-300 ${
                theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
                    : 'bg-gradient-to-br from-[#f7fafd] to-[#e3eaff]'
            }`}>
                <div className="header mb-8 scale-in-time-01">
                    <h2 className={`font-bold text-3xl sm:text-4xl tracking-tight ${
                        theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                    }`}>Playing Guitar</h2>
                    <div className="border-b-4 border-[#149ddd] w-16 mt-4 rounded"></div>
                </div>
                <div className="content mt-8 scale-in-time-02">
                    <p className={`text-base sm:text-lg leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        Hi, I'm a curious and creative individual who enjoys exploring how things work, both in life and in tech. Born and raised in Longos, Calumpit, Bulacan, I've always been fascinated by how small ideas can turn into big solutions.
                    </p>
                </div>
                <div className="content">
                    <div className="relative w-full max-w-5xl mx-auto mt-10 flex items-center justify-center space-x-12">
                        {images.map((img, idx) => {
                            const pos = (idx - current + images.length) % images.length;
                            if (pos === images.length - 1) { // left
                                return (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Guitar ${idx + 1}`}
                                        className="w-72 h-72 object-cover rounded-2xl shadow-lg opacity-70 cursor-pointer scale-95 hover:scale-100 transition-all duration-500 bg-white"
                                        onClick={() => setCurrent(idx)}
                                        style={{ zIndex: 5 }}
                                    />
                                );
                            }
                            if (pos === 0) { // center
                                return (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Guitar ${idx + 1}`}
                                        className="w-[32rem] h-[32rem] object-cover rounded-3xl shadow-2xl transition-all duration-500 z-20 bg-white"
                                        style={{ zIndex: 10 }}
                                    />
                                );
                            }
                            if (pos === 1) { // right
                                return (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Guitar ${idx + 1}`}
                                        className="w-72 h-72 object-cover rounded-2xl shadow-lg opacity-70 cursor-pointer scale-95 hover:scale-100 transition-all duration-500 bg-white"
                                        onClick={() => setCurrent(idx)}
                                        style={{ zIndex: 5 }}
                                    />
                                );
                            }
                            return null;
                        })}
                    </div>
                    <div className="flex justify-center mt-6 space-x-3">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                className={`w-3 h-3 rounded-full border-2 border-[#149ddd] transition-all duration-300 ${
                                    idx === current 
                                        ? 'bg-[#149ddd] scale-125 shadow' 
                                        : (theme === 'dark' ? 'bg-gray-600 scale-100' : 'bg-gray-200 scale-100')
                                }`}
                                onClick={() => setCurrent(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}       
