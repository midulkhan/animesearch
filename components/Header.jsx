import Link from "next/link";
import React from "react";

export const Header = () => {
  const Menus = [
    {
      title: "Find Your Anime",
      URL: "/anime",
    },
  ];

  return (
    <div className="flex flex-row justify-between px-20 py-6 fixed bg-black z-10 w-full">
      <div className="logo">
        <h1 className="text-white text-2xl font-mono font-bold uppercase">
          <Link href={"/"}>Anime World</Link>
        </h1>
      </div>

      <div className="menu flex flex-row gap-5">
        {Menus.map((item) => (
          <Link
            className="text-white font-audiowide"
            key={item.title}
            href={item.URL}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
