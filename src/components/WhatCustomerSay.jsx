"use client";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NextArrow = ({ onclick }) => (
  <button
    className="absolute top-1/2 transform -translate-y-1/2 left-[180px] bg-gray-100 p-5 rounded-full shadow-md hover:bg-gray-200 z-20"
    onClick={onclick}
  >
    <FaArrowLeft size={20} className="text-gray-700"></FaArrowLeft>
  </button>
);

const PrevArrow = ({ onclick }) => (
  <button
    className="absolute top-1/2 transform -translate-y-1/2 right-[180px] bg-gray-100 p-5 rounded-full shadow-md hover:bg-gray-200 z-20"
    onClick={onclick}
  >
    <FaArrowRight size={20} className="text-gray-700"></FaArrowRight>
  </button>
);
const customerReviews = [
  {
    id: 1,
    customer: "John Doe",
    review:
      "I've tried many similar products before, but this one truly stands out. The quality is outstanding, and the craftsmanship is top-notch. I was initially skeptical, but the product exceeded my expectations. It arrived in secure packaging, and the customer support was quick to respond to my queries. Highly recommended for anyone looking for quality and reliability.",
    rating: 5,
  },
  {
    id: 2,
    customer: "Emily Smith",
    review:
      "A decent product for the price. The material feels good, and the design is sleek. However, the packaging could have been better, as it arrived slightly dented. Despite that, the product itself works perfectly, and the features are as advertised. If you are on a budget but want something reliable, this is a good choice.",
    rating: 4,
  },
  {
    id: 3,
    customer: "Michael Johnson",
    review:
      "Unfortunately, my experience was not great. The product did not match the description on the website. It felt cheap and broke within a week of use. I reached out to customer support, but they were slow to respond. I would not recommend this product based on my experience.",
    rating: 2,
  },
  {
    id: 4,
    customer: "Sarah Brown",
    review:
      "Absolutely love this product! From the premium feel to the flawless performance, everything is perfect. I use it daily, and it has made my life so much easier. The instructions were clear, the packaging was elegant, and the customer support was very helpful. I have already recommended this to my friends and family.",
    rating: 5,
  },
  {
    id: 5,
    customer: "David Wilson",
    review:
      "The product is good, but the shipping took longer than expected. The quality is decent, and it serves its purpose well. I believe the company can work on faster delivery. Other than that, I am satisfied with my purchase.",
    rating: 3,
  },
  {
    id: 6,
    customer: "Olivia Martinez",
    review:
      "Wow! This is by far the best product I have bought in a while. The performance is exceptional, and the design is so stylish. I have been using it for over a month now, and it works perfectly without any issues. It is worth every penny, and I will definitely purchase again in the future.",
    rating: 5,
  },
  {
    id: 7,
    customer: "James Lee",
    review:
      "I had high hopes for this product, but it fell short of my expectations. The build quality is okay, but the performance is inconsistent. Sometimes it works perfectly, and other times it struggles. For the price, I expected better. I hope the company can improve the product in the future.",
    rating: 3,
  },
];

const WhatCustomerSay = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <div className="text-center pb-30 pt-10">
      <h1 className="text-5xl tracking-wide">What Our Customers Says</h1>
      <div>
        <Slider {...settings}>
          {customerReviews.map((item) => (
            <div key={item?.id} className="px-100 mt-5 space-y-4 ">
              <h2 className="text-2xl text-gray-400">
                <span>"</span>
                {item?.review}
                <span>"</span>
              </h2>
              <div>
                <p>
                  <span>Rating </span>
                  {item?.rating}
                </p>
                <p className="text-lg uppercase">{item?.customer}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhatCustomerSay;
