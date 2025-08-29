import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-10 py-20 border-t-8 border-red-900">
      {/* COLUMNS */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* NAV LINKS */}
        <div className="flex flex-col items-start space-y-4 text-2xl font-serif">
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
        <div className="flex flex-col text-left space-y-2 text-lg font-serif">
          <p>veteranssoberliving@gmail.com</p>
          <p className="font-sans">(469) 456-6032</p>
          <p className="font-sans">(903) 441-7512</p>

          <h3>Greenville, Texas 75401</h3>
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
