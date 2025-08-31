import Image from "next/image";
import Link from "next/link";
import Message from "../components/message";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function About() {
  return (
    <div className="w-full">
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
            <div className="sm:hidden w-28 my-2 border-b-2 border-white"></div>

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

      {/* BENEFITS */}
      <section className="flex flex-col justify-center items-center sm:mt-32">
        <h1 className="mt-12 text-2xl text-center sm:text-5xl font-serif font-semibold">
          Start Health and Wellness Today
        </h1>
        <div className="w-16 mt-3 border-b-4 border-gray-900"></div>
        <p className="flex sm:text-2xl p-6 max-w-2xl text-center">
          We are here to help keep your journey of health and wellness with our
          carring services and staff.
        </p>

        <div className="flex flex-col justify-center text-white bg-gray-900 sm:w-[1000px] w-[100%] sm:h-[400px] p-12 sm:mt-16">
          <p className="text-left sm:text-lg">
            <i>Heroes & Sober Living</i> resides in the heart of Greenville,
            Texas, started by a small family who wanted to give back to their
            community and the members that have served. Our residents are
            thriving at the benefits that we provide while keeping an engaged,
            open environment. Don't hesitate to inquire about any of our
            services.
          </p>
          <div className="sm:w-220 my-12 mb-4 border-b-2 border-white"></div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg mt-4">
            <li className="flex items-center p-4">
              <ArrowForwardIcon className="text-white mr-2" />
              Transportation
            </li>
            <li className="flex items-center p-4">
              <ArrowForwardIcon className="text-white mr-2" />
              Bedding
            </li>
            <li className="flex items-center p-4">
              <ArrowForwardIcon className="text-white mr-2" />
              Food Meals
            </li>
            <li className="flex items-center p-4">
              <ArrowForwardIcon className="text-white mr-2" />
              Merchandise
            </li>
            <li className="flex items-center p-4">
              <ArrowForwardIcon className="text-white mr-2" />
              Donations
            </li>
            <li className="flex items-center p-4">
              <ArrowForwardIcon className="text-white mr-2" />
              Visitation
            </li>
          </ul>
        </div>

        <p className="text-center sm:mt-18 mt-4 max-w-2xl p-4 sm:text-2xl">
          We are located just 40 minutes east of central dallas, Greenville,
          Texas in a nice and inviting town center. We can't wait for you to
          have a new home
        </p>

        <Link
          href="/living"
          className="bg-gray-900 hover:bg-gray-700 text-white text-xl sm:mt-12 m-6 py-3 px-6 sm:px-32 transition rounded-sm flex items-center"
        >
          <span className="block sm:hidden">Learn More</span>
          <span className="hidden sm:block">
            Learn More About Our Living Options to Begin
          </span>
          <ArrowForwardIcon className="text-white ml-2" />
        </Link>
      </section>

      {/* ABOUT OUR RESIDENTS */}
      <section className="sm:my-48 p-0 sm:p-12 flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-20 max-w-8xl mx-auto">
        {/* BACKGROUND IMAGE */}
        <div className="relative w-full md:w-[700px] flex-shrink-0">
          <Image
            src="/elderly-image.jpg"
            alt="family"
            width={700}
            height={700}
            style={{ width: "100%", height: "auto" }} // scales with container
            sizes="(max-width: 768px) 100vw, 700px"
            className="rounded-none md:rounded-lg object-cover sm:shadow-[30px_30px_0_rgba(0,0,7,0.1)]"
          />
        </div>

        <div className="sm:text-center md:text-left px-6 md:px-0 mt-6 md:mt-0">
          <h1 className="text-3xl max-w-3xl sm:text-5xl text-gray-900 font-serif font-semibold mb-4">
            Become A Part of Our Family, At Heroes & Sober Living
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-lg">
            Our residents come from a myriad of backgrounds such as veterans,
            first responders, and individuals seeking a new path in life. Each
            person brings their own story and strength, creating a unique and
            supportive atmosphere.
          </p>
          <p className="text-xl sm:text-2xl sm:mt-6 text-gray-700 max-w-lg">
            We serve an inclusive community built on respect, accountability,
            and growth, ensuring that everyone feels valued and understood.
          </p>
          <p className="text-xl sm:text-2xl sm:mt-6 text-gray-700 max-w-lg">
            We hope that you choose to take the first step with us and
            experience a safe, structured environment where you can thrive.
          </p>
        </div>
      </section>

      {/* VISITATION POLICY */}
      <section className="flex flex-col justify-center items-center">
        <h1 className="font-serif font-bold text-3xl mt-12 sm:text-5xl mb-8">
          Visitation Policy
        </h1>
        <div className="w-16 border-b-4 border-gray-900"></div>
        <div className="flex justify-center text-white bg-red-900 mt-8 sm:w-[1200px] w-full sm:h-auto p-2 sm:p-6 sm:mb-16 relative">
          <div className="flex flex-col items-center justify-between border-4 p-12 sm:p-22 border-white">
            <div className="relative z-10">
              <Image
                src="/white-logo.png"
                alt="logo"
                width={220}
                height={220}
                className="w-32 sm:w-44 md:w-56 h-auto"
              />
            </div>

            <ul className="list-disc list-outside text-white text-lg mt-8 sm:text-2xl space-y-2">
              <li>
                Visiting hours are from 10:00 AM to 8:00 PM daily. All visitors
                must enter through the main entrance only. Each resident may
                have up to two visitors in their room at a time.
              </li>
              <li>All visitors must sign in and sign out at the front desk.</li>
              <li>
                Children under 12 must be accompanied by an adult at all times.
              </li>
              <li>
                Please respect quiet hours and refrain from loud conversations
                in resident areas.
              </li>
              <li>
                Photography or recording of residents requires prior permission.
              </li>
              <li>
                Visitors exhibiting illness or symptoms of contagious conditions
                may be asked to reschedule.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
