"use client";
import Link from "next/link";
import { GrSend } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto my-20 px-4">
        <div className="flex flex-col justify-between md:flex-row my-auto gap-12 ">
          <div className="md:w-1/4 px-4 mr-5 space-y-2">
            <h1 className="text-3xl tracking-wide text-orange-800">
              Know Our ClayHeaven
            </h1>
            <p className="text-wrap tracking-wider text-lg">
              We are the best ceramic supplier in the town. Our main motive is
              to makr beautiful ceramics everytime
            </p>
            <div className=" flex justify-start items-center">
              <input
                type="text"
                placeholder="You Email Address"
                className="border-b border-gray-500 p-1 w-auto"
              ></input>
              <GrSend size={20} className="" />
            </div>
          </div>

          <div className="md:w-1/4 space-y-2 px-4">
            <h2 className="text-2xl">Quick Links</h2>
            <ul className="space-y-1">
              <li>
                <Link href={"/"} className="text-orange-900 text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-orange-900 text-lg">
                  About
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-orange-900 text-lg">
                  Shop
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-orange-900 text-lg">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 space-y-2 px-4">
            <h2 className="text-2xl">Help</h2>
            <ul className="space-y-1">
              <li>
                <Link href={"/"} className="text-orange-900 text-lg">
                  Faqs
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-orange-900 text-lg">
                  Store Policy
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-orange-900 text-lg">
                  Shipping & returns
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-orange-900 text-lg">
                  Checkout
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-orange-900 text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 space-y-2 px-4">
            <h2 className="text-2xl">Social Links</h2>
            <ul className="space-y-1">
              <li>
                <Link href={"/"} className="text-orange-900 text-lg">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-orange-900 text-lg">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-orange-900 text-lg">
                  Pinterest
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-orange-900 text-lg">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-orange-900 text-lg">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-60 text-start border-t h-20 border border-gray-200 flex justify-between items-center text-gray-500">
        <p className="text-xl text-black">
          ©2025 Template by: <span className="text-orange-800">Ashwini</span>
        </p>
        <Link
          href="#top"
          className="flex items-center text-xl text-gray-500 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
          Back to top
        </Link>
      </div>
    </div>
  );
};

export default Footer;
