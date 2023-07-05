import React from "react";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className="">
      <h1 className="text-primary-green text-3xl font-bold">
        {params.category}
      </h1>
      <div className="flex gap-12 mb-24 mt-12 odd:flex-row-reverse">
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className="text-3xl font-bold">Test</h1>
          <p>Desc</p>
          <button className="p-3 cursor-pointer bg-primary-green border-none rounded text-white w-max">
            See more
          </button>
        </div>
        <div className="flex-1 h-[31.25rem] relative">
          <Image
            fill={true}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt="ref_img"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex gap-12 mb-24 mt-12 odd:flex-row-reverse">
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className=" font-bold text-5xl">Test</h1>
          <p className="text-lg">Desc</p>
          <button className="p-3 cursor-pointer bg-primary-green border-none rounded text-white w-max">
            See more
          </button>
        </div>
        <div className="flex-1 h-[31.25rem] relative">
          <Image
            fill={true}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt="ref_img"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex gap-12 mb-24 mt-12 odd:flex-row-reverse">
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className="text-3xl font-bold">Test</h1>
          <p>Desc</p>
          <button className="p-3 cursor-pointer bg-primary-green border-none rounded text-white w-max">
            See more
          </button>
        </div>
        <div className="flex-1 h-[31.25rem] relative">
          <Image
            fill={true}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt="ref_img"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
