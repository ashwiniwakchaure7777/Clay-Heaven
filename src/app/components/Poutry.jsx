"use client";
import Image from "next/image";

const Pottery = () => {
  return (
    <section className="w-full my-20 px-4 flex flex-col lg:flex-row gap-6 lg:gap-4 items-center justify-center">
      {/* Image 1 */}
      <div className="w-full lg:w-1/3 max-w-md flex justify-center items-center">
        <div className="relative w-full aspect-[4/3] lg:aspect-auto">
          <Image
            src="/collection-item1.jpg"
            alt="collection-1"
            fill
            className="object-cover rounded-md shadow-md"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      </div>

      {/* Image 2 */}
      <div className="w-full lg:w-1/3 max-w-md flex justify-center items-center">
        <div className="relative w-full aspect-[4/3] lg:aspect-auto">
          <Image
            src="/collection-item2.jpg"
            alt="collection-2"
            fill
            className="object-cover rounded-md shadow-md"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      </div>

      {/* Image 3 */}
      <div className="w-full lg:w-1/3 max-w-md flex justify-center items-center">
        <div className="relative w-full aspect-[4/3] lg:aspect-auto">
          <Image
            src="/collection-item3.jpg"
            alt="collection-3"
            fill
            className="object-cover rounded-md shadow-md"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Pottery;
