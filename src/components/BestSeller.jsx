"use client";
import Link from "next/link";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute bg-gray-100 rounded-full top-1/2 transform -translate-y-1/2 left-[00px] p-3 z-10"
    onClick={onClick}
  >
    <FaArrowLeft size={20} className="text-gray-700" />
  </button>
);
const NextArrow = ({ onClick }) => (
  <button
    className="absolute bg-gray-100 rounded-full top-1/2 transform -translate-y-1/2 right-[00px] p-3 z-10"
    onClick={onClick}
  >
    <FaArrowRight size={20} className="text-gray-700" />
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

  return (
    <div className="text-center space-y-5 my-30 px-40">
      <div className="text-center">
        <h1 className="text-5xl tracking-wide">Best Sellers</h1>
        <p className="3xl tracking-wider">
          These are the items that are best seller
        </p>
      </div>
      <div className="px-20 ">
        <Slider {...settings}>
          {bestSeller.map((item) => (
            <div
              key={item?.id}
              className="flex items-center justify-between p-6 h-100 "
            >
              <img src={item?.image} className="h-80 w-full object-cover"></img>
              <p className="text-xl tracking-wide">{item?.title}</p>
              <p className="text-[#A9958B] text-xl">{item?.price}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="">
        <Link href={"/#"} className="bg-black text-white px-8 py-2">
          Shop All
        </Link>
      </div>
    </div>
  );
};

export default BestSeller;
