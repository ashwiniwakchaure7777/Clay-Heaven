"use client";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PrevArrow = ({ onClick }) => (
  <button
    className="hidden md:flex absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 z-20 transition"
    onClick={onClick}
    aria-label="Previous Review"
  >
    <FaArrowLeft size={20} className="text-gray-700" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 z-20 transition"
    onClick={onClick}
    aria-label="Next Review"
  >
    <FaArrowRight size={20} className="text-gray-700" />
  </button>
);

const customerReviews = [
  {
    id: 1,
    customer: "John Doe",
    review:
      "I've tried many similar products before, but this one truly stands out. The quality is outstanding, and the craftsmanship is top-notch...",
    rating: 5,
  },
  {
    id: 2,
    customer: "Emily Smith",
    review:
      "A decent product for the price. The material feels good, and the design is sleek...",
    rating: 4,
  },
  {
    id: 3,
    customer: "Michael Johnson",
    review:
      "Unfortunately, my experience was not great. The product did not match the description...",
    rating: 2,
  },
  {
    id: 4,
    customer: "Sarah Brown",
    review:
      "Absolutely love this product! From the premium feel to the flawless performance, everything is perfect...",
    rating: 5,
  },
  {
    id: 5,
    customer: "David Wilson",
    review:
      "The product is good, but the shipping took longer than expected. The quality is decent...",
    rating: 3,
  },
  {
    id: 6,
    customer: "Olivia Martinez",
    review:
      "Wow! This is by far the best product I have bought in a while. The performance is exceptional...",
    rating: 5,
  },
  {
    id: 7,
    customer: "James Lee",
    review:
      "I had high hopes for this product, but it fell short of my expectations...",
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="text-center py-16 px-4 sm:px-6 md:px-10 bg-gray-50 border">
      <h1 className="text-3xl sm:text-5xl font-bold tracking-wide mb-8">
        What Our Customers Say
      </h1>

      <div className="max-w-screen-md mx-auto relative">
        <Slider {...settings}>
          {customerReviews.map((item) => (
            <div
              key={item.id}
              className="px-4 sm:px-6 py-8 bg-white rounded-lg shadow-md space-y-4 hover:shadow-lg transition"
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-600 italic leading-relaxed">
                “{item.review}”
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-yellow-500 font-semibold">
                  Rating: {item.rating} ★
                </p>
                <p className="text-xs sm:text-sm md:text-lg font-bold uppercase text-gray-800">
                  {item.customer}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhatCustomerSay;
