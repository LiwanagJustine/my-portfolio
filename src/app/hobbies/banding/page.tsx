"use client";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import AlbumModal from "@/components/modal/album";

export default function Banding() {
    const { theme } = useTheme();
    const [openAlbum, setOpenAlbum] = useState<string | null>(null);

    const jaggingImages = [
        "/images/animes/demon slayer.jpg",
        "/images/animes/naruto.jpg",
        "/images/animes/pokemon.jpg",
        "/images/animes/Slime.jpg",
        "/images/animes/ace of diamond.jpg",
        "/images/animes/solo leveling.jpg",
        "/images/animes/haikyuu.jpg",
        "/images/animes/pokemon.jpg",
        "/images/animes/Slime.jpg",
        "/images/animes/ace of diamond.jpg",
    ];
    const eatingImages = [
        "/images/animes/demon slayer.jpg",
        "/images/animes/naruto.jpg",
        "/images/animes/pokemon.jpg",
        "/images/animes/Slime.jpg",
        "/images/animes/ace of diamond.jpg",
        "/images/animes/solo leveling.jpg",
        "/images/animes/haikyuu.jpg",
        "/images/animes/pokemon.jpg",
        "/images/animes/Slime.jpg",
        "/images/animes/ace of diamond.jpg",
    ];
    const travelImages = [
        "/images/animes/demon slayer.jpg",
        "/images/animes/naruto.jpg",
        "/images/animes/pokemon.jpg",
        "/images/animes/Slime.jpg",
        "/images/animes/ace of diamond.jpg",
        "/images/animes/solo leveling.jpg",
        "/images/animes/haikyuu.jpg",
        "/images/animes/pokemon.jpg",
        "/images/animes/Slime.jpg",
        "/images/animes/ace of diamond.jpg",
    ];
    const gridClasses = [
        "col-span-2 row-span-2",
        "col-span-1 row-span-2",
        "col-span-1 row-span-3",
        "col-span-2 row-span-2",
        "col-span-1 row-span-3",
        "col-span-1 row-span-2",
        "col-span-2 row-span-3",
        "col-span-2 row-span-2",
        "col-span-1 row-span-3",
        "col-span-3 row-span-3",
    ];


    // Repeat for other albums: eatingImages, travelImages, togetherImages

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
                    }`}>Family Banding</h2>
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
                    <div className="album-container mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Album: Jagging */}
                        <div
                            className={`album group rounded-2xl shadow-xl p-6 flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border hover:border-[#149ddd]/30 ${
                                theme === 'dark' 
                                    ? 'bg-gray-800 border-gray-600' 
                                    : 'bg-white border-transparent'
                            }`}
                            onClick={() => setOpenAlbum(openAlbum === "jagging" ? null : "jagging")}
                        >
                            <div className="relative mb-5">
                                <img
                                    src="/images/bandding/jogging.jpg"
                                    alt="Album Jagging"
                                    className="w-28 h-28 object-cover rounded-full border-4 border-transparent group-hover:border-[#149ddd] transition-all duration-300"
                                />
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#149ddd] text-white text-xs px-3 py-1 rounded-full shadow group-hover:scale-110 transition-transform">Jagging</span>
                            </div>
                            <h3 className={`font-bold text-xl mb-2 text-center ${
                                theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                            }`}>Jogging</h3>
                            <p className={`text-center text-sm ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                                Fun moments jogging sessions.
                            </p>
                        </div>
                        {/* Album: Eating */}
                        <div
                            className={`album group rounded-2xl shadow-xl p-6 flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border hover:border-[#149ddd]/30 ${
                                theme === 'dark' 
                                    ? 'bg-gray-800 border-gray-600' 
                                    : 'bg-white border-transparent'
                            }`}
                            onClick={() => setOpenAlbum(openAlbum === "eating" ? null : "eating")}
                        >
                            <div className="relative mb-5">
                                <img
                                    src="/images/bandding/eating.jpg"
                                    alt="Album Eating"
                                    className="w-28 h-28 object-cover rounded-full border-4 border-transparent group-hover:border-[#149ddd] transition-all duration-300"
                                />
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#149ddd] text-white text-xs px-3 py-1 rounded-full shadow group-hover:scale-110 transition-transform">Eating</span>
                            </div>
                            <h3 className={`font-bold text-xl mb-2 text-center ${
                                theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                            }`}>Eating</h3>
                            <p className={`text-center text-sm ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                                Delicious memories meals.
                            </p>
                        </div>
                        {/* Album: Travel */}
                        <div
                            className={`album group rounded-2xl shadow-xl p-6 flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border hover:border-[#149ddd]/30 ${
                                theme === 'dark' 
                                    ? 'bg-gray-800 border-gray-600' 
                                    : 'bg-white border-transparent'
                            }`}
                            onClick={() => setOpenAlbum(openAlbum === "travel" ? null : "travel")}
                        >
                            <div className="relative mb-5">
                                <img
                                    src="/images/bandding/travel.jpg"
                                    alt="Album Travel"
                                    className="w-28 h-28 object-cover rounded-full border-4 border-transparent group-hover:border-[#149ddd] transition-all duration-300"
                                />
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#149ddd] text-white text-xs px-3 py-1 rounded-full shadow group-hover:scale-110 transition-transform">Travel</span>
                            </div>
                            <h3 className={`font-bold text-xl mb-2 text-center ${
                                theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                            }`}>Travel</h3>
                            <p className={`text-center text-sm ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                                Adventures from travels.
                            </p>
                        </div>
                        {/* Album: Together */}
                        <div
                            className={`album group rounded-2xl shadow-xl p-6 flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border hover:border-[#149ddd]/30 ${
                                theme === 'dark' 
                                    ? 'bg-gray-800 border-gray-600' 
                                    : 'bg-white border-transparent'
                            }`}
                            onClick={() => setOpenAlbum(openAlbum === "together" ? null : "together")}
                        >
                            <div className="relative mb-5">
                                <img
                                    src="/images/bandding/together.jpg"
                                    alt="Album Together"
                                    className="w-28 h-28 object-cover rounded-full border-4 border-transparent group-hover:border-[#149ddd] transition-all duration-300"
                                />
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#149ddd] text-white text-xs px-3 py-1 rounded-full shadow group-hover:scale-110 transition-transform">Together</span>
                            </div>
                            <h3 className={`font-bold text-xl mb-2 text-center ${
                                theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                            }`}>Together</h3>
                            <p className={`text-center text-sm ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                                Cherished moments spent together.
                            </p>
                        </div>
                    </div>

                    {/* Album Modals */}
                    {openAlbum === "jagging" && (
                        <AlbumModal
                            open={openAlbum === "jagging"}
                            onClose={() => setOpenAlbum(null)}
                            title="Jagging Album"
                            images={jaggingImages}
                            gridClasses={gridClasses}
                            altPrefix="Jagging"
                        />
                    )}
                    {openAlbum === "eating" && (
                        <AlbumModal
                            open={openAlbum === "eating"}
                            onClose={() => setOpenAlbum(null)}
                            title="Eating Album"
                            images={eatingImages}
                            gridClasses={gridClasses}
                            altPrefix="Eating"
                        />
                    )}
                    {openAlbum === "travel" && (
                        <AlbumModal
                            open={openAlbum === "travel"}
                            onClose={() => setOpenAlbum(null)}
                            title="Travel Album"
                            images={travelImages}
                            gridClasses={gridClasses}
                            altPrefix="Travel"
                        />
                    )}
                    {openAlbum === "together" && (
                        <AlbumModal
                            open={openAlbum === "together"}
                            onClose={() => setOpenAlbum(null)}
                            title="Together Album"
                            images={jaggingImages} // Replace with togetherImages if you have them
                            gridClasses={gridClasses}
                            altPrefix="Together"
                        />
                    )}
                </div>
            </div>
        </>
    );
}