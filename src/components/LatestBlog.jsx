"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NextArrow = ({ onclick }) => (
  <button
    className="absolute top-1/2 transform -translate-y-1/2 left-[60px] bg-gray-100 p-5 rounded-full shadow-md hover:bg-gray-200 z-20"
    onClick={onclick}
  >
    <FaArrowLeft size={20} className="text-gray-700"></FaArrowLeft>
  </button>
);

const PrevArrow = ({ onclick }) => (
  <button
    className="absolute top-1/2 transform -translate-y-1/2 right-[60px] bg-gray-100 p-5 rounded-full shadow-md hover:bg-gray-200 z-20"
    onClick={onclick}
  >
    <FaArrowRight size={20} className="text-gray-700"></FaArrowRight>
  </button>
);

const blogs = [
  {
    id: 1,
    title: "The Rise of JavaScript Frameworks",
    description:
      "JavaScript frameworks have evolved rapidly in the last few years, with tools like React, Vue, and Svelte becoming the go-to choices for building scalable, high-performance web applications. In this blog, we delve into why these frameworks are dominating the developer ecosystem, compare their features, and discuss how choosing the right framework can significantly improve development speed, maintainability, and user experience.",
    image: "/collection-item3.jpg",
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js",
    description:
      "In today’s connected world, APIs are the backbone of most modern web applications. This blog covers best practices for building RESTful APIs using Node.js and Express.js. From route structuring and middleware usage to database integration and error handling, you’ll learn how to design robust and scalable APIs ready for real-world use. We also discuss performance optimization and security considerations.",
    image: "/insta-item5.jpg",
  },
  {
    id: 3,
    title: "Top UI/UX Trends to Watch",
    description:
      "Staying up to date with UI/UX trends is crucial for designers and developers alike. This article explores the top trends making waves in 2025 — from immersive 3D visuals and micro-interactions to voice-enabled interfaces and dark mode adoption. We'll look at real-world examples of how companies are using these trends to improve user engagement and satisfaction, and provide tips on implementing them in your own projects.",
    image: "/product-item6.jpg",
  },
  {
    id: 4,
    title: "Mastering React Hooks",
    description:
      "React Hooks transformed the way developers write components by allowing them to manage state, side effects, and lifecycle logic without writing class components. This in-depth blog explains the most commonly used hooks such as useState, useEffect, useContext, useMemo, and useCallback. With hands-on examples and common pitfalls to avoid, you'll learn how to write cleaner, more efficient React code using hooks.",
    image: "/single-product-item.jpg",
  },
  {
    id: 5,
    title: "Web Performance Optimization Tips",
    description:
      "Slow websites lose users. In this blog, we focus on proven strategies to optimize your web application’s performance. Learn how to lazy-load images and components, compress assets, minimize critical rendering path, implement efficient caching, and monitor load time with tools like Lighthouse. Whether you’re building a portfolio site or a large-scale web app, these tips will help you deliver a faster and smoother experience to your users.",
    image: "/single-product-item.jpg",
  },
];

const LatestBlog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className=" my-30">
      <div className="text-center">
        <h1 className="text-5xl tracking-wide space-y-2">Latest Blog</h1>
        <p className="text-lg tracking-wider">
          {" "}
          Learn more about creamics and pottery
        </p>
      </div>
      <div className="px-60">
        <Slider {...settings}>
          {blogs.map((item) => (
            <div key={item?.id} className="p-5 h-100 overflow-hidden space-y-2">
              <img src={item?.image} className="h-60 w-full object-cover"></img>
              <p className="text-2xl text-gray-600">{item?.title}</p>
              <p>
                {item?.description}
                <span>
                  <Link href={"/#"} className="underline text-amber-700">
                    Read more
                  </Link>
                </span>
              </p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-center my-10">
        <Link
          href={"/#"}
          className="bg-black text-white px-12 py-2 text-center"
        >
          Read All
        </Link>
      </div>
    </div>
  );
};

export default LatestBlog;
