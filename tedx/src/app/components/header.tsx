"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import images from "@/images/logo-white.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky head top-0 left-0 w-full hadow backdrop-blur-sm bg-white bg-opacity-10  py-4 px-2 rounded-[36px] max-w-7xl mx-auto flex items-center justify-between z-50 mt-5">
      <div className="flex items-center space-x-4 ml-5 lg:ml-10 img">
        <Image
          src={images} 
          alt="Logo"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="lg:hidden flex items-center nav-links ">
        <button
          id="menu-btn"
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <nav className="hidden lg:flex items-center space-x-8 mr-5 lg:mr-10">
        <Link href="/" className="text-white nav-links font-bold hover:text-gray-300">
          ABOUT
        </Link>
        <Link href="/" className="text-white nav-links font-bold hover:text-gray-300">
        SPEAKERS
        </Link>
        <Link href="/" className="text-white font-bold nav-links hover:text-gray-300">
          PERFORMERS
        </Link>
        <Link href="/" className="text-white font-bold nav-links hover:text-gray-300">
         TEAM
        </Link>
        <Link href="/" className="text-white font-bold nav-links hover:text-gray-300">
         GALLARY
        </Link>
        <Link href="/" className="bg-[#EB0028] hover:bg-red-600 nav-links text-white font-bold py-2 px-4 rounded-2xl">
         REGISTER
        </Link>
      </nav>
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full  bg-black bg-opacity-90 flex flex-col items-center py-5 space-y-5 mx-3 lg:hidden`}
      >
        <Link href="/" className="text-white font-bold hover:text-gray-300" onClick={toggleMenu}>
        ABOUT
        </Link>
        <Link href="/" className="text-white font-bold hover:text-gray-300" onClick={toggleMenu}>
        SPEAKERS
        </Link>
        <Link href="/" className="text-white font-bold hover:text-gray-300" onClick={toggleMenu}>
        PERFORMERS
        </Link>
        <Link href="/" className="text-white font-bold hover:text-gray-300" onClick={toggleMenu}>
        TEAM
        </Link>
        <Link href="/" className="text-white font-bold hover:text-gray-300" onClick={toggleMenu}>
        GALLARY
        </Link>
        <Link href="/" className="bg-[#EB0028] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-[36px]" onClick={toggleMenu}>
          REGISTER
        </Link>
      </nav>
    </header>
  );
}
