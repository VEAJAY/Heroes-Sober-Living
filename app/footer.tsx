import Link from "next/link";
import Image from "next/image";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import LocationOn from "@mui/icons-material/LocationOn";
import Language from "@mui/icons-material/Language";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-10 py-20 border-t-8 border-red-900">
      {/* COLUMNS */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* NAV LINKS */}
        <div className="flex flex-col items-center sm:items-start space-y-4 text-2xl font-serif">
          <Link
            href="/about"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/residents"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Residents
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Contact Us
          </Link>
          <Link
            href="/privacy"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>

        {/* LOGO */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/white-logo.png"
              alt="logo"
              width={160}
              height={160}
              className="w-auto"
            />
          </Link>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col text-left space-y-4 text-lg font-serif">
          <div className="flex items-center space-x-3">
            <Email className="text-white !w-6 !h-6" />
            <p>veteranssoberliving@gmail.com</p>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="text-white !w-6 !h-6" />
            <a href="tel:+14694566032" className="font-sans hover:underline">
              Antwoine Burley (469) 456-6032
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="text-white !w-6 !h-6" />
            <a href="tel:+19034417512" className="font-sans hover:underline">
              LaWayne Rogers (903) 441-7512
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <LocationOn className="text-white !w-6 !h-6" />
            <h3>Fort Worth, Texas 76109</h3>
          </div>

          <div className="flex items-center space-x-3">
            <Language className="text-white !w-6 !h-6" />
            <h3>www.heroessoberliving.com</h3>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-gray-400 text-sm mt-12">
        &copy; {new Date().getFullYear()} Heroes & Sober Living. All rights
        reserved.
      </p>
    </footer>
  );
}
