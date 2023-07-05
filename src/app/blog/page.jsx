import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <Link href="/blog/testId" className="flex items-center gap-12 mb-12" >
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
        <h1 className="mb-2 text-5xl font-bold">Test</h1>
        <p className="text-lg">Desc</p>
      </div>
      </Link>
      <Link href="/blog/testId" className="flex items-center gap-12 mb-12" >
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
        <h1 className="mb-2 text-5xl font-bold">Test</h1>
        <p className="text-lg">Desc</p>
      </div>
      </Link>
    </div>
  );
};

export default Blog;
