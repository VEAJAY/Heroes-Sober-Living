"use client";
import Image from "next/image";
import Link from "next/link";
import Star from "@mui/icons-material/Star";

export default function Home() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full h-[50vh]">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="Hero"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-70 sm:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div>
        </div>

        {/* HERO CONTENT */}
        <div className="relative flex justify-center items-center h-full px-6">
          <div className="p-8 mt-20 md:p-12 lg:border-5 lg:border-red-900 h-200 w-360 flex flex-col justify-center items-center md:items-start">
            {/* MAIN HEADING */}
            <h1 className="text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl font-serif font-bold tracking-wide mb-2 sm:mb-4 max-w-xs sm:max-w-2xl text-center md:text-left">
              Providing homes to our heroes and communities in Dallas, Texas.
            </h1>
            <div className="sm:hidden w-28 mt-1 mb-4 border-b-2 border-white"></div>

            {/* SUB-HEADING */}
            <h2 className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-serif mb-2 sm:mb-4 max-w-xs sm:max-w-lg text-center md:text-left">
              Reach out to us for availability, where we can help you with your
              living needs.
            </h2>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base font-semibold transition w-max"
            >
              Reach Out
            </Link>
          </div>
        </div>
      </section>

      {/* LIVING OPTIONS SPLASHSCREEN */}
      <section className="mt-8 sm:mt-20 flex flex-col items-center text-center gap-4">
        <h1 className="sm:mt-6 font-serif font-semibold text-2xl sm:text-5xl">
          Living Your Way
        </h1>
        <div className="w-16 border-b-4 border-gray-900"></div>
        <h3 className="sm:mt-8 text-md p-6 sm:text-xl max-w-4xl">
          Explore the living options that we provide that fits your specific
          needs. We want to give you confidance that our services are in line
          with your pricing expectations.
        </h3>

        {/* LIVING OPTION CARD */}
        <div className="relative m-8 px-6 py-6 sm:px-32 sm:py-12 border-2 border-b-[56px] border-gray-900 font-serif">
          <h2 className="text-xl sm:text-4xl">Community Living Option</h2>
          <p className="text-md sm:text-2xl font-sans">Starting at</p>
          <h1 className="text-6xl sm:text-8xl font-bold sm:mt-8">
            $800/<span className="text-3xl sm:text-6xl font-normal">mo</span>
          </h1>

          <Link
            href="/living"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-42px] text-white sm:text-xl font-sans hover:text-gray-400 transition-colors duration-200"
          >
            More Options
          </Link>
        </div>

        {/* LIVING OPTION CARD */}
        <div className="relative m-8 px-6 py-6 sm:px-32 sm:py-12 border-2 border-b-[56px] border-gray-900 font-serif">
          <h2 className="text-xl sm:text-4xl">Honorary Living Option</h2>
          <p className="text-md sm:text-2xl font-sans">Starting at</p>
          <h1 className="text-6xl sm:text-8xl font-bold sm:mt-8">
            $1695/<span className="text-3xl sm:text-6xl font-normal">mo</span>
          </h1>

          <Link
            href="/living"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-42px] text-white sm:text-xl font-sans hover:text-gray-400 transition-colors duration-200"
          >
            More Options
          </Link>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="mt-24 bg-gray-900 flex flex-col text-center items-center justify-center">
        <h1 className="mt-18 text-3xl sm:text-5xl text-white font-serif font-semibold relative inline-block">
          Amenities
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-white"></span>
        </h1>
        <h3 className="mt-12 px-6 sm:text-xl text-white sm:max-w-2xl">
          Enjoy some of our amenities that we offer such as transportation
          assistance, food assistance, and a warm and welcoming common area.
        </h3>

        {/* GRID WRAPPER */}
        <div className="my-16 mx-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AMENITIES CARD */}
          <div className="flex flex-col bg-[#fbf9f3] rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
            <Image
              src="/caretaker-image.jpg"
              alt="caretaker"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-7 flex flex-col gap-4">
              <h3 className="text-xl font-semibold font-serif">
                Transportation
              </h3>
              <p className="text-gray-700 sm:text-2xl">
                Our transportation services are designed to make travel simple
                and convenient for all residents. Whether attending medical
                appointments, completing errands, or enjoying community events,
                our dependable and safe transportation options ensure that
                everyone can move around with ease. By providing reliable rides,
                we help residents maintain an active lifestyle and preserve
                their independence, giving them peace of mind and the confidence
                to participate fully in daily life.
              </p>
            </div>
          </div>

          {/* AMENITIES CARD */}
          <div className="flex flex-col bg-[#fbf9f3] rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
            <Image
              src="/breakfast-image.jpg"
              alt="breakfast"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-7 flex flex-col gap-4">
              <h3 className="text-xl font-semibold font-serif">
                Food Services
              </h3>
              <p className="text-gray-700 sm:text-2xl">
                We offer a variety of nutritious meals and snacks tailored to
                meet the dietary needs of our residents. Our food assistance
                program guarantees that every individual has access to
                well-balanced, wholesome meals, supporting overall health and
                wellness. By taking the stress out of meal planning, we help
                residents enjoy flavorful, nourishing food daily, promoting
                energy, vitality, and a sense of comfort in knowing that their
                nutritional needs are consistently met.
              </p>
            </div>
          </div>

          {/* AMENITIES CARD */}
          <div className="flex flex-col bg-[#fbf9f3] rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
            <Image
              src="/common-home-image.jpg"
              alt="common-home"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-7 flex flex-col gap-4">
              <h3 className="text-xl font-semibold font-serif">Common Area</h3>
              <p className="text-gray-700 sm:text-2xl">
                Our welcoming common area serves as a hub for relaxation,
                socialization, and connection among residents. With cozy
                seating, engaging recreational activities, and a warm, friendly
                atmosphere, it encourages interaction and the development of
                meaningful relationships. This inviting space helps foster a
                sense of community and belonging, giving everyone who lives in
                our group home a place to unwind, connect, and feel truly at
                home in an environment that values comfort, companionship, and
                engagement.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-white font-serif px-8 sm:text-2xl max-w-2xl">
          View our updates on new and upcoming services in our news letter. Stay
          up to date and give us any feedback!
        </h3>
        <Link
          href="/news"
          className="bg-white hover:bg-gray-200 mt-6 mb-12 px-4 py-2 sm:px-8 sm:py-4 rounded-md text-lg font-semibold transition"
        >
          NEWS LETTER
        </Link>
      </section>

      {/* HOW TO */}
      <section className="mt-4 sm:mt-24 flex flex-col text-center items-center justify-center border-5 border-red-900 mx-4 sm:mx-12 pb-12">
        <h1 className="mt-18 text-gray-900 text-2xl sm:text-5xl font-serif font-semibold relative inline-block">
          Want To Know How To Start With Us?
        </h1>
        <div className="w-24 mt-8 border-b-4 border-gray-900"></div>
        <h3 className="mt-8 px-4 sm:text-2xl max-w-2xl">
          It is easier than ever to join a community that is right for you, with
          all the support needed through your journey.
        </h3>

        <div className="flex flex-col items-center justify-center text-center sm:mt-6 p-12 sm:p-16">
          {/* STEP 1 */}
          <div className="flex items-center justify-center w-20 h-20 font-serif mb-6">
            <Star className="absolute text-red-900 !w-32 !h-32" />
            <span className="relative text-white text-5xl">1</span>
          </div>
          <p className="sm:text-2xl max-w-xs sm:max-w-lg font-semibold font-serif">
            Reach out to us through our link and fill out the form. Ensure all
            information is accurate!
          </p>
          <div className="w-60 sm:w-240 my-12 border-b-2 border-gray-800"></div>

          {/* STEP 2 */}
          <div className="flex items-center justify-center w-20 h-20 font-serif mb-6">
            <Star className="absolute text-red-900 !w-32 !h-32" />
            <span className="relative text-white text-5xl">2</span>
          </div>
          <p className="sm:text-2xl max-w-xs sm:max-w-lg font-semibold font-serif">
            Look out for a message from us to schedule a home visit to make sure
            this is the right place for you or your family.
          </p>
          <div className="w-60 sm:w-240 my-12 border-b-2 border-gray-800"></div>

          {/* STEP 3 */}
          <div className="flex items-center justify-center w-20 h-20 font-serif mb-6">
            <Star className="absolute text-red-900 !w-32 !h-32" />
            <span className="relative text-white text-5xl">3</span>
          </div>
          <p className="sm:text-2xl max-w-xs sm:max-w-lg font-semibold font-serif">
            Visit us in-person and solidify your life with caregivers,
            communities and Heroes!
          </p>
          {/* <div className="w-240 mt-12 border-b-2 border-gray-800"></div> */}
        </div>

        <Link
          href="/contact"
          className="bg-gray-900 hover:bg-gray-700 text-white px-5 py-2 sm:px-10 sm:py-4 rounded-md text-xl font-semibold transition"
        >
          START HERE
        </Link>
      </section>

      {/* ABOUT THE AREA */}
      <section className="p-12 pb-18 mt-24 bg-red-900 flex flex-col text-center items-center justify-center">
        <h1 className="sm:mt-18 text-white text-2xl sm:text-5xl font-serif font-semibold relative inline-block">
          Find Out What Greenville, Texas Has To Offer
        </h1>
        <div className="w-24 mt-6 sm:mt-12 border-b-4 border-white"></div>

        <h3 className="my-8 sm:m-12 text-xl sm:text-2xl text-white sm:max-w-4xl sm:leading-relaxed">
          <i>Heroes & Sober Living</i> is a warm, family-driven living community
          in Greenville, Texas just shy of 40 minutes east of Dallas, Texas. We
          provide a safe, caring home for our residents who are recovering and
          those who have served our country. We are doing our part to aid you
          and your community.
        </h3>

        {/* CARDS CONTAINER */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 w-full max-w-5xl">
          {/* CARD 1 */}
          <div className="flex flex-col bg-[#fbf9f3] rounded-lg sm:shadow-[20px_20px_rgba(0,0,0,0.5)] overflow-hidden flex-1 min-w-[330px]">
            <Image
              src="/red-family-one.jpg"
              alt="caretaker"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold font-serif">
                Health & Wellness
              </h3>
              <p className="text-gray-700 text-xl">
                We believe that everyone deserves a second chance, especially
                those who are actively looking to conserve their health and
                wellness.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col bg-[#fbf9f3] rounded-lg sm:shadow-[20px_20px_rgba(0,0,0,0.5)] overflow-hidden flex-1 min-w-[330px]">
            <Image
              src="/red-family-two.jpg"
              alt="caretaker"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold font-serif">
                Serve Those Who Serve Us
              </h3>
              <p className="text-gray-700 text-xl">
                We offer services to those who have served us and their country,
                giving those who are honored an opportunity to start again.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <Star className="mt-12 text-white !w-18 !h-18" />
          <Star className="mt-12 text-white !w-32 !h-32" />
          <Star className="mt-12 text-white !w-18 !h-18" />
        </div>
      </section>

      {/* JOIN US */}
      <section className="sm:my-72 p-12 flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-20 max-w-7xl mx-auto">
        <div className="relative flex-shrink-0">
          <Image
            src="/old-family.jpg"
            alt="family"
            width={600}
            height={600}
            className="rounded-lg object-cover sm:shadow-[30px_30px_0_rgba(0,0,7,0.1)]"
          />
        </div>

        <div className="sm:text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl text-gray-900 font-serif font-semibold mb-4">
            Become A Part of Our Family, At Heroes & Sober Living
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-lg">
            Join our warm, family-driven community in Greenville, Texas. We
            provide a safe, caring environment for residents who are recovering
            and those who have served our country, helping everyone thrive in a
            supportive and welcoming home.
          </p>
        </div>
      </section>
    </main>
  );
}
