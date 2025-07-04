"use client";
import { useTheme } from "@/contexts/ThemeContext";

export default function Education() {
    const { theme } = useTheme();
    
    return (
        <div className={`education-container min-h-screen w-full p-8 md:p-24 font-[Raleway] transition-colors duration-300 ${
            theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
                : 'bg-gradient-to-br from-[#f7fafd] to-[#e3eaff]'
        }`}>
            <div className="header mb-8 scale-in-time-01">
                <h2 className={`font-bold text-4xl tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                }`}>Education</h2>
                <div className="border-b-4 border-[#149ddd] w-16 mt-4 rounded"></div>
            </div>
            <div className="content mt-8 scale-in-time-02">
                <p className={`text-lg leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                    I hold a Bachelor of Science in Information Technology from Bulacan State University. My education has provided me with a solid foundation in computer science principles, software development, and web technologies.
                </p>
            </div>
            <div className="details mt-12 flex flex-col md:flex-row gap-8 items-center scale-in-time-03">
                <div className={`image-cont p-2 rounded-xl shadow-lg backdrop-blur-md border transition-colors duration-300 ${
                    theme === 'dark' 
                        ? 'bg-gray-800/40 border-gray-600/30' 
                        : 'bg-white/30 border-white/30'
                }`}>
                    <img
                        src="/images/justineliwanag02.jpeg"
                        alt="Justine Liwanag"
                        className="w-48 h-48 md:w-64 md:h-64 rounded-lg object-cover shadow"
                    />
                </div>
                <div className={`context flex-1 border rounded-xl shadow-lg p-6 backdrop-blur-md transition-colors duration-300 ${
                    theme === 'dark' 
                        ? 'border-gray-600/30 bg-gray-800/40' 
                        : 'border-white/20 bg-white/30'
                }`}>
                    <h3 className={`font-bold text-2xl mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                    }`}>Bachelor of Science in Information Technology</h3>
                    <p className={`mt-2 text-base mb-4 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        Graduated from Bulacan State University, specializing in software development and web technologies.
                    </p>
                    <ul className={`mt-6 space-y-4 text-base ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                        <li>
                            <span className="font-semibold text-[#149ddd]">Graduation Year:</span> 2023
                        </li>
                        <li>
                            <span className="font-semibold text-[#149ddd]">Institution:</span> Bulacan State University
                        </li>
                        <li>
                            <span className="font-semibold text-[#149ddd]">Major / Focus:</span> Web and Mobile Development
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}