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
    <div className="bg-black min-h-screen text-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 sm:px-12 py-4 bg-gradient-to-b from-black/80 to-transparent fixed w-full z-20">
        <h1 className="font-netflix text-red-600 text-6xl tracking-[0.3em] scale-y-125">
          NETFLIX
        </h1>

        <div className="hidden md:flex items-center gap-6 text-sm">
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
          {/* Stranger Things Title Logo */}
          <h2 className="w-[320px] sm:w-[460px] mb-4 text-red-600 text-4xl font-bold">Stranger Things</h2>

          <p className="text-base sm:text-lg text-gray-300 mb-6">
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, supernatural forces and a strange little girl.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
              ▶ Play
            </button>
            <button className="bg-gray-700/70 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-600/70">
              ℹ More Info
            </button>
          </div>
        </div>
      </div>

      {/* MOVIE ROWS */}
      <div className="px-6 sm:px-12 pb-10">
        <h3 className="text-xl font-semibold mb-3">Trending Now</h3>

        <div className="overflow-hidden">
          <div className="flex gap-4 overflow-x-auto py-2 scrollbar-hide">
            {movies.map((url, index) => (
              <div
                key={index}
                className="min-w-[160px] sm:min-w-[190px] h-[100px] sm:h-[140px] bg-gray-700 rounded-md overflow-hidden flex-shrink-0"
              >
                <img
                  src={url}
                  alt="movie"
                  className="h-full w-full object-cover"
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
