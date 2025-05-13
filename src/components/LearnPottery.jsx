"use client";
import Link from "next/link";

const LearnPottery = () => {
  return (
    <div className="bg-[url(/blog-item.jpg)] h-[calc(100vh-80px)] bg-fixed bg-no-repeat bg-cover bg-center flex justify-center items-center relative">
      <div className="text-center space-y-5">
        <h1 className="text-4xl tracking-wide text-white">
          Learn Pottery With Us
        </h1>
        <div>
          {" "}
          <p className="text-lg text-white tracking-wider">
            Join out pottery classes to know about the ceramics
          </p>
        </div>
        <div className="mt-10">
          {" "}
          <Link href={"/#"} className="bg-white text-black px-16 py-4 text-xl">
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnPottery;
