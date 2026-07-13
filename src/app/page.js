import SearchIcon from "./components/search";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Image from "next/image";

export default async function Home() {
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
            <div className="grow flex justify-start items-center px-30">
              <Hero />
            </div>
          </div>
        </div>
        
        {/* About Us */}
        <div className="p-3 bg-[#eaf7ee] h-screen">
          <div className="flex">
            <div></div>
            <div className="text-black">
              <Image
                src="/about-us-img.png"
                alt="About Us"
                width={500}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}