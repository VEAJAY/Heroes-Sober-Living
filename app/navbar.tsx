import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-10 py-2 border-b-8 border-red-900 h-30 relative">
      {/* LOGO */}
      <div className="flex">
        <Link href={"/"}>
          <Image
            src="/white-logo.png"
            alt="logo"
            width={80}
            height={80}
            className="h-25 w-auto"
          />
        </Link>
      </div>

      {/* NAV ITEMS */}
      <div className="flex gap-12 text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
        <Link
          href="/"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          About
        </Link>
      </div>

      {/* CONTACT BUTTON */}
      <Link
        href="/contact"
        className="bg-red-700 hover:bg-red-800 text-white px-8 py-2 rounded-md text-lg font-semibold transition"
      >
        Contact Us
      </Link>
    </nav>
  );
}
