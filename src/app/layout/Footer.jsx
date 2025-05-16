"use client";
import Link from "next/link";
import { GrSend } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto my-12 sm:my-16 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12">
          <div className="w-full md:w-1/4 px-4 space-y-4">
            <h1 className="text-2xl sm:text-3xl tracking-wide text-orange-800 font-semibold">
              Know Our ClayHeaven
            </h1>
            <p className="text-sm sm:text-base tracking-wide text-gray-600">
              We are the best ceramic supplier in town. Our main motive is to make beautiful ceramics every time.
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full border-b border-gray-400 p-2 text-sm sm:text-base focus:outline-none focus:border-orange-800"
                aria-label="Email subscription"
              />
              <button
                className="text-orange-800 hover:text-orange-600"
                aria-label="Subscribe"
              >
                <GrSend size={20} />
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/4 px-4 space-y-4">
            <h2 className="text-xl sm:text-2xl text-orange-800 font-medium">Quick Links</h2>
            <ul className="space-y-2">
              {["Home", "About", "Shop", "Blogs"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm sm:text-base text-orange-900 hover:text-orange-600"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4 space-y-4">
            <h2 className="text-xl sm:text-2xl text-orange-800 font-medium">Help</h2>
            <ul className="space-y-2">
              {["Faqs", "Store Policy", "Shipping & Returns", "Checkout", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="text-sm sm:text-base text-orange-900 hover:text-orange-600"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/4 px-4 space-y-4">
            <h2 className="text-xl sm:text-2xl text-orange-800 font-medium">Social Links</h2>
            <ul className="space-y-2">
              {["Facebook", "Instagram", "Pinterest", "Twitter", "Youtube"].map((item) => (
                <li key={item}>
                  <Link
                    href={`https://${item.toLowerCase()}.com`}
                    className="text-sm sm:text-base text-orange-900 hover:text-orange-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 h-16 sm:h-20 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 text-gray-500">
        <p className="text-sm sm:text-base text-black">
          ©2025 Template by: <span className="text-orange-800">Ashwini</span>
        </p>
        <Link
          href="#top"
          className="flex items-center text-sm sm:text-base text-gray-500 hover:text-orange-800 py-2"
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