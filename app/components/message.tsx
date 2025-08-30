import Image from "next/image";

export default function Message({ title }: { title: string }) {
  return (
    <main className="flex sm:mt-24 justify-center min-h-screen font-serif">
      <div className="relative w-[900px] h-[900px] sm:rounded-sm text-white overflow-hidden">
        <div className="absolute inset-0 bg-red-900" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 sm:p-16">
          <Image
            src="/white-logo.png"
            alt="logo"
            width={220}
            height={220}
            className="mb-4"
          />
          <h1 className="text-3xl text-center sm:text-5xl font-bold mb-6">
            {title}
          </h1>
          <p className="sm:text-2xl text-center">
            This section of the website is currently undergoing maintenance!
            We’re working diligently behind the scenes to improve your
            experience and ensure everything runs smoothly. Some features may be
            temporarily unavailable during this time. We apologize for any
            inconvenience this may cause and appreciate your patience. Please
            check back soon—we are committed to bringing you an updated,
            seamless, and reliable service for all your needs.
          </p>
        </div>
      </div>
    </main>
  );
}
