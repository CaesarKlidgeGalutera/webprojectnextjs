import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate : 10}});

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
          href="/blog/testId"
          className="flex items-center gap-12 mb-12"
          key={item.id}
        >
          <div className="">
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
              width={400}
              height={250}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="mb-2 text-base font-bold">{item.title}</h1>
            <p className="text-lg text-gray-300">Desc</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
