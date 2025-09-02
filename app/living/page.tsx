"use client";
import Link from "next/link";
import Image from "next/image";
import PlanCard from "../components/plancard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

export default function LivingOptions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-[50vh]">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/living-image.jpg"
            alt="Hero"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-20 sm:brightness-30"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div> */}
        </div>

        {/* HERO SECTION */}
        <div className="relative flex justify-center items-center h-full px-6">
          <div className="p-8 mt-20 md:p-12 lg:border-5 lg:border-red-900 lg:h-[37rem] h-200 w-360 flex flex-col items-center text-center justify-center">
            {/* MAIN HEADING */}
            <h1 className="text-white text-lg sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-wide sm:mb-10 max-w-2xl text-left">
              Living Independently
            </h1>
            <div className="sm:hidden w-28 my-2 border-b-2 border-white"></div>

            {/* SUB-HEADING */}
            <h2 className="text-white text-sm sm:text-lg md:text-xl lg:text-3xl font-serif mt-2 mb-6 max-w-4xl text-center">
              We offer a wide array of living options that is tailored to you
              and your family's everyday needs. Explore our plans and what we
              offer to get the most out of the{" "}
              <span className="font-style: italic">Heroes & Sober Living</span>{" "}
              expereince.
            </h2>
          </div>
        </div>
      </section>

      {/* START LIVING OPTIONS */}
      <section className="sm:my-48 p-0 sm:p-12 flex flex-col gap-32 max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-20">
          {/* BACKGROUND IMAGE */}
          <div className="relative w-full md:w-[700px] flex-shrink-0">
            <Image
              src="/home-office.jpg"
              alt="family"
              width={700}
              height={700}
              style={{ width: "100%", height: "auto" }}
              sizes="(max-width: 768px) 100vw, 700px"
              className="rounded-none md:rounded-lg object-cover sm:shadow-[30px_30px_0_rgba(0,0,7,0.1)] hidden sm:block"
            />
          </div>
          <div className="sm:text-center md:text-left px-6 md:px-0 mt-6 md:mt-0">
            <h1 className="text-3xl max-w-3xl sm:text-5xl text-gray-900 font-serif font-semibold mb-4">
              Start Living With One of Our Plan Options That's Right For You.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-xl">
              At <i>Heroes & Sober Living</i>, we offer structured, supportive
              housing for those committed to sobriety and personal growth. Our
              homes follow a plan-based approach, giving each resident a
              personalized strategy to stay on track—whether it’s maintaining
              employment, attending meetings, or building healthy habits. With a
              safe, substance-free environment, we make success achievable.
            </p>
            <p className="text-xl sm:text-2xl sm:mt-6 text-gray-700 max-w-xl">
              Getting started is simple. From your first call, we guide you
              through choosing the right home, understanding house expectations,
              and setting your plan for success. No complicated steps—just a
              clear, supportive path to a stable, sober life.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 sm:gap-20">
          {/* BACKGROUND IMAGE */}
          <div className="relative w-full md:w-[700px] flex-shrink-0">
            <Image
              src="/veterans-image.jpg"
              alt="family"
              width={700}
              height={700}
              style={{ width: "100%", height: "auto" }}
              sizes="(max-width: 768px) 100vw, 700px"
              className="rounded-none md:rounded-lg object-cover sm:shadow-[30px_30px_0_rgba(0,0,7,0.1)]"
            />
          </div>
          <div className="sm:text-center md:text-left px-6 md:px-0 mt-6 md:mt-0">
            <h1 className="text-3xl max-w-3xl sm:text-5xl text-gray-900 font-serif font-semibold mb-4">
              A Supportive Community That Helps You Succeed.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-xl">
              Every Heroes & Sober Living home provides accountability,
              structure, and encouragement. We help you stay focused on your
              goals while building a positive support network that lasts long
              after you leave.
            </p>
            <p className="text-xl sm:text-2xl sm:mt-6 text-gray-700 max-w-xl">
              No matter where you’re starting from, we make it easy to take that
              first step toward a brighter, steady future.
            </p>
          </div>
        </div>
      </section>

      {/* STARTING PLAN */}
      <section className="mt-24 py-12 bg-gray-900 flex flex-col text-center text-white items-center justify-center">
        <h1 className="font-serif font-bold text-2xl sm:text-5xl sm:mt-12">
          Transparent Pricing
        </h1>
        <div className="sm:w-32 w-16 mt-4 sm:my-8 border-b-4 border-white"></div>
        <p className="p-8 sm:p-2 sm:text-2xl sm:max-w-xl">
          Reach out to us for any inquiries about pricing. We'll try to find the
          best option that fits your needs.
        </p>
        <div className="relative sm:m-12 px-6 py-6 sm:px-32 sm:py-12 border-2 border-b-[56px] border-white font-serif">
          <h2 className="text-xl sm:text-4xl">Community Living Option</h2>
          <p className="text-md sm:text-2xl font-sans">Starting at</p>
          <h1 className="text-6xl sm:text-8xl font-bold sm:mt-8">
            $800/<span className="text-3xl sm:text-6xl font-normal">mo</span>
          </h1>

          <Link
            href="/residents"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-42px] text-black sm:text-xl font-sans hover:text-gray-400 transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* ALL PLAN OPTIONS */}
      <section className="flex flex-col items-center mt-12 sm:mt-18 text-center">
        <h1 className="font-serif font-bold text-2xl mt-8 sm:text-5xl">
          Plans We Offer
        </h1>
        <div className="w-32 my-8 border-b-4 border-black mx-auto"></div>

        <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 gap-6 sm:gap-2 justify-center">
          <PlanCard
            title="Community Living Option"
            price="$800"
            buttonText="Get Started"
            link="/residents"
            benefits={[
              "Comfortable, fully furnished shared rooms",
              "Access to community group activities",
              "Transportation assistance to local appointments and events",
            ]}
          />
          <PlanCard
            title="Sober Living Option"
            price="$1000"
            buttonText="Get Started"
            link="/residents"
            benefits={[
              "Affordable housing & private rooms for veterans",
              "Upgraded beds for private rooms",
              "Assistance with benefits and paperwork",
              "Added desks and other room utilities",
            ]}
          />
          <PlanCard
            title="Honorary Living Option"
            price="$1600"
            buttonText="Get Started"
            link="/residents"
            benefits={[
              "Comfortable, fully furnished private rooms",
              "Access to meal assistance and group activities",
              "Transportation assistance to local appointments and events",
            ]}
          />
          <PlanCard
            title="Premium Living Option"
            price="$1850"
            buttonText="Get Started"
            link="/residents"
            benefits={[
              "Spacious rooms with upgraded amenities (first available)",
              "Private bathrooms included",
              "Priority scheduling for events and transportation needs",
            ]}
          />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="sm:my-48 p-0 sm:p-12 flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-20 max-w-8xl mx-auto">
        {/* BACKGROUND IMAGE */}
        <div className="relative w-full md:w-[700px] flex-shrink-0">
          <Image
            src="/homeroom-living.jpg"
            alt="family"
            width={700}
            height={700}
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 768px) 100vw, 700px"
            className="rounded-none md:rounded-lg object-cover sm:shadow-[30px_30px_0_rgba(0,0,7,0.1)]"
          />
        </div>

        <div className="sm:text-center md:text-left px-6 md:px-0 mt-6 md:mt-0">
          <h1 className="text-3xl max-w-3xl sm:text-5xl text-gray-900 font-serif font-semibold mb-4">
            We Consider All Residents and Benefits for Every Plan.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-xl">
            At <i>Heroes & Sober Living</i>, residents enjoy fully equipped
            homes with essential appliances and routine maintenance, so life
            stays comfortable and stress-free.
          </p>
          <p className="text-xl sm:text-2xl sm:mt-6 text-gray-700 max-w-xl">
            Each resident receives a cozy bed and access to furnished common
            areas, including kitchens and living spaces, creating a welcoming
            environment that supports both comfort and community.
          </p>
        </div>
      </section>

      {/* BENEFITS LIST */}
      <section className="flex flex-col justify-center items-center py-12">
        <h1 className="font-serif font-bold text-2xl sm:text-5xl mb-4">
          Benefits For All
        </h1>
        <div className="w-28 my-2 border-b-4 border-black"></div>
        <p className="text-xl sm:text-2xl mb-8 mt-4 text-center sm:max-w-4xl">
          Enjoy the benefits of your new home across all plans. We offer a range
          of convenient services and amenities. Here are a few that you can
          expect.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-12 w-full max-w-5xl">
          {[
            "Maintenance",
            "Living Spaces",
            "Music",
            "Appliances",
            "Beds",
            "Cleaning Services",
          ].map((benefit) => (
            <li
              key={benefit}
              className="border-3 border-red-900 rounded-xs py-6 m-4 sm:m-1 flex items-center justify-center text-2xl font-medium text-center"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* AND MORE */}
      <section className="flex flex-col justify-center items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-900 hover:bg-gray-700 text-white px-10 py-4 sm:px-8 sm:py-3 rounded-md text-lg sm:text-lg font-semibold transition w-max cursor-pointer"
        >
          And More {isOpen ? "▲" : "▼"}
        </button>

        <div
          className={`mt-4 bg-gray-900 text-white p-4 mb-12 space-y-8 text-left sm:max-w-7xl overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "sm:max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-8 text-xl list-none border-2 border-white">
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>Safe, clean, and fully maintained housing</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>
                Affordable rent designed to fit fixed incomes (SSI, SSDI, VA,
                etc.)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>
                Utilities included (water, electricity, free internet, etc.)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>Flexible rental terms (month-to-month or longer)</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>Respect for privacy and personal freedom</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>
                Stable and secure environment with house rules for peace
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>Quick response to repairs and property maintenance</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>
                Community of peers with shared experiences - opportunities for
                friendship and social support
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>
                Access to local resources, VA, and disability services
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>
                Connections to jobs, counseling, and recovery programs
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>
                Food and transportation assistance for appointments and needs
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>24/7 video recording for safety and security</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>Third-dietary support for special nutrition needs</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>
                Peace of mind for families knowing loved ones are safe
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowForwardIcon className="text-white mt-1" />
              <span>AC units provided in rooms for comfort</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CONTACT US */}
      <section className="flex flex-col justify-center items-center sm:mt-18 mb-18">
        <div className="flex flex-col justify-center text-white bg-gray-900 sm:w-[1000px] w-[100%] sm:h-[440px] p-3 sm:p-12 sm:mt-16 sm:shadow-2xl shadow-black/50">
          <div className="flex flex-col justify-center items-center text-center border-2 sm:border-4 p-6 sm:p-12 border-white">
            <h1 className="font-serif font-bold text-2xl">Send Us a Message</h1>
            <div className="w-45 mt-4 mb-4 border-b-2 border-white"></div>
            <p className="sm:text-2xl">
              Reach out to us on our contact page or give us a call with any
              questions you may have about our pricing, plans, or services. We
              are deeply committed to our community and take pride in providing
              personalized support to ensure you find the options that best meet
              your needs. Your satisfaction and peace of mind are our top
              priorities, and we’re here to make sure every interaction is
              helpful, clear, and stress-free.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="bg-gray-900 hover:bg-gray-700 text-white text-xl sm:my-12 m-6 py-3 px-6 sm:px-32 transition rounded-sm flex items-center"
        >
          <span className="block sm:hidden">Contact Us</span>
          <span className="hidden sm:block">
            Email or Call Us Today For Any Inquiries!
          </span>
          <ArrowForwardIcon className="text-white ml-2" />
        </Link>
      </section>
    </>
  );
}
