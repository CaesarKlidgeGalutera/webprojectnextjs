import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className="flex items-center gap-12 mb-12"
          key={item.id}
        >
          <div className="">
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="mb-2 text-base font-bold">{item.title}</h1>
            <p className="text-lg text-gray-300">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
