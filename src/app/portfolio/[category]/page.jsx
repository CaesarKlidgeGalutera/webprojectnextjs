import React from "react";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (category) => {
  const data = items[category];

  if(data){
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className="">
      <h1 className="text-primary-green text-3xl font-bold">
        {params.category}
      </h1>
      {data.map((item) => (
      <div className="flex gap-12 mb-24 mt-12 odd:flex-row-reverse" key={item.id}>
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className="text-3xl font-bold">{item.title}</h1>
          <p>={item.desc}</p>
          <button className="p-3 cursor-pointer bg-primary-green border-none rounded text-white w-max">
            See more
          </button>
        </div>
        <div className="flex-1 h-[31.25rem] relative">
          <Image
            fill={true}
            src={item.image}
            alt="ref_img"
            className="object-cover"
          />
        </div>
      </div>
      ))}
    </div>
  );
};

export default Category;
