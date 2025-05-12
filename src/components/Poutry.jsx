"use client";

import Image from "next/image";

const Poutry = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] space-x-4 flex justify-center items-center px-2 overflow-hidden">
      <div className="flex-1 flex justify-center items-center ">
        <Image
          src={"/collection-item1.jpg"}
          alt="collection-1"
          width={800}
          height={500}
          className="h-auto w-full object-cover "
        ></Image>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <Image
          src={"/collection-item2.jpg"}
          alt="collection-2"
          width={800}
          height={500}
          className="h-auto w-full object-cover "
        ></Image>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <Image
          src={"/collection-item3.jpg"}
          alt="collection-3"
          width={800}
          height={500}
          className="h-auto w-full object-cover "
        ></Image>
      </div>
    </div>
  );
};

export default Poutry;
