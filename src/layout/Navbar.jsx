"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <nav className="bg-[url(/product-item6.jpg)] h-20 w-full bg-cover flex justify-around text-lg items-center border-b border-white sticky left-0 top-0 z-10">
      <div className="flex items-center space-x-6 ">
        <Link href={"/"} className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href={"/"} className="text-white hover:text-gray-300">
          About
        </Link>
        <Link href={"/"} className="text-white hover:text-gray-300">
          Shop
        </Link>
        <Link
          href={"/#"}
          className="text-white hover:text-gray-300 font-bold underline"
        >
          Get Pro
        </Link>
        <div className="relative">
          <button
            className="text-white hover:text-gray-200 flex items-center focus:outline-none"
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          >
            Pages
            <svg></svg>
            {isDropDownOpen && (
              <div className="w-38 absolute top-full left-0 mt-3 bg-white text-orange-700  rounded-md shadow-lg z-10 border border-red-950 text-left">
                <Link
                  href={"/#"}
                  className="block px-3 py-1 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropDownOpen(false)}
                >
                  About{" "}
                </Link>
                <Link
                  href={"/#"}
                  className="block px-3 py-1 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropDownOpen(false)}
                >
                  Blog{" "}
                </Link>
                <Link
                  href={"/#"}
                  className="block px-3 py-1 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropDownOpen(false)}
                >
                  Shop{" "}
                </Link>
                <Link
                  href={"/#"}
                  className="block px-3 py-1 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropDownOpen(false)}
                >
                  Checkout{" "}
                </Link>
                <Link
                  href={"/#"}
                  className="block px-3 py-1 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropDownOpen(false)}
                >
                  Single Post{" "}
                </Link>
                <Link
                  href={"/#"}
                  className="block px-3 py-1 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropDownOpen(false)}
                >
                  Single Product{" "}
                </Link>
                <Link
                  href={"/#"}
                  className="block px-3 py-1 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropDownOpen(false)}
                >
                  Contact{" "}
                </Link>
              </div>
            )}
          </button>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image
          src={"/main-logo.png"}
          alt="Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="flex items-center justify-between space-x-10">
        <Link
          href={"#"}
          className="flex items-center justify-between space-x-1"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns=""
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          <span className="text-white">Login</span>
        </Link>

        <Link
          href="/cart"
          className="relative flex items-center space-x-1 text-white hover:text-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span
            className="text-black
           absolute -right-2 -top-2  bg-white rounded-full text-sm h-5 w-5 flex items-center justify-center"
          >
            0
          </span>
        </Link>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none py-1 pl-8 pr-3 placeholder-white focus:outline-none focus:ring-1"
          />
          <svg
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
