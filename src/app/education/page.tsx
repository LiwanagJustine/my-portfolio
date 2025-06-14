export default function Education() {
    return (
        <div className="education-container min-h-screen w-full p-8 md:p-24 font-[Raleway] bg-gradient-to-br from-[#f7fafd] to-[#e3eaff]">
            <div className="header mb-8 scale-in-time-01">
                <h2 className="font-bold text-4xl text-[#22223b] tracking-tight">Education</h2>
                <div className="border-b-4 border-[#149ddd] w-16 mt-4 rounded"></div>
            </div>
            <div className="content mt-8 scale-in-time-02">
                <p className="text-gray-700 text-lg leading-relaxed">
                    I hold a Bachelor of Science in Information Technology from Bulacan State University. My education has provided me with a solid foundation in computer science principles, software development, and web technologies.
                </p>
            </div>
            <div className="details mt-12 flex flex-col md:flex-row gap-8 items-center scale-in-time-03">
                <div className="image-cont p-2 bg-white/30 rounded-xl shadow-lg backdrop-blur-md border border-white/30">
                    <img
                        src="/images/justineliwanag02.jpeg"
                        alt="Justine Liwanag"
                        className="w-48 h-48 md:w-64 md:h-64 rounded-lg object-cover shadow"
                    />
                </div>
                <div className="context flex-1 border border-white/20 rounded-xl bg-white/30 shadow-lg p-6 backdrop-blur-md">
                    <h3 className="font-bold text-2xl text-[#22223b] mb-2">Bachelor of Science in Information Technology</h3>
                    <p className="mt-2 text-gray-700 text-base mb-4">
                        Graduated from Bulacan State University, specializing in software development and web technologies.
                    </p>
                    <ul className="mt-6 space-y-4 text-gray-800 text-base">
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