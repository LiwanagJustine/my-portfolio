"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const phrases = [
    "a passionate front-end developer.",
    "a creative coder who loves clean UI.",
    "a developer who turns ideas into websites."
];

export default function Home() {
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const fullText = phrases[currentPhrase];
        let timer: NodeJS.Timeout;

        if (!isDeleting && displayedText.length < fullText.length) {
            timer = setTimeout(() => {
                setDisplayedText(fullText.slice(0, displayedText.length + 1));
            }, 60);
        } else if (isDeleting && displayedText.length > 0) {
            timer = setTimeout(() => {
                setDisplayedText(fullText.slice(0, displayedText.length - 1));
            }, 30);
        } else if (!isDeleting && displayedText.length === fullText.length) {
            timer = setTimeout(() => setIsDeleting(true), 1200);
        } else if (isDeleting && displayedText.length === 0) {
            setIsDeleting(false);
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentPhrase]);

    return (
        <div className={`min-h-screen w-full flex items-start justify-start font-[Raleway] transition-colors duration-300 ${
            theme === 'dark' ? '' : 'bg-gray-50'
        }`}>
            <img src="images/justineliwanag03.jpeg" alt="My Image" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className={`absolute inset-0 z-10 ${
                theme === 'dark' ? 'bg-black opacity-20' : 'bg-black opacity-30'
            }`}></div>

            <div className="relative z-20 text-left p-12 mt-12 max-w-6xl"
                style={{ textShadow: "0 2px 16px rgba(0,0,0,0.8)" }}>
                <h1 className={`text-6xl font-bold drop-shadow-lg scale-in-time-01 ${
                    theme === 'dark' ? 'text-white' : 'text-white'
                }`}>Hello I'm</h1>
                <h2 className={`text-7xl font-bold mb-4 drop-shadow-lg scale-in-time-02 ${
                    theme === 'dark' ? 'text-cyan-300' : 'text-cyan-200'
                }`}>Justine Liwanag</h2>
                <p className={`text-4xl bg-white/10 backdrop-blur-md border border-white/30 rounded-xl px-4 py-4 inline-block shadow-lg scale-in-time-03 ${
                    theme === 'dark' ? 'text-white/90' : 'text-white/95'
                }`}>
                    <span className={`font-bold ${
                        theme === 'dark' ? 'text-cyan-200' : 'text-cyan-100'
                    }`}>I'm </span>
                    <span>{displayedText}<span className={`animate-pulse ${
                        theme === 'dark' ? 'text-cyan-400' : 'text-cyan-300'
                    }`}>|</span></span>
                </p>
            </div>
        </div>
    );
}