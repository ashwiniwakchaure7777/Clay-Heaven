"use client";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] w-full bg-cover bg-center bg-[url(/product-item6.jpg)] px-4 pt-[80px] flex justify-center items-center">
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-6 max-w-4xl">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl text-white font-bold drop-shadow-lg">
          Minimal Aesthetic Ceramic Creation
        </h1>
        <h2 className="text-white text-lg sm:text-xl lg:text-2xl drop-shadow-md">
          Elevate your ceramic game with visually captivating pieces today
        </h2>
        <button
          aria-label="Shop Now"
          className="bg-white hover:bg-gray-200 transition px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-xl text-black font-semibold rounded-md"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
