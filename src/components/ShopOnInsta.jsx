"use client";
import Image from "next/image";

const ShopOnInsta = () => {
  return (
    <div className="w-full px-30 py-15 text-center space-y-8">
        <h1 className="text-3xl">Shop Our Insta</h1>
      <div className="flex justify-center items-center space-x-2">
      <img
        src={"/insta-item1.jpg"}
        className="w-full h-40 object-cover"
        alt="Insta image"
      ></img>
      <img
        src={"/insta-item2.jpg"}
        className="w-full h-40 object-cover"
        alt="Insta image"
      ></img>
      <img
        src={"/insta-item3.jpg"}
        className="w-full h-40 object-cover"
        alt="Insta image"
      ></img>
      <img
        src={"/insta-item4.jpg"}
        className="w-full h-40 object-cover"
        alt="Insta image"
      ></img>
      <img
        src={"/insta-item5.jpg"}
        className="w-full h-40 object-cover"
        alt="Insta image"
      ></img>
      <img
        src={"/insta-item6.jpg"}
        className="w-full h-40 object-cover"
        alt="Insta image"
      ></img></div>
    </div>
  );
};

export default ShopOnInsta;
