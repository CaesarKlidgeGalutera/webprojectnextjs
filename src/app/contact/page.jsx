import Image from "next/image";
import contact_photo from "/public/contact.png";

export const metadata = {
  title: "Contact",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className="">
      <h1 className="text-5xl text-center font-extrabold mb-10">
        Let&apos;s Keep in Touch
      </h1>
      <div className="flex gap-24 items-center">
        <div className="flex-1 h-[31.25rem] relative">
          {" "}
          <Image
            src={contact_photo}
            alt="contact_photo"
            fill={true}
            className="object-contain img_animation"
          />
        </div>
        <form className="flex-1 flex flex-col gap-5 text-xl font-bold">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <textarea
            name="content"
            placeholder="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="p-3 cursor-pointer bg-primary-green border-none rounded text-white w-max">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
