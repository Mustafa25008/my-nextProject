import Image from "next/image";

export default function Sitelogo(){
    return (
        <Image
        src="/logo1.png" // Path relative to public folder (or external URL)
        alt="Logo"
        fill
        priority // Loads the image faster if it is above the fold
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-full object-contain object-top p-1"
        />
    );
}