"use client";
import Link from "next/link";

const LearnPottery = () => {
  return (
    <div className="bg-[url(/blog-item.jpg)] bg-fixed bg-no-repeat bg-cover bg-center min-h-[calc(100vh-80px)] py-20 flex justify-center items-center relative px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="text-center space-y-6 relative z-10 max-w-2xl">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white drop-shadow-md">
          Learn Pottery With Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white tracking-wide drop-shadow-sm">
          Join our pottery classes and explore the art of ceramics
        </p>
        <Link
          href="/#"
          aria-label="Join our pottery classes"
          className="inline-block bg-white text-black px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-md hover:bg-gray-200 transition"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default LearnPottery;
