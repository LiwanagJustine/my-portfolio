export default function About() {
    return (
        <>
            <div className="about-container min-h-screen w-full p-8 md:p-24 font-[Raleway] bg-gradient-to-br from-[#f7fafd] to-[#e3eaff]">
                <div className="header mb-8 scale-in-time-01">
                    <h2 className="font-bold text-3xl sm:text-4xl text-[#22223b] tracking-tight">About</h2>
                    <div className="border-b-4 border-[#149ddd] w-16 mt-4 rounded"></div>
                </div>
                <div className="content mt-8 scale-in-time-02">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Hi, I'm a curious and creative individual who enjoys exploring how things work, both in life and in tech. Born and raised in Longos, Calumpit, Bulacan, I've always been fascinated by how small ideas can turn into big solutions.
                    </p>
                </div>
                <div className="details mt-12 flex flex-col md:flex-row gap-8 items-center md:items-start scale-in-time-03">
                    <div className="image-cont p-2 bg-white/40 rounded-xl shadow-lg backdrop-blur-md border border-white/30">
                        <img
                            src="/images/justineliwanag04.jpeg"
                            alt="Justine Liwanag"
                            className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-lg object-cover shadow"
                        />
                    </div>
                    <div className="context flex-1 border border-white/30 rounded-xl bg-white/40 shadow-lg p-4 sm:p-6 backdrop-blur-md w-full">
                        <h3 className="font-bold text-xl sm:text-2xl text-[#22223b] mb-2">About my self</h3>
                        <p className="mt-2 text-gray-700 text-base mb-4">
                            I'm a simple and curious person who enjoys learning new things and doing my best in everything I take on. I may not know everything, but I always stay open to growth and improvement. Each day is a chance to learn something new, and I'm grateful for every step of the journey. Here's a little about me:
                        </p>
                        <div className="information flex flex-col sm:flex-row gap-4">
                            <ul className="mt-4 space-y-4 text-gray-800 text-base flex-1">
                                <li>
                                    <span className="font-semibold text-[#149ddd]">Birthday:</span> 13 September 2001
                                </li>
                                <li>
                                    <span className="font-semibold text-[#149ddd]">Address:</span> Longos, Calumpit, Bulacan
                                </li>
                            </ul>
                            <ul className="mt-4 sm:mt-4 space-y-4 text-gray-800 text-base flex-1">
                                <li>
                                    <span className="font-semibold text-[#149ddd]">Languages:</span> English, Filipino
                                </li>
                                <li>
                                    <span className="font-semibold text-[#149ddd]">Fun Fact:</span> Most of my ideas start with a quiet moment and a warm cup of coffee.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}