export default function Watching() {

    const animeList = [
        {
            title: "Demon Slayer",
            image: "/images/animes/demon slayer.jpg",
        },
        {
            title: "One Piece",
            image: "/images/animes/one piece.jpg",
        },
        {
            title: "Naruto",
            image: "/images/animes/naruto.jpg",
        },
        {
            title: "Solo Leveling",
            image: "/images/animes/solo leveling.jpg",
        },
        {
            title: "The Time I Got Reincarnated as a Slime",
            image: "/images/animes/Slime.jpg",
        },
        {
            title: "Pokemnon",
            image: "/images/animes/pokemon.jpg",
        },
        {
            title: "Ace of Diamond",
            image: "/images/animes/ace of diamond.jpg",
        },
        {
            title: "Haikyuu!!",
            image: "/images/animes/haikyuu.jpg",
        },
    ];

    return (
        <>
            <div className="about-container min-h-screen w-full p-8 md:p-24 font-[Raleway] bg-gradient-to-br from-[#f7fafd] to-[#e3eaff]">
                <div className="header mb-8 scale-in-time-01">
                    <h2 className="font-bold text-3xl sm:text-4xl text-[#22223b] tracking-tight">Watching Anime</h2>
                    <div className="border-b-4 border-[#149ddd] w-16 mt-4 rounded"></div>
                </div>
                <div className="content mt-8 scale-in-time-02">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Hi, I'm a curious and creative individual who enjoys exploring how things work, both in life and in tech. Born and raised in Longos, Calumpit, Bulacan, I've always been fascinated by how small ideas can turn into big solutions.
                    </p>
                </div>
                <div className="anime-content">
                    <div className="anime-list mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {animeList.map((anime, idx) => (
                            <div
                                key={idx}
                                className="anime-item relative bg-white rounded-2xl border border-[#e0e7ff] shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center w-70 mx-auto"
                            >
                                <div className="relative w-full h-80">
                                    <img
                                        src={anime.image}
                                        alt={anime.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#22223bcc] to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-4">
                                        <h3 className="text-xl font-bold text-white drop-shadow-lg text-center">{anime.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
