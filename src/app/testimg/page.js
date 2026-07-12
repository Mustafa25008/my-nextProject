import Image from "next/image";

export default function TestImage() {
  return (
    <>
      <div className="flex justify-around pt-5 pb-5 border-2 bg-gray-600 border-yellow-500">
        <div className="flex flex-col text-center gap-7">
          Container 1 (contain)
          <div className="relative w-75 h-75 bg-red-700 border-2 rounded-full">
            <Image
              src="/logo.png"
              alt="logo"
              width={300}
              height={300}
            // fill
              className="object-fill"
            />
          </div>
        </div>
        <div className="flex flex-col text-center gap-7">
          Container 2 (cover)
          <div className="relative w-75 h-75 bg-green-700 border-2">
            <Image
              src="/war.jpg"
              alt="Mountain"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col text-center gap-7">
          Container 3 (fill)
          <div className="relative w-75 h-75 bg-blue-700 border-2 rounded-1xl shadow-2xl">
            <Image
              src="/war.jpg"
              alt="Mountain"
              fill
              className="object-fill rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
