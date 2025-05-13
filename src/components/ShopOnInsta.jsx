"use client";
import Image from "next/image";

const images = [
  "/insta-item1.jpg",
  "/insta-item2.jpg",
  "/insta-item3.jpg",
  "/insta-item4.jpg",
  "/insta-item5.jpg",
  "/insta-item6.jpg",
];

const ShopOnInsta = () => {
  return (
    <section className="w-full px-4 sm:px-10 lg:px-20 py-16 text-center space-y-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide">
        Shop Our Insta
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full aspect-square overflow-hidden rounded-md group"
          >
            <Image
              src={src}
              alt={`Insta image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopOnInsta;
