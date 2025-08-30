"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed sm:static top-0 left-0 w-full bg-gray-900 text-white flex items-center justify-between px-4 sm:px-10 py-2 border-b-4 sm:border-b-8 border-red-900 h-15 sm:h-30 z-50">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/white-logo.png"
            alt="logo"
            width={80}
            height={80}
            className="h-25 w-auto hidden sm:block"
          />
        </Link>
        <Link href="/" scroll={false}>
          <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <h1 className="font-serif font-bold text-md sm:hidden">
              Heroes & Sober Living
            </h1>
          </div>
        </Link>
      </div>

      {/* DESKTOP NAV LINKS */}
      <div className="hidden sm:flex sm:gap-6 lg:gap-24 text-xl font-serif sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
        <Link
          href="/about"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="/living"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          Living Options
        </Link>
        <Link
          href="/news"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          News Letter
        </Link>
        <Link
          href="/residents"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          Residents
        </Link>
      </div>

      <Link
        href="/contact"
        className="hidden sm:block bg-red-700 hover:bg-red-800 text-white px-8 py-2 rounded-md text-lg font-semibold transition"
      >
        Contact Us
      </Link>

      {/* MENU ICONS */}
      <div className="sm:hidden z-50 cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? (
          <CloseIcon className="text-white" fontSize="large" />
        ) : (
          <MenuIcon className="text-white" fontSize="large" />
        )}
      </div>

      {/* MOBILE NAV LINKS */}
      <div
        className={`
          fixed top-0 right-0 h-full w-3/4 bg-gray-900 border-l-4 border-red-700 z-40 transform
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300 ease-in-out
          flex flex-col items-start p-6 gap-6`}
      >
        {/* BACKGROUND IMAGE */}
        <Image
          src="/white-logo.png"
          alt="panel image"
          fill
          style={{
            objectFit: "contain",
            transform: "translate(40%, 22%) scale(2.5)",
          }}
          className="absolute top-0 left-0 w-full h-full opacity-20 sm:opacity-0 -z-10"
        />

        <Link
          href="/about"
          onClick={toggleMenu}
          className="text-white text-xl font-serif hover:text-gray-400"
        >
          About
        </Link>
        <Link
          href="/living"
          onClick={toggleMenu}
          className="text-white text-xl font-serif hover:text-gray-400"
        >
          Living Options
        </Link>
        <Link
          href="/news"
          onClick={toggleMenu}
          className="text-white text-xl font-serif hover:text-gray-400"
        >
          News Letter
        </Link>
        <Link
          href="/residents"
          onClick={toggleMenu}
          className="text-white text-xl font-serif hover:text-gray-400"
        >
          Residents
        </Link>
        <Link
          href="/contact"
          onClick={toggleMenu}
          className="text-white text-xl font-serif hover:text-gray-400"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
