export default function Hero() {
  return (
    <div className="w-full">
      <div className="max-w-2xl bg-[#102420] p-6 rounded-2xl flex flex-col gap-4 w-2xl">
        <span className="text-[#C2BB45] tracking-widest font-bold text-xs md:text-sm uppercase block mb-4">
          Explore the World
        </span>
        <h1 className="text-6xl font-bold">
          Journey Beyond
          <br />
          The Ordinary
        </h1>
        <p className="text-lg">
          Discover breathtabing destinations, unforgettable experiences, and
          memories that will last a lifetime.
        </p>
        <button className="bg-[#c0da3d] hover:bg-[#acc62e] transition-colors text-black font-semibold px-7 py-4 rounded-2xl flex items-center gap-3 text-sm md:text-base shadow-lg group">
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
