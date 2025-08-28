import Link from "next/link";
import Image from "next/image";

export default function LivingOptions() {
  return (
    <main className="relative w-full h-[50vh]">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/living-image.jpg"
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-30"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div> */}
      </div>

      {/* HERO SECTION */}
      <div className="relative flex justify-center items-center h-full px-6">
        <div className="p-8 mt-20 md:p-12 border-5 border-red-900 h-200 w-360 flex flex-col items-center text-center justify-center">
          {/* MAIN HEADING */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-wide mb-10 max-w-2xl text-left">
            Living Independently
          </h1>

          {/* SUB-HEADING */}
          <h2 className="text-white text-lg md:text-xl lg:text-3xl font-serif mb-6 max-w-4xl text-center">
            We offer a wide array of living options that is tailored to you and
            your family's everyday needs. Explore our plans and what we offer to
            get the most out of the{" "}
            <span className="font-style: italic">Heroes & Sober Living</span>{" "}
            expereince.
          </h2>
        </div>
      </div>
    </main>
  );
}
