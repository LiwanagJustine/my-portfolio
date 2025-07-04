"use client";
import { useTheme } from "@/contexts/ThemeContext";

export default function Career() {
    const { theme } = useTheme();
    
    return (
        <>
            <div className={`about-container min-h-screen w-full md:p-24 p-8 font-[Raleway] transition-colors duration-300 ${
                theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
                    : 'bg-gradient-to-br from-[#f7fafd] to-[#e3eaff]'
            }`}>
                <div className="header mb-8 scale-in-time-01 scale-in-time-01">
                    <h2 className={`font-bold text-4xl tracking-tight ${
                        theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                    }`}>Career</h2>
                    <div className="border-b-4 border-[#149ddd] w-16 mt-4 rounded"></div>
                </div>
                <div className="content mt-8 scale-in-time-02">
                    <p className={`text-lg leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        I'm a Frontend Developer at Accenture, passionate about building responsive, user-friendly web applications using modern tools like React, Next.js, Angular, and Tailwind. I enjoy crafting clean code and seamless user experiences in collaborative, agile teams.
                    </p>
                </div>
                <div className="details mt-12 flex flex-wrap flex-col md:flex-row gap-8 items-center scale-in-time-03">
                    <div className={`image-cont p-2 rounded-xl shadow-lg backdrop-blur-md border overflow-hidden transition-colors duration-300 ${
                        theme === 'dark' 
                            ? 'bg-gray-800/40 border-gray-600/30' 
                            : 'bg-white/40 border-white/30'
                    }`}>
                        <img
                            src="/images/justineliwanag06.jpeg"
                            alt="Justine Liwanag"
                            className="w-48 h-48 md:w-64 md:h-64 rounded-lg object-cover shadow"
                        />
                    </div>
                    <div className={`context flex-1 border rounded-xl shadow-lg p-6 backdrop-blur-md transition-colors duration-300 ${
                        theme === 'dark' 
                            ? 'border-gray-600/30 bg-gray-800/40' 
                            : 'border-white/30 bg-white/40'
                    }`}>
                        <h3 className={`font-bold text-2xl mb-2 ${
                            theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                        }`}>Frontend Developer — Accenture</h3>
                        <div className="information flex gap-6">
                            <ul className="mt-4 space-y-4 text-base flex-1">
                                <li>
                                    <h4 className="font-bold text-xl text-[#149ddd] mb-1 flex items-center gap-2">
                                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="10" fill="#149ddd" fillOpacity="0.15" />
                                            <path d="M6 10.5l2.5 2.5L14 8" stroke="#149ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Previous Project (1st Project)
                                    </h4>
                                </li>
                                <li className="text-sm flex items-center gap-2">
                                    <span className="font-semibold text-[#149ddd]">Role:</span>
                                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-[#22223b]'}>Frontend Developer</span>
                                </li>
                                <li className="text-sm flex items-center gap-2">
                                    <span className="font-semibold text-[#149ddd]">Tech Stack:</span>
                                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-[#22223b]'}>Angular, TypeScript, Bootstrap, NodeJS, PostgreSQL</span>
                                </li>
                                <li className="text-sm">
                                    <p className="font-semibold text-[#149ddd] mb-2">Highlights:</p>
                                    <ul className={`flex flex-col gap-3 border rounded-lg p-4 transition-colors duration-300 ${
                                        theme === 'dark' 
                                            ? 'bg-gray-700/40 border-gray-600/30' 
                                            : 'bg-[#dde6f3] border-[#149ddd]/10'
                                    }`}>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 flex-shrink-0 text-[#149ddd]">
                                                <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                                                    <circle cx="10" cy="10" r="10" fill="#149ddd" fillOpacity="0.15" />
                                                    <path d="M6 10.5l2.5 2.5L14 8" stroke="#149ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <span className={`text-xs leading-relaxed ${
                                                theme === 'dark' ? 'text-gray-300' : 'text-[#22223b]'
                                            }`}>
                                                Worked on enhancing an internal tool by adding new features and improving existing ones
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 flex-shrink-0 text-[#149ddd]">
                                                <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                                                    <circle cx="10" cy="10" r="10" fill="#149ddd" fillOpacity="0.15" />
                                                    <path d="M6 10.5l2.5 2.5L14 8" stroke="#149ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <span className={`text-xs leading-relaxed ${
                                                theme === 'dark' ? 'text-gray-300' : 'text-[#22223b]'
                                            }`}>
                                                Collaborated with the backend team, handling logic with Node.js and integrating with PostgreSQL
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 flex-shrink-0 text-[#149ddd]">
                                                <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                                                    <circle cx="10" cy="10" r="10" fill="#149ddd" fillOpacity="0.15" />
                                                    <path d="M6 10.5l2.5 2.5L14 8" stroke="#149ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <span className={`text-xs leading-relaxed ${
                                                theme === 'dark' ? 'text-gray-300' : 'text-[#22223b]'
                                            }`}>
                                                Participated in Agile ceremonies, code reviews, and team planning
                                            </span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="mt-4 space-y-4 text-base flex-1 ">
                                <li>
                                    <h4 className="font-bold text-xl text-[#149ddd] mb-1 flex items-center gap-2">
                                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="10" fill="#149ddd" fillOpacity="0.15" />
                                            <path d="M6 10.5l2.5 2.5L14 8" stroke="#149ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Current Project (2nd Project)
                                    </h4>
                                </li>
                                <li className="text-sm flex items-center gap-2">
                                    <span className="font-semibold text-[#149ddd]">Role:</span>
                                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-[#22223b]'}>Frontend Developer</span>
                                </li>
                                <li className="text-sm flex items-center gap-2">
                                    <span className="font-semibold text-[#149ddd]">Tech Stack:</span>
                                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-[#22223b]'}>Angular, TypeScript, C#.Net, PostgreSQL</span>
                                </li>
                                <li className="text-sm">
                                    <p className="font-semibold text-[#149ddd] mb-2">Highlights:</p>
                                    <ul className={`flex flex-col gap-3 border rounded-lg p-4 transition-colors duration-300 ${
                                        theme === 'dark' 
                                            ? 'bg-gray-700/40 border-gray-600/30' 
                                            : 'bg-[#dde6f3] border-[#149ddd]/10'
                                    }`}>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 flex-shrink-0 text-[#149ddd]">
                                                <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                                                    <circle cx="10" cy="10" r="10" fill="#149ddd" fillOpacity="0.15" />
                                                    <path d="M6 10.5l2.5 2.5L14 8" stroke="#149ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <span className={`text-xs leading-relaxed ${
                                                theme === 'dark' ? 'text-gray-300' : 'text-[#22223b]'
                                            }`}>
                                                Contributed to the continuous improvement of an internal tool by implementing new features and refining existing functionalities
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 flex-shrink-0 text-[#149ddd]">
                                                <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                                                    <circle cx="10" cy="10" r="10" fill="#149ddd" fillOpacity="0.15" />
                                                    <path d="M6 10.5l2.5 2.5L14 8" stroke="#149ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <span className={`text-xs leading-relaxed ${
                                                theme === 'dark' ? 'text-gray-300' : 'text-[#22223b]'
                                            }`}>
                                                Actively engaged in team activities such as sprint planning, daily stand-ups, and code reviews within an Agile workflow
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 flex-shrink-0 text-[#149ddd]">
                                                <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                                                    <circle cx="10" cy="10" r="10" fill="#149ddd" fillOpacity="0.15" />
                                                    <path d="M6 10.5l2.5 2.5L14 8" stroke="#149ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <span className={`text-xs leading-relaxed ${
                                                theme === 'dark' ? 'text-gray-300' : 'text-[#22223b]'
                                            }`}>
                                                Gained hands-on experience integrating frontend features with C# .NET APIs, including handling data models and service logic from the backend
                                            </span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`context flex-1 border rounded-xl shadow-lg p-6 backdrop-blur-md mt-6 scale-in-time-03 transition-colors duration-300 ${
                    theme === 'dark' 
                        ? 'border-gray-600/30 bg-gray-800/40' 
                        : 'border-white/30 bg-white/40'
                }`}>
                    <h3 className={`font-bold text-2xl mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                    }`}>Skills</h3>
                    <div className="information flex gap-20">
                        <ul className={`mt-4 space-y-2 text-base flex-1 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
                        }`}>
                            <li>
                                <div className="skill-percentage-label flex justify-between">
                                    <span className={`font-semibold text-xs ${
                                        theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                                    }`}>HTML</span>
                                    <span className={`text-sm ml-2 ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                    }`}>100%</span>
                                </div>
                                <div className={`w-full h-3 ${
                                    theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
                                }`}>
                                    <div className="h-3 bg-[#149ddd]" style={{ width: '100%' }}></div>
                                </div>
                            </li>
                            <li>
                                <div className="skill-percentage-label flex justify-between">
                                    <span className={`font-semibold text-xs ${
                                        theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                                    }`}>CSS</span>
                                    <span className={`text-sm ml-2 ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                    }`}>95%</span>
                                </div>
                                <div className={`w-full h-3 ${
                                    theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
                                }`}>
                                    <div className="h-3 bg-[#149ddd]" style={{ width: '95%' }}></div>
                                </div>
                            </li>
                            <li>
                                <div className="skill-percentage-label flex justify-between">
                                    <span className={`font-semibold text-xs ${
                                        theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                                    }`}>Javascript</span>
                                    <span className={`text-sm ml-2 ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                    }`}>85%</span>
                                </div>
                                <div className={`w-full h-3 ${
                                    theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
                                }`}>
                                    <div className="h-3 bg-[#149ddd]" style={{ width: '85%' }}></div>
                                </div>
                            </li>
                            <li>
                                <div className="skill-percentage-label flex justify-between">
                                    <span className={`font-semibold text-xs ${
                                        theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                                    }`}>Angular</span>
                                    <span className={`text-sm ml-2 ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                    }`}>80%</span>
                                </div>
                                <div className={`w-full h-3 ${
                                    theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
                                }`}>
                                    <div className="h-3 bg-[#149ddd]" style={{ width: '85%' }}></div>
                                </div>
                            </li>
                        </ul>
                        <ul className={`mt-4 space-y-2 text-base flex-1 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
                        }`}>
                            <li>
                                <div className="skill-percentage-label flex justify-between">
                                    <span className={`font-semibold text-xs ${
                                        theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                                    }`}>ReactJS</span>
                                    <span className={`text-sm ml-2 ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                    }`}>60%</span>
                                </div>
                                <div className={`w-full h-3 ${
                                    theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
                                }`}>
                                    <div className="h-3 bg-[#149ddd]" style={{ width: '60%' }}></div>
                                </div>
                            </li>
                            <li>
                                <div className="skill-percentage-label flex justify-between">
                                    <span className={`font-semibold text-xs ${
                                        theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                                    }`}>NextJS</span>
                                    <span className={`text-sm ml-2 ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                    }`}>60%</span>
                                </div>
                                <div className={`w-full h-3 ${
                                    theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
                                }`}>
                                    <div className="h-3 bg-[#149ddd]" style={{ width: '60%' }}></div>
                                </div>
                            </li>
                            <li>
                                <div className="skill-percentage-label flex justify-between">
                                    <span className={`font-semibold text-xs ${
                                        theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                                    }`}>NodeJS</span>
                                    <span className={`text-sm ml-2 ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                    }`}>50%</span>
                                </div>
                                <div className={`w-full h-3 ${
                                    theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
                                }`}>
                                    <div className="h-3 bg-[#149ddd]" style={{ width: '50%' }}></div>
                                </div>
                            </li>
                            <li>
                                <div className="skill-percentage-label flex justify-between">
                                    <span className={`font-semibold text-xs ${
                                        theme === 'dark' ? 'text-white' : 'text-[#22223b]'
                                    }`}>Tailwind Css</span>
                                    <span className={`text-sm ml-2 ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                    }`}>70%</span>
                                </div>
                                <div className={`w-full h-3 ${
                                    theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
                                }`}>
                                    <div className="h-3 bg-[#149ddd]" style={{ width: '70%' }}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}
