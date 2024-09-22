"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import "@/components/style.css";
import { motion } from "framer-motion";
import ImageSkeleton from "./loadingSkeleton/ImageSkeleton";

function AnimeCard({ Title, ImageUrl, Desc, Rating, URL, ItemIndex }) {
  const loadtime = 10 * ItemIndex;
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: ItemIndex,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    >
      <div className="max-w-screen-xl mx-auto p-5 ">
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <Link href={URL}>
            <div className="relative w-full h-60">
              <Suspense fallback={<ImageSkeleton />}>
                <Image
                  priority
                  src={ImageUrl}
                  fill
                  alt={Title}
                  placeholder="blur"
                  blurDataURL={ImageUrl}
                  className="object-cover"
                />
              </Suspense>
            </div>
          </Link>
          <div className="px-6 py-4 mb-auto bg-zinc-900 line-clamp-1">
            <Link
              href={URL}
              className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2 "
            >
              {Title}
            </Link>
            <p className="text-gray-500 text-sm line-clamp-2">{Desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AnimeCard;
