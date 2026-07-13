import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Image from "next/image";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="font-serif">
        <div className="relative w-full h-screen">
          {/* Background Image */}
          <Image
            src="/hero-img.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover -z-10"
          />
          <div className="relative z-10 h-full flex flex-col justify-between">
            {/* Header Component */}
            <Header />
            
            {/* Hero Compoment */}
            <div className="grow flex justify-start items-center px-25">
              <Hero />
            </div>
          </div>
        </div>
        
        {/* About Us */}
        <div className="bg-[#F8F1EA]">
          <div className="flex items-center justify-between px-20 gap-10 p-12 h-120">
            <div className="flex flex-col gap-5 w-1/2 h-full p-4">
              <span className="text-[#616913] font-bold text-xs md:text-sm uppercase">About US</span>
              <h1 className="text-[#102420] text-4xl font-bold">
                We Create Experiences
                <br />
                That Stay With You
              </h1>
              <p className="text-[#616913] text-2xl text-justify">
                We are passionate about travel and dedicated to helping you explore the world in meaningful ways. From stunning landscape to rich
                cultures, we craft journey that insipres and connect.
              </p>
              <button className="bg-[#16302b] hover:bg-[#102420] text-white flex items-center gap-3 w-fit transition-colors group font-semibold px-7 py-4 rounded-2xl">
                <span>Learn More</span>
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
            {/* Image */}
            <div className="w-1/2 h-full p-6">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="/about-img.png"
                  alt="Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white">
          <div className="flex flex-col items-center p-10 gap-2">
            <span className="text-[#616913] font-bold text-xs md:text-sm uppercase">Testimonials</span>
            <h1 className="text-[#102420] text-4xl font-bold">What Our Travelers Say</h1>
            <div className="flex justify-around w-full p-6">
              {/* Person 1 */}
              <div className="flex flex-col p-4 items-center w-90 gap-4 border-2 rounded-xl shadow-xl">
                {/* Image */}
                <div className="w-25 h-25">
                  <div className="relative w-full h-full overflow-hidden rounded-full">
                    <Image
                    src="/hero-img.png"
                    alt="Profile Image"
                    fill
                    className="object-cover"
                    />
                  </div>
                </div>
                {/* feedback */}
                <div className="text-[#616913] text-xl flex flex-col items-center justify-center text-center">
                  <p>&quot;The trip was absolutely amazing! Every detail was perfect and the memories will last forever.&quot;
                    <br /><br />
                    Sophia Martinez
                  </p>
                  <button className="bg-[#16302b] hover:bg-[#102420] text-white rounded-full mt-4 h-10 w-10 flex justify-center items-center">i</button>
                    
                </div>
              </div>

              {/* Person 2 */}
              <div className="flex flex-col p-4 items-center w-90 gap-4 border-2 rounded-xl shadow-xl">
                {/* Image */}
                <div className="w-25 h-25">
                  <div className="relative w-full h-full overflow-hidden rounded-full">
                    <Image
                    src="/hero-img.png"
                    alt="Profile Image"
                    fill
                    className="object-cover"
                    />
                  </div>
                </div>
                {/* feedback */}
                <div className="text-[#616913] text-xl flex flex-col items-center justify-center text-center">
                  <p>&quot;The trip was absolutely amazing! Every detail was perfect and the memories will last forever.&quot;
                    <br /><br />
                    Sophia Martinez
                  </p>
                  <button className="bg-[#16302b] hover:bg-[#102420] text-white rounded-full mt-4 h-10 w-10 flex justify-center items-center">i</button>
                </div>
              </div>

              {/* Person 3 */}
              <div className="flex flex-col p-4 items-center w-90 gap-4 border-2 rounded-xl shadow-xl">
                {/* Image */}
                <div className="w-25 h-25">
                  <div className="relative w-full h-full overflow-hidden rounded-full">
                    <Image
                    src="/hero-img.png"
                    alt="Profile Image"
                    fill
                    className="object-cover"
                    />
                  </div>
                </div>
                {/* feedback */}
                <div className="text-[#616913] text-xl flex flex-col items-center justify-center text-center">
                  <p>&quot;The trip was absolutely amazing! Every detail was perfect and the memories will last forever.&quot;
                    <br /><br />
                    Sophia Martinez
                  </p>
                  <button className="bg-[#16302b] hover:bg-[#102420] text-white rounded-full mt-4 h-10 w-10 flex justify-center items-center">i</button>
                    
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#102420]">
          <div className="px-20">
            <Footer/>
          </div>
          
        </div>
        
      </div>
    </>
  );
}