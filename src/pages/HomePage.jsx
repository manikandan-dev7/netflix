import React from "react";

// IMPORT LOCAL ASSETS (make sure these files exist!)
import StrangerBg from "../assets/stranger-bg.jpg";
import StrangerLogo from "../assets/stranger-logo.png";

const HomePage = () => {
  const movies = [
    "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", // Avengers
    "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", // Interstellar
    "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg", // La La Land
    "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", // Joker
    "https://image.tmdb.org/t/p/w500/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg", // Free Guy
  ];

  return (
    <div className="min-h-screen overflow-x-hidden text-white bg-black">

      {/* NAVBAR */}
      <nav className="fixed z-20 flex items-center justify-between w-full px-6 py-4 sm:px-12 bg-gradient-to-b from-black/80 to-transparent">
        <h1 className="font-netflix text-red-600 text-6xl tracking-[0.3em] scale-y-125">
          NETFLIX
        </h1>

        <div className="items-center hidden gap-6 text-sm md:flex">
          <button className="hover:underline">Home</button>
          <button className="hover:underline">TV Shows</button>
          <button className="hover:underline">Movies</button>
          <button className="hover:underline">Latest</button>
          <button className="hover:underline">My List</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div
        className="h-[90vh] bg-cover bg-center flex items-end pb-20 px-6 sm:px-12 pt-24 relative"
        style={{
          backgroundImage: `url(${StrangerBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="z-10 max-w-xl">
          <h2 className="w-[320px] sm:w-[460px] mb-4 text-red-600 text-4xl font-bold">Stranger Things</h2>

          <p className="mb-6 text-base text-gray-300 sm:text-lg">
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, supernatural forces and a strange little girl.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 font-semibold text-black bg-white rounded-md hover:bg-gray-200">
              ▶ Play
            </button>
            <button className="px-6 py-3 font-semibold text-white rounded-md bg-gray-700/70 hover:bg-gray-600/70">
              ℹ More Info
            </button>
          </div>
        </div>
      </div>

      {/* MOVIE ROWS */}
      <div className="px-6 pb-10 sm:px-12">
        <h3 className="mb-3 text-xl font-semibold">Trending Now</h3>

        <div className="overflow-hidden">
          <div className="flex gap-4 py-2 overflow-x-auto scrollbar-hide">
            {movies.map((url, index) => (
              <div
                key={index}
                className="min-w-[160px] sm:min-w-[190px] h-[100px] sm:h-[140px] bg-gray-700 rounded-md overflow-hidden flex-shrink-0"
              >
                <img
                  src={url}
                  alt="movie"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
