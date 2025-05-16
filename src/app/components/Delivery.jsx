"use client";
import { PiVan, PiTrolleySuitcase } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";

const Delivery = () => {
  return (
    <div className="py-10 px-4 sm:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
      {/* Delivery Box */}
      <div className="w-full md:w-1/3 border-y md:border-y-0 md:border-l border-gray-400 py-6 px-4 flex flex-col items-center space-y-2">
        <PiVan size={36} className="text-orange-800" />
        <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide">
          Inside City delivery within 3 days
        </p>
      </div>

      {/* Free Samples Box */}
      <div className="w-full md:w-1/3 border-y md:border-y-0 md:border-l border-gray-400 py-6 px-4 flex flex-col items-center space-y-2">
        <BsCupHot size={36} className="text-orange-800" />
        <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide">
          Free Samples with Every Order
        </p>
      </div>

      {/* Free Shipping Box */}
      <div className="w-full md:w-1/3 border-y md:border-y-0 md:border-l border-gray-400 py-6 px-4 flex flex-col items-center space-y-2">
        <PiTrolleySuitcase size={36} className="text-orange-800" />
        <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide">
          Free Shipping on Orders Above $600
        </p>
      </div>
    </div>
  );
};

export default Delivery;
