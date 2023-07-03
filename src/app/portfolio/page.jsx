import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <h1 className="px-0 py-5 text-lg font-bold">Choose a gallery</h1>
      <div className="flex gap-12 border-solid border-gray-300  ">
        <Link href="" className="portfolio_link bg-link_image1 bg-cover ">
          <span className="portfolio-link__title">Illustrations</span>
        </Link>
        <Link href="" className="portfolio_link bg-link_image2">
          <span className="portfolio-link__title">Websites</span>
        </Link>
        <Link href="" className="portfolio_link bg-link_image3">
          <span className="portfolio-link__title">Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
