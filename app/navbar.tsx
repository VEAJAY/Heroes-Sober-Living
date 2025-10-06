"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

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
        {/* <Link
          href="/residents"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          Residents
        </Link> */}
      </div>

      {/* DESKTOP CONTACT */}
      <Link
        href="/contact"
        className="hidden sm:block bg-red-700 hover:bg-red-800 text-white px-8 py-2 rounded-md text-lg transition"
      >
        Contact Us
      </Link>

      {/* MOBILE MENU ICON */}
      <div className="sm:hidden z-50 cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? (
          <CloseIcon className="text-white" fontSize="large" />
        ) : (
          <MenuIcon className="text-white" fontSize="large" />
        )}
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        )}
      </AnimatePresence>

      {/* MOBILE NAV PANEL */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-3/4 bg-gray-900 border-l-4 border-red-700 z-40 flex flex-col items-start p-6 gap-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
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
              onClick={() => setMenuOpen(false)}
              className="text-white text-xl font-serif hover:text-gray-400"
            >
              About
            </Link>
            <Link
              href="/living"
              onClick={() => setMenuOpen(false)}
              className="text-white text-xl font-serif hover:text-gray-400"
            >
              Living Options
            </Link>
            <Link
              href="/news"
              onClick={() => setMenuOpen(false)}
              className="text-white text-xl font-serif hover:text-gray-400"
            >
              News Letter
            </Link>
            {/* <Link
              href="/residents"
              onClick={() => setMenuOpen(false)}
              className="text-white text-xl font-serif hover:text-gray-400"
            >
              Residents
            </Link> */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-white text-xl font-serif hover:text-gray-400"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
