import Image from "next/image";

export default function Sitelogo(){
    return (
        <Image
        src="/logo.png" // Path relative to public folder (or external URL)
        alt="Logo"
        fill
        priority // Loads the image faster if it is above the fold
        className="rounded-full object-contain object-top p-1"
        />
    );
}