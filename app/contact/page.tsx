"use client";

import Image from "next/image";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import LocationOn from "@mui/icons-material/LocationOn";
import { useState } from "react";
import Language from "@mui/icons-material/Language";

export default function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    setSending(true);

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const reason = formData.get("reason");
    const message = formData.get("message");

    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, reason, message }),
      });

      alert("Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    }

    setSending(false);
  };

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative w-full h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src="/dallas-skyline.jpg"
            alt="skyline"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-20"
          />
        </div>

        <div className="relative flex justify-center items-center h-full px-6">
          <div className="p-8 mt-20 md:p-12 h-100 w-360 flex flex-col items-center text-center justify-center">
            <h1 className="text-white text-lg sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-wide sm:mb-10 max-w-2xl text-left">
              Reach Out to Us
            </h1>

            <div className="font-serif sm:text-2xl text-white grid grid-cols-1 sm:gap-6">
              <div className="flex items-center space-x-3">
                <Email className="!w-6 !h-6" />
                <a href="mailto:veteranssoberliving@gmail.com">
                  veteranssoberliving@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="!w-6 !h-6" />
                <a
                  href="tel:+14694566032"
                  className="font-sans hover:underline"
                >
                  Antwoine Burley (469) 456-6032
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="!w-6 !h-6" />
                <a
                  href="tel:+19034417512"
                  className="font-sans hover:underline"
                >
                  LaWayne Rogers (903) 441-7512
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <LocationOn className="!w-6 !h-6" />
                <h3>Fort Worth, Texas 76109</h3>
              </div>

              <div className="flex items-center space-x-3">
                <Language className="text-white !w-6 !h-6" />
                <h3>www.heroessoberliving.com</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="flex justify-center bg-gray-900 w-full py-12 border-t-8 border-red-900">
        <div className="w-full max-w-3xl px-6">
          <h2 className="text-white text-3xl sm:text-4xl font-serif font-bold mb-6 text-center">
            Send Us a Message
          </h2>
          <p className="text-white sm:text-xl text-center mb-8">
            Use the form below, or click the email above to reach out to us with
            any questions. We'll respond as soon as possible. Thank you!
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* NAME */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                className="p-3 rounded-md text-gray-900 bg-white border-2 border-red-900"
                required
              />
            </div>

            {/* PHONE */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white text-lg mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(123) 456-7890"
                className="p-3 rounded-md text-gray-900 bg-white border-2 border-red-900"
              />
            </div>

            {/* REASON */}
            <div className="flex flex-col">
              <label htmlFor="reason" className="text-white text-lg mb-2">
                Reason for Contact
              </label>
              <select
                id="reason"
                name="reason"
                className="p-3 rounded-md text-gray-900 bg-white border-2 border-red-900"
                required
              >
                <option value="" disabled>
                  Select a reason
                </option>
                <option value="general">General Inquiry</option>
                <option value="admissions">Admissions</option>
                <option value="support">Support</option>
              </select>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="p-3 rounded-md text-gray-900 bg-white border-2 border-red-900"
                required
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="message" className="text-white text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Type your message here..."
                className="p-3 rounded-md text-gray-900 bg-white border-2 border-red-900"
                required
              />
            </div>

            {/* SUBMIT */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-red-700 hover:bg-red-800 text-white text-lg py-3 px-6 rounded-md transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
