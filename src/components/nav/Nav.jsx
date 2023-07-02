"use client";

import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

function mapLinks(links) {
  return links.map((link) => (
    <Link key={link.id} href={link.url}>
      {link.title}
    </Link>
  ));
}

const Nav = () => {
  return (
    <div className="flex justify-between items-center h-24">
      <Link href="/" className="mr-auto font-bold text-xl">
        Rovr
      </Link>
      <div className="links">
        <div className="links">
          {mapLinks(links)}
        </div>
        <button
          className="primary_btn"
          onClick={() => {}}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Nav;
