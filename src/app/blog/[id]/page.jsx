import Image from "next/image";

const Post = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-4xl">
            Lorem ipsum dolor 
          </h1>
          <p className="text-lg font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dignissimos, laboriosam, minima maxime optio fugit consequatur porro assumenda natus nemo nulla! Excepturi quod harum voluptates quae modi vero eligendi dolorum!</p>
          <div className="flex items-center gap-2">
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt="data_img"
              width={40}
              height={40}
              className="object-cover rounded-full"
            />
            <span>John Doe</span>
          </div>
        </div>
        <div className="flex-1 h-[18.75rem] relative">
          <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" alt="" fill={true} className="object-cover" />
        </div>
      </div>
      <div className="mt-12 text-lg font-light text-gray-500 text-justify ">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse adipisci fugit earum fuga error voluptas voluptatum cumque obcaecati cum, quia ea asperiores provident itaque nihil dolores dolorem quam iusto veniam.</p>
      </div>
    </div>
  );
};

export default Post;
