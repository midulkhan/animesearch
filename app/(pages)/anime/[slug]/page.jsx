import AnimeApiCall from "@/components/Actions";
import ImageSkeleton from "@/components/loadingSkeleton/ImageSkeleton";
import Image from "next/image";
import React, { Suspense } from "react";
import { FaStar } from "react-icons/fa";

async function page({ params }) {
  const { slug } = params;
  const Anime = await AnimeApiCall(`/${slug}`);
  const dateStr = await Anime.aired.from;
  const dateObj = new Date(dateStr);

  const formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="h-screen w-full flex flex-row flex-1 justify-center items-center ">
      <div className="flex flex-row  justify-start bg-zinc-900 px-10 gap-5 rounded-xl min-h-min  w-2/3 pt-20 pb-20">
        <div className="relative">
          <Suspense fallback={<ImageSkeleton />}>
            <Image
              src={Anime?.images?.jpg?.large_image_url}
              width={300}
              height={500}
              alt={Anime.title}
              placeholder="blur"
              blurDataURL={Anime?.images?.jpg?.large_image_url}
              className="object-cover  rounded-2xl"
            />
          </Suspense>
        </div>
        <div className="flex-1 items-start align-top">
          <h1 className="text-4xl font-bold capitalize ">{Anime.title}</h1>
          <p className="mt-5">{Anime?.synopsis}</p>
          <div className="flex mt-3 gap-2">
            <p className="px-6 py-1 bg-zinc-800 rounded-full flex gap-2 items-center">
              {Anime.score == null ? (
                <>
                  <FaStar fill={"red"} /> Not Rated yet
                </>
              ) : (
                <>
                  <FaStar />
                  {Anime.score}
                </>
              )}
            </p>
          </div>

          <div className="mt-6">
            <ul>
              <div className="flex flex-row gap-2 items-center">
                <li className="font-bold">Producers : </li>

                {Anime.producers.length == 0 ? (
                  <li className="px-4 py-1 rounded-full border-1 border border-gray-700 ">
                    Unknown
                  </li>
                ) : (
                  Anime?.producers.map((item) => (
                    <li
                      key={item.mal_id}
                      className="px-4 py-1 rounded-full border-1 border border-gray-700"
                    >
                      {item.name}
                    </li>
                  ))
                )}
              </div>

              <div className="flex flex-row gap-2 items-center mt-2">
                <li className="font-bold">Genres : </li>
                {Anime.genres.length == 0 ? (
                  <li className="px-4 py-1 rounded-full border-1 border border-gray-700">
                    Unknown
                  </li>
                ) : (
                  Anime?.genres.map((item) => (
                    <li
                      key={item.mal_id}
                      className="px-4 py-1 rounded-full border-1 border border-gray-700"
                    >
                      {item.name}
                    </li>
                  ))
                )}
              </div>

              <div className="flex flex-row gap-2 items-center mt-2">
                <li className="font-bold">Aired :</li>
                <li className="px-4 py-1 rounded-full border-1 border border-gray-700">
                  {formattedDate}
                </li>
                <li>{}</li>
              </div>
            </ul>
          </div>

          {/* <p className="font-bold mt-6">
            Producers:
            <span>
              {Anime?.producers.map((item) => (
                <span className="font-light rounded-full border border-1 border-gray-600 ml-2 px-3 py-1">
                  {item.name}
                </span>
              ))}
            </span>
          </p>
          <p>
            Genres:
            {Anime?.genres.map((item) => (
              <span className="font-light rounded-full border border-1 border-gray-600 ml-2 px-3 py-1">
                {item.name}
              </span>
            ))}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default page;
