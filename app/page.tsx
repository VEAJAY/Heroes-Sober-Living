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
        <span className="absolute -bottom-42 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-gray-900"></span>
        <h3 className="mt-8 text-xl max-w-4xl">
          Explore the living options that we provide that fits your specific
          needs. We want to give you confidance that our services are in line
          with your pricing expectations.
        </h3>

        {/* LIVING OPTION CARD */}
        <div className="relative m-8 px-32 py-12 border-2 border-b-[56px] border-gray-900 font-serif">
          <h2 className="text-4xl">Community Living Option</h2>
          <p className="text-2xl font-sans">Starting at</p>
          <h1 className="text-8xl font-bold mt-8">
            $800/<span className="text-6xl font-normal">mo</span>
          </h1>

          <Link
            href="/living"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-42px] text-white text-xl font-sans hover:text-gray-400 transition-colors duration-200"
          >
            More Options
          </Link>
        </div>

        {/* LIVING OPTION CARD */}
        <div className="relative m-8 px-32 py-12 border-2 border-b-[56px] border-gray-900 font-serif">
          <h2 className="text-4xl">Honorary Living Option</h2>
          <p className="text-2xl font-sans">Starting at</p>
          <h1 className="text-8xl font-bold mt-8">
            $1695/<span className="text-6xl font-normal">mo</span>
          </h1>

          <Link
            href="/living"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-42px] text-white text-xl font-sans hover:text-gray-400 transition-colors duration-200"
          >
            More Options
          </Link>
        </div>
      </div>

      {/* AMENITIES */}
      <div className="mt-24 bg-gray-900 flex flex-col text-center items-center justify-center">
        <h1 className="mt-18 text-4xl text-white font-serif font-semibold relative inline-block">
          Amenities
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-white"></span>
        </h1>
        <h3 className="mt-12 text-xl text-white max-w-2xl">
          Enjoy some of our amenities that we offer such as transportation
          assistance, food assistance, and a warm and welcoming common area.
        </h3>

        {/* GRID WRAPPER */}
        <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AMENITIES CARD */}
          <div className="flex flex-col bg-[#fbf9f3] rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
            <Image
              src="/caretaker-image.jpg"
              alt="caretaker"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold font-serif">
                Transportation
              </h3>
              <p className="text-gray-700 text-xl">
                Our transportation services make it easy for residents to get
                where they need to go. Whether it’s attending appointments,
                running errands, or participating in community events, our
                reliable and safe transportation ensures everyone can stay
                active and independent without worry.
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
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold font-serif">
                Food Services
              </h3>
              <p className="text-gray-700 text-xl">
                We provide nutritious meals and snacks designed to meet the
                needs of our residents. Our food assistance program ensures that
                everyone has access to healthy, balanced meals, promoting
                overall well-being while taking the stress out of daily meal
                planning.
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
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold font-serif">Common Area</h3>
              <p className="text-gray-700 text-xl">
                Our warm and inviting common area is a place for residents to
                relax, socialize, and connect with one another. With comfortable
                seating, recreational activities, and a friendly atmosphere, it
                fosters a sense of community and belonging for everyone who
                calls our group home their home.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-white font-serif text-2xl max-w-2xl">
          View our updates on new and upcoming services in our news letter. Stay
          up to date and give us any feedback!
        </h3>
        <Link
          href="/news"
          className="bg-white hover:bg-gray-200 m-6 px-8 py-4 rounded-md text-lg font-semibold transition"
        >
          NEWS LETTER
        </Link>
      </div>
    </main>
  );
}
