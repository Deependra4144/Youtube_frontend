import Videocard from "./Videocard"

function Hero() {
    return (
        <div>
            <nav className="sticky top-12 bg-white flex flex-nowrap gap-4 py-2 px-4">
                <button className="bg-gray-200 px-5 transition-all duration-200 border hover:scale-105 py-1 rounded-full">All</button>
                <button className="hover:bg-gray-200 px-5 transition-all duration-200 border hover:scale-105 py-1 rounded-full">Music</button>
                <button className="hover:bg-gray-200 px-5 transition-all duration-200 border hover:scale-105 py-1 rounded-full">Comedy</button>
            </nav>

            {/* video section */}
            <div className="px-6 py-4 p grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((video, i) => {
                    return <Videocard key={i} />
                })}
            </div>
        </div>
    )
}

export default Hero
