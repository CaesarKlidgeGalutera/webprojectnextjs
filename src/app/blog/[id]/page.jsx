import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({params}){
 const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  }
}

const Post = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-4xl">{data.title}</h1>
          <p className="text-lg font-light">
            {data.desc}
          </p>
          <div className="flex items-center gap-2">
            <Image
              src={data.img}
              alt="data_img"
              width={40}
              height={40}
              className="object-cover rounded-full"
            />
            <span>{data.username}</span>
          </div>
        </div>
        <div className="flex-1 h-[18.75rem] relative">
          <Image
            src={data.img}
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-12 text-lg font-light text-gray-500 text-justify ">
        <p>
         {data.content}
        </p>
      </div>
    </div>
  );
};

export default Post;
