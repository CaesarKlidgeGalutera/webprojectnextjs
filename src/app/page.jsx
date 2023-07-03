import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="header_gradient text-7xl font-bold">
          Better design for your digital products.
        </h1>
        <p>
          Turning your idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className="text-lg cursor-pointer bg-primary-green border-none rounded w-max p-3 text-white">
          See Our Works
        </button>
      </div>
      <Image
        src={Hero}
        alt="Hero_photo"
        className="flex-1 w-full h-[31.25rem] object-contain img_animation"
      />
    </div>
  );
}
