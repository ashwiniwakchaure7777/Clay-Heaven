"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 z-10"
    onClick={onClick}
  >
    <FaArrowLeft size={20} className="text-gray-700" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 z-10"
    onClick={onClick}
  >
    <FaArrowRight size={20} className="text-gray-700" />
  </button>
);

const WhatsTrending = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  const trendingItems = [
    {
      id: 1,
      title: "Women's Floral Summer Dress",
      price: "$29.99",
      image:
        "https://pebblely.com/categories/jewelry/ring-silk.jpg?width=720&quality=75",
    },
    {
      id: 2,
      title: "Wireless Noise-Canceling Headphones",
      price: "$199.99",
      image:
        "https://pebblely.com/categories/jewelry/ring-silk.jpg?width=720&quality=75",
    },
    {
      id: 3,
      title: "Modern Ceramic Vase",
      price: "$45.00",
      image:
        "https://pebblely.com/categories/jewelry/ring-silk.jpg?width=720&quality=75",
    },
    {
      id: 4,
      title: "Smart Fitness Watch",
      price: "$79.99",
      image:
        "https://pebblely.com/categories/jewelry/ring-silk.jpg?width=720&quality=75",
    },
    {
      id: 5,
      title: "Minimalist Leather Wallet",
      price: "$19.99",
      image:
        "https://pebblely.com/categories/jewelry/ring-silk.jpg?width=720&quality=75",
    },
    {
      id: 6,
      title: "Eco-Friendly Bamboo Cutlery Set",
      price: "$14.99",
      image:
        "https://pebblely.com/categories/jewelry/ring-silk.jpg?width=720&quality=75",
    },
    {
      id: 7,
      title: "Portable Bluetooth Speaker",
      price: "$49.99",
      image:
        "https://pebblely.com/categories/jewelry/ring-silk.jpg?width=720&quality=75",
    },
  ];

  return (
    <div className="bg-white text-black text-center h-[calc(100vh-80px)] pt-12">
      <div className="space-y-2 mb-6" >
        <h1 className="text-5xl font-bold tracking-wide text-gray-800">

          What's Trending
        </h1>
        <p className="text-black text-2xl tracking-wider">
          These are the items that are trending recently.
        </p>
      </div>

      <div className="max-w-3/4 mx-auto">
        <Slider {...settings}>
          {trendingItems.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-gray-100 rounded-md p-4 h-95 shadow-md flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button
        className="mt-25 bg-black text-white px-12 py-4 hover:bg-blue-600 transition text-xl"
        onClick={() => alert(`You clicked on ${item.title}`)}
      >
        Shop All
      </button>
    </div>
  );
};

export default WhatsTrending;
