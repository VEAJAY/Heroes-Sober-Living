import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
            <div className="sm:hidden w-28 my-2 border-b-2 border-white"></div>

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

      {/* NEWS LETTER DOWNLOAD */}
      <section className="flex flex-col justify-center items-center sm:mt-18">
        <div className="flex flex-col justify-center text-white bg-gray-900 sm:w-[1000px] w-[100%] sm:h-[400px] p-3 sm:p-12 sm:mt-16 sm:shadow-2xl shadow-black/50">
          <div className="flex flex-col justify-center items-center text-center border-2 sm:border-4 p-6 sm:p-12 border-white">
            <h1 className="font-serif font-bold text-2xl">
              Always Keep in Touch
            </h1>
            <div className="w-45 mt-4 mb-4 border-b-2 border-white"></div>
            <p className="sm:text-2xl">
              Make sure you check back here periodically for our newsletter to
              keep up with the latest happenings within our community. We
              produce a new issue just about every month on resident life, and
              need-to-know information for managing resident accounts. Be sure
              to read the privacy policy, and get your copy below!
            </p>
          </div>
        </div>

        <Link
          href="/news"
          className="bg-gray-900 hover:bg-gray-700 text-white text-xl sm:my-12 m-6 py-3 px-6 sm:px-32 transition rounded-sm flex items-center"
        >
          <span className="block sm:hidden">Coming Soon!</span>
          <span className="hidden sm:block">
            No News Yet! Check Back Soon For Our News Letter!
          </span>
          <ArrowForwardIcon className="text-white ml-2" />
        </Link>
      </section>
    </>
  );
}
