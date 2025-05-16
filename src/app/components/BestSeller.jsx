"use client";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PrevArrow = ({ onClick }) => (
  <button
    className="hidden sm:flex absolute bg-gray-100 rounded-full top-1/2 transform -translate-y-1/2 left-1 sm:left-3 p-3 z-10 hover:bg-gray-200 transition"
    onClick={onClick}
  >
    <FaArrowLeft size={18} className="text-gray-700" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="hidden sm:flex absolute bg-gray-100 rounded-full top-1/2 transform -translate-y-1/2 right-1 sm:right-3 p-3 z-10 hover:bg-gray-200 transition"
    onClick={onClick}
  >
    <FaArrowRight size={18} className="text-gray-700" />
  </button>
);

const bestSeller = [
  {
    id: 1,
    title: "Women's Floral Summer Dress",
    price: "$29.99",
    image: "/product-item1.jpg",
  },
  {
    id: 2,
    title: "Wireless Noise-Canceling Headphones",
    price: "$199.99",
    image: "/product-item2.jpg",
  },
  {
    id: 3,
    title: "Modern Ceramic Vase",
    price: "$45.00",
    image: "/product-item3.jpg",
  },
  {
    id: 4,
    title: "Smart Fitness Watch",
    price: "$79.99",
    image: "/product-item4.jpg",
  },
  {
    id: 5,
    title: "Minimalist Leather Wallet",
    price: "$19.99",
    image: "/product-item5.jpg",
  },
  {
    id: 6,
    title: "Eco-Friendly Bamboo Cutlery Set",
    price: "$14.99",
    image: "/product-item6.jpg",
  },
  {
    id: 7,
    title: "Portable Bluetooth Speaker",
    price: "$49.99",
    image: "/product-item7.jpg",
  },
];

const BestSeller = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
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
    <section className="text-center space-y-10 py-16 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-wide">
          Best Sellers
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
          These are the items that are best sellers
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <Slider {...settings}>
          {bestSeller.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center px-2 sm:px-4 py-4 sm:py-6 space-y-4 hover:shadow-md rounded-md transition"
            >
              <div className="relative w-full aspect-[4/5] rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800">
                {item.title}
              </p>
              <p className="text-[#A9958B] text-sm sm:text-base font-semibold">
                {item.price}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Shop All Button */}
      <div>
        <Link
          href="/#"
          className="inline-block bg-black text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-md hover:bg-gray-800 transition"
        >
          Shop All
        </Link>
      </div>
    </section>
  );
};

export default BestSeller;
