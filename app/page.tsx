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
          className="brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div>
      </div>

      {/* HERO SECTION */}
      <div className="relative flex justify-center items-center h-full px-6">
        <div className="p-8 mt-20 md:p-12 border-5 border-red-900 h-200 w-360 flex flex-col justify-center">
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

      {/* LIVING OPTIONS SPLASHSCREEN */}
      <div className="mt-20 flex flex-col items-center text-center gap-4">
        <h1 className="m-6 font-serif font-semibold text-4xl">
          Living Your Way
        </h1>
        <h3 className="text-xl max-w-4xl">
          Explore the living options that we provide that fits your specific
          needs. We want to give you confidance that our services are in line
          with your pricing expectations.
        </h3>

        {/* LIVING OPTION CARD */}
        <div className="relative m-8 px-32 py-12 border-3 border-b-[56px] border-gray-900 font-serif">
          <h2 className="text-4xl">Community Living Option</h2>
          <p className="text-2xl font-sans">Starting at</p>
          <h1 className="text-8xl font-bold mt-8">
            $800/<span className="text-6xl font-normal">mo</span>
          </h1>

          <Link
            href="/"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-42px] text-white text-xl font-sans hover:text-gray-400 transition-colors duration-200"
          >
            More Options
          </Link>
        </div>

        {/* LIVING OPTION CARD */}
        <div className="relative m-8 px-32 py-12 border-3 border-b-[56px] border-gray-900 font-serif">
          <h2 className="text-4xl">Honorary Living Option</h2>
          <p className="text-2xl font-sans">Starting at</p>
          <h1 className="text-8xl font-bold mt-8">
            $1695/<span className="text-6xl font-normal">mo</span>
          </h1>

          <Link
            href="/"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-42px] text-white text-xl font-sans hover:text-gray-400 transition-colors duration-200"
          >
            More Options
          </Link>
        </div>
      </div>
    </main>
  );
}
