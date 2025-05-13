"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PrevArrow = ({ onClick }) => (
  <button
    className="hidden lg:flex absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 z-10 transition"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <FaArrowLeft size={20} className="text-gray-700" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="hidden lg:flex absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 z-10 transition"
    onClick={onClick}
    aria-label="Next slide"
  >
    <FaArrowRight size={20} className="text-gray-700" />
  </button>
);

const trendingItems = [
  {
    id: 1,
    title: "Women's Floral Summer Dress",
    price: "$29.99",
    image: "https://pebblely.com/categories/jewelry/ring-silk.jpg?width=720&quality=75",
  },
  {
    id: 2,
    title: "Wireless Noise-Canceling Headphones",
    price: "$199.99",
    image: "https://pebblely.com/categories/jewelry/ring-silk.jpg?width=720&quality=75",
  },
  {
    id: 3,
    title: "Modern Ceramic Vase",
    price: "$45.00",
    image: "https://pebblely.com/categories/jewelry/ring-silk.jpg?width=720&quality=75",
  },
  {
    id: 4,
    title: "Smart Fitness Watch",
    price: "$79.99",
    image: "https://pebblely.com/categories/jewelry/ring-silk.jpg?width=720&quality=75",
  },
  {
    id: 5,
    title: "Minimalist Leather Wallet",
    price: "$19.99",
    image: "https://pebblely.com/categories/jewelry/ring-silk.jpg?width=720&quality=75",
  },
  {
    id: 6,
    title: "Eco-Friendly Bamboo Cutlery Set",
    price: "$14.99",
    image: "https://pebblely.com/categories/jewelry/ring-silk.jpg?width=720&quality=75",
  },
  {
    id: 7,
    title: "Portable Bluetooth Speaker",
    price: "$49.99",
    image: "https://pebblely.com/categories/jewelry/ring-silk.jpg?width=720&quality=75",
  },
];

const WhatsTrending = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
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
    <section className="bg-white text-black text-center py-16 px-4">
      <div className="mb-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
          What's Trending
        </h1>
        <p className="text-base sm:text-xl text-gray-600">
          These are the items that are trending recently.
        </p>
      </div>

      <div className="relative max-w-screen-xl mx-auto">
        <Slider {...settings}>
          {trendingItems.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-gray-100 rounded-md p-4 h-full shadow-md hover:shadow-lg transition flex flex-col items-center">
                <div className="w-full aspect-[4/3] rounded-md overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-12">
        <button
          aria-label="View all trending products"
          className="bg-black text-white px-8 py-3 rounded-md hover:bg-blue-600 transition text-lg"
          onClick={() => alert("Viewing all trending products.")}
        >
          Shop All
        </button>
      </div>
    </section>
  );
};

export default WhatsTrending;
