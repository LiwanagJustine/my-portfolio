"use client";
import React, { useEffect, useState } from "react";

export default function AlbumModal({
    open,
    onClose,
    title,
    images,
    gridClasses,
    altPrefix,
}: {
    open: boolean;
    onClose: () => void;
    title: string;
    images: string[];
    gridClasses: string[];
    altPrefix: string;
}) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (open) {
            setAnimate(false);
            // Allow DOM to paint before animating
            const timeout = setTimeout(() => setAnimate(true), 10);
            return () => clearTimeout(timeout);
        } else {
            setAnimate(false);
        }
    }, [open]);

    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-6 max-w-4xl w-full relative overflow-y-auto max-h-[90vh]"
                style={{
                    scrollbarWidth: "none",      // Firefox
                    msOverflowStyle: "none",     // IE and Edge
                }}>
                <button
                    className="absolute top-4 right-4 text-2xl text-[#149ddd] hover:text-[#22223b] font-bold cursor-pointer transition-colors duration-300"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-3xl font-extrabold mb-2 text-[#22223b] tracking-tight">
                    {title}
                </h2>
                <div className="border-b-4 border-[#149ddd] w-26 mt-4 mb-4 rounded"></div>
                <div className="grid grid-cols-4 gap-3 auto-rows-[100px]">
                    {images.map((src, i) => (
                        <div key={i} className={gridClasses[i]} >
                            <img
                                src={src}
                                alt={`${altPrefix} ${i + 1}`}
                                className={`w-full h-full object-cover rounded-xl shadow transition-all duration-700 ease-out
                                    ${animate
                                        ? "opacity-100 scale-100 translate-x-0"
                                        : i % 2 === 0
                                            ? "-translate-x-10 opacity-0 scale-90"
                                            : "translate-x-10 opacity-0 scale-90"
                                    }
                                `}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}