import Image from "next/image";
import about_photo from "public/about_photo.jpeg";

const About = () => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src={about_photo}
          alt="about_photo"
          className="w-full h-[18.75rem] object-cover grayscale"
        />
        <div className="absolute bottom-5 left-5 bg-primary-green p-1 text-white">
          <h1 className="text-2xl font-extrabold">Digital Storytellers</h1>
          <h2 className="text-lg font-bold">
            Handcrafting award winning digital export
          </h2>
        </div>
      </div>
      <div className="flex gap-24 mt-12">
        <div className="flex-1 flex flex-col gap-7">
          <h1 className="text-4xl font-bold">Who Are we?</h1>
          <p className="text-lg font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            ipsa? Dignissimos officiis iste praesentium et eius? Eligendi quod
            velit, quas doloribus ex quis assumenda, cupiditate unde blanditiis
            ea aut corrupti. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vero accusantium alias iusto harum iste aut dolorem molestiae
            culpa deleniti totam commodi, modi ratione accusamus sed natus
            aperiam ipsam. Assumenda, quisquam!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            ipsa? Dignissimos officiis iste praesentium et eius? Eligendi quod
            velit, quas doloribus ex quis assumenda, cupiditate unde blanditiis
            ea aut corrupti. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vero accusantium alias iusto harum iste aut dolorem molestiae
            culpa deleniti totam commodi, modi ratione accusamus sed natus
            aperiam ipsam. Assumenda, quisquam!
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-7">
          <h1 className="text-4xl font-bold">What We Do?</h1>
          <p className="text-lg font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            commodi ex dolorum similique molestias repudiandae asperiores illum
            consequuntur. Quaerat sunt, delectus odit suscipit architecto illo
            accusamus mollitia quidem nulla doloribus?
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy Mobile Apps
            <br />
            <br /> - Mobile Apps
          </p>
            <a type="button" href="/contact" className="p-3 cursor-pointer bg-primary-green border-none rounded text-white w-max">
              Contact
            </a>
        </div>
      </div>
    </div>
  );
};

export default About;
