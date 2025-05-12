"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-[url(/product-item6.jpg)] h-[calc(100vh-80px)] pt-[80px] bg-center w-full bg-cover flex justify-center items-center ">
      <div className="text-center space-y-4">
        <h1 className="text-7xl text-white">Minimal Aesthetic Ceramic Creation</h1>
        <h2 className="text-white text-2xl">
          Elevate your ceramic game with a visually captivating pieces today
        </h2>
        <button className="bg-white px-12 py-4 text-2xl text-black"> Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
