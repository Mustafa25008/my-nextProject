import SearchIcon from "./components/search";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="font-serif">
        <div className="relative w-full h-125">
          {/* Background Image */}
          <Image
            src="/hero-img.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover -z-10"
          />
          <div className="relative z-10 h-full flex flex-col justify-between px-20">
            {/* Header Component */}
            <Header />
            {/* Hero Compoment */}
            <div className="grow flex justify-start items-center px-20">
              <Hero />
            </div>
          </div>
        </div>
        
        
        {/* <Header /> */}
        {/* Search Icon */}
        <div className="p-3 bg-amber-900">
          <SearchIcon />
        </div>
      </div>
    </>
  );
}