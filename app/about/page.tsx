import Image from "next/image";
import Link from "next/link";
import Message from "../components/message";

export default function About() {
  return (
    <>
      <section className="relative w-full h-[50vh]">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/family-image.jpg"
            alt="hero"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-20 sm:brightness-30"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div> */}
        </div>

        {/* HERO SECTION */}
        <div className="relative flex justify-center items-center h-full px-6">
          <div className="p-8 mt-20 md:p-12 lg:border-5 lg:border-red-900 h-200 w-360 flex flex-col items-center text-center justify-center">
            {/* MAIN HEADING */}
            <h1 className="text-white text-lg sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-wide sm:mb-10 max-w-2xl text-left">
              Our Mission
            </h1>

            {/* SUB-HEADING */}
            <h2 className="text-white text-sm sm:text-lg md:text-xl lg:text-3xl font-serif mb-6 max-w-4xl text-center">
              Our mission is to provide a clean and safe living environment for
              veterans and sober living. We are a loving family with a goal to
              help families find a warm and welcoming home for their loved ones.
            </h2>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 sm:px-8 sm:py-3 rounded-md text-sm sm:text-lg font-semibold transition w-max"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
      <Message title="Attention!" />
    </>
  );
}
