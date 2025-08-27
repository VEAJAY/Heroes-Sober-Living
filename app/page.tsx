import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full h-[50vh]">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/hero-image.jpg"
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div>
      </div>

      {/* HERO SECTION */}
      <div className="relative flex justify-center items-center h-full px-6">
        <div className="p-8 md:p-12 border-5 border-red-900 h-160 w-350 flex flex-col justify-center">
          {/* MAIN HEADING */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-wide mb-4 max-w-2xl text-left">
            Providing homes to our heroes and communities in Dallas, Texas.
          </h1>

          {/* SUB-HEADING */}
          <h2 className="text-white text-lg md:text-xl lg:text-2xl font-serif mb-6 max-w-lg text-left">
            Reach out to us for availability, where we can help you with your
            living needs.
          </h2>

          {/* BUTTON */}
          <Link
            href="/contact"
            className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-md text-lg font-semibold transition w-max"
          >
            Reach Out
          </Link>
        </div>
      </div>
    </main>
  );
}
