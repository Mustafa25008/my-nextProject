export default function Hero() {
  return (
    <div className="w-full mt-8 md:mt-0 px-4 sm:px-6 lg:px-8">
      <div className="transition-all duration-300 ease-in-out w-full max-w-2xl mx-auto md:mx-0 bg-[#102420]/90 p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col gap-4 sm:gap-6 shadow-2xl text-white text-center md:text-left">
        <span className="text-[#c0da3d] tracking-widest font-bold text-xs md:text-sm uppercase block mb-2">
          Explore the World
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold text-shadow-lg">
          Journey Beyond
          <br />
          The Ordinary
        </h1>
        <p className="text-lg sm:text-2xl mb-4">
          Discover breathtabing destinations, unforgettable experiences, and
          memories that will last a lifetime.
        </p>
        <button className="bg-[#c0da3d] hover:bg-[#acc62e] transition-all duration-300 ease-in-out hover:scale-105 text-black font-semibold px-7 py-4 rounded-2xl flex items-center gap-3 text-sm md:text-base shadow-lg group w-fit mx-auto md:mx-0">
          <span>Explore Now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
