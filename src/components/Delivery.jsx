"use client";
import { PiVan } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { PiTrolleySuitcase } from "react-icons/pi";

const Delivery = () => {
  return (
    <div className="py-30 px-40 text-center flex items-center justify-center space-x-5">
      <div className="border-y w-full h-40 border-gray-400 py-8 text-center px-2 flex flex-col justify-center items-center space-y-2">
        <div>
          <PiVan size={40} className="text-orange-800" />
        </div>
        <div>
          <p className="text-2xl tracking-wide">
            Inside City delivery within 3 days
          </p>
        </div>
      </div>
      <div className="border-y w-full h-40 border-gray-400 py-8 text-center px-2 flex flex-col justify-center items-center space-y-4">
        <div>
          <BsCupHot size={40} className="text-orange-800" />
        </div>
        <div>
          <p className="text-2xl tracking-wide">
           Free Samples with Every Order
          </p>
        </div>
      </div>
      <div className="border-y w-full h-40 border-gray-400 py-8 text-center px-2 flex flex-col justify-center items-center space-y-4">
        <div>
          <PiTrolleySuitcase size={40} className="text-orange-800" />
        </div>
        <div>
          <p className="text-2xl tracking-wide">
            Free Shipping on Orders Above $600
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
