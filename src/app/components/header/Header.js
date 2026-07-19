"use client";
import { useState } from "react";
import Sitelogo from "../Sitelogo";
import SearchIcon from "../search";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] =useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/", label: "About" },
    { href: "/", label: "Services" },
    { href: "/", label: "Testimonials" },
    { href: "/", label: "Contact" },
  ];

  return (
    <header className={`flex justify-between items-center text-white h-20 px-6 md:px-20 shadow-2xl`}>
      <div className="relative h-13 w-13 border-4 border-white rounded-full p-2 transition-all duration-300 ease-in-out hover:scale-110">
        <Link href="/"><Sitelogo /></Link>
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-10 font-serif items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-[#c0da3d] transition-colors duration-300 ease-in-out transform hover:scale-110 inline-block">
                {link.label}
              </Link>
            </li>
          ))}
          <li className="transition-all duration-300 ease-in-out hover:scale-110">
            <SearchIcon />
          </li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="absolute top-20 left-0 w-full bg-gray-800 bg-opacity-90 md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 font-serif">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#c0da3d] transition-colors duration-300 ease-in-out" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <SearchIcon />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
