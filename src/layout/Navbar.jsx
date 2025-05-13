"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`h-16 sm:h-20 w-full sticky top-0 left-0 z-50 flex items-center justify-between px-4 sm:px-8 transition-all duration-300 ${
        scrolled
          ? "bg-[#A9958B] border-none"
          : "bg-[url('/product-item6.jpg')] bg-cover border-b border-white"
      }`}
    >
      {/* Hamburger for mobile */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-white text-3xl focus:outline-none p-2"
          aria-label="Open menu"
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Drawer Menu */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          ></div>
          <div
            className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300 ${
              drawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-2xl text-gray-600 hover:text-gray-800 p-2"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <ul className="flex flex-col p-4 space-y-3 text-gray-700 text-lg">
              <li>
                <Link
                  href="/"
                  className="block py-2 hover:text-[#A9958B]"
                  onClick={() => setDrawerOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 hover:text-[#A9958B]"
                  onClick={() => setDrawerOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 hover:text-[#A9958B]"
                  onClick={() => setDrawerOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 hover:text-[#A9958B]"
                  onClick={() => setDrawerOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}

      {/* Logo Centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <Image
          src="/main-logo.png"
          alt="Logo"
          width={100}
          height={32}
          className="object-contain sm:w-[120px] sm:h-[40px]"
        />
      </div>

      {/* Main Links (Desktop Only) */}
      <ul className="hidden md:flex items-center space-x-4 lg:space-x-6 text-white z-10 text-sm lg:text-base">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/shop" className="hover:underline">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/#" className="font-bold underline">
            Get Pro
          </Link>
        </li>
        <li className="relative">
          <button
            className="flex items-center hover:underline"
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            aria-expanded={isDropDownOpen}
          >
            Pages
          </button>
          {isDropDownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-20">
              {["About", "Blog", "Shop", "Checkout", "Single Post", "Single Product", "Contact"].map((page, i) => (
                <Link
                  key={i}
                  href={`/${page.toLowerCase().replace(/ /g, "-")}`}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setIsDropDownOpen(false)}
                >
                  {page}
                </Link>
              ))}
            </div>
          )}
        </li>
      </ul>

      {/* Icons (Login, Cart, Search) */}
      <div className="flex items-center space-x-3 sm:space-x-6 text-white z-10">
        <Link href="/login" className="flex items-center space-x-1 text-sm sm:text-base">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="hidden sm:inline">Login</span>
        </Link>

        <Link href="/cart" className="relative flex items-center">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
            0
          </span>
        </Link>

        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border border-white placeholder-white rounded-md py-1 pl-8 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-white"
          />
          <svg
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;