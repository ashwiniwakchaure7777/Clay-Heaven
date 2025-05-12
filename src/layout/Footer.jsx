"use client";
import Link from "next/link";
import { GrSend } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="p-30 flex justify-between items-start ">
      <div className="">
        <h1>Know Our ClayHeaven</h1>
        <p className="text-wrap">
          We are the best ceramic supplier in the town. Our main motive is to
          makr beautiful ceramics everytime
        </p>
        <div>
          <input type="text" placeholder="You Email Address"></input>
          <GrSend size={20} />
        </div>
      </div>
      <div className="flex items-start justify-start space-x-10">
        <div className="space-y-2">
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
        <div className="space-y-2">
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
        <div className="space-y-2">
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
  );
};

export default Footer;
