import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-10 py-2 border-b-4 sm:border-b-8 border-red-900 h-15 sm:h-30">
      {/* LOGO */}
      <div className="flex">
        <Link href={"/"}>
          <Image
            src="/white-logo.png"
            alt="logo"
            width={80}
            height={80}
            className="h-25 w-auto hidden sm:block"
          />
        </Link>
      </div>

      {/* NAV ITEMS */}
      <div className="hidden sm:flex sm:gap-6 lg:gap-24 text-xl font-serif absolute left-1/2 transform -translate-x-1/2">
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

      {/* CONTACT BUTTON */}
      <Link
        href="/contact"
        className="hidden sm:block bg-red-700 hover:bg-red-800 text-white px-8 py-2 rounded-md text-lg font-semibold transition"
      >
        Contact Us
      </Link>

      {/* MOBILE MENU ICON */}
      <div className="sm:hidden absolute right-4 top-3 cursor-pointer">
        <MenuIcon className="text-white" fontSize="large" />
        {/* Swap with <CloseIcon /> when menu is open */}
      </div>
    </nav>
  );
}
