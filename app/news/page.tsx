import Link from "next/link";
import Image from "next/image";
import Message from "../components/message";

export default function NewsLetter() {
  return (
    <>
      <section className="relative w-full h-[50vh]">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/news-image.jpg"
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
              What's New?
            </h1>

            {/* SUB-HEADING */}
            <h2 className="text-white text-sm sm:text-lg md:text-xl lg:text-3xl font-serif mb-6 max-w-4xl text-center">
              View our updates on new and upcoming services in our news letter.
              Stay up to date and give us any feedback!
            </h2>

            {/* BUTTON */}
            <Link
              href="/residents"
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 sm:px-8 sm:py-3 rounded-md text-sm sm:text-lg font-semibold transition w-max"
            >
              Let Us Hear From You
            </Link>
          </div>
        </div>
      </section>
      <Message title="Attention!" />
    </>
  );
}
