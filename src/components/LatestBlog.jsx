"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Corrected Arrow Positioning
const PrevArrow = ({ onClick }) => (
  <button
    className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <FaArrowLeft size={18} className="text-gray-700" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
    onClick={onClick}
    aria-label="Next slide"
  >
    <FaArrowRight size={18} className="text-gray-700" />
  </button>
);

const blogs = [
  {
    id: 1,
    title: "The Rise of JavaScript Frameworks",
    description:
      "JavaScript frameworks have evolved rapidly in the last few years...",
    image: "/collection-item3.jpg",
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js",
    description:
      "In today’s connected world, APIs are the backbone of most modern web applications...",
    image: "/insta-item5.jpg",
  },
  {
    id: 3,
    title: "Top UI/UX Trends to Watch",
    description:
      "Staying up to date with UI/UX trends is crucial for designers and developers alike...",
    image: "/product-item6.jpg",
  },
  {
    id: 4,
    title: "Mastering React Hooks",
    description:
      "React Hooks transformed the way developers write components by allowing them to manage state...",
    image: "/single-product-item.jpg",
  },
  {
    id: 5,
    title: "Web Performance Optimization Tips",
    description:
      "Slow websites lose users. In this blog, we focus on proven strategies to optimize...",
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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="my-20 space-y-8 px-4 sm:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          Latest Blog
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-2">
          Learn more about ceramics and pottery
        </p>
      </div>

      {/* Blog Slider */}
      <div className="relative">
        <Slider {...settings}>
          {blogs.map((item) => (
            <div
              key={item.id}
              className="p-4 md:p-6 space-y-3 bg-white rounded-md shadow-sm hover:shadow-lg transition"
            >
              <div className="relative w-full h-52 md:h-60 overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                {item.description}
              </p>
              <Link
                href="/#"
                className="text-sm text-amber-700 hover:text-amber-800 underline transition"
              >
                Read more
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {/* Footer Button */}
      <div className="text-center">
        <Link
          href="/#"
          className="inline-block bg-black text-white px-6 py-2 text-lg rounded-md hover:bg-gray-800 transition"
        >
          Read All
        </Link>
      </div>
    </section>
  );
};

export default LatestBlog;
