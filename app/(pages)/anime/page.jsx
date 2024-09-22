import React, { Suspense } from "react";
import TopBanner from "./TopBanner";
import AnimeApiCall from "@/components/Actions";

import dynamic from "next/dynamic";
const AnimeCard = dynamic(() => import("@/components/AnimeCard"));

async function page({ searchParams }) {
  const searchKey = searchParams["search"];
  const GetAllAnimes = await AnimeApiCall(`?q=${searchKey}?limit=25`);

  return (
    <>
      <TopBanner Title={"Get Your"} GradientTitle="Anime Obsession" />
      <div className="grid grid-cols-5 gap-2 w-[80%] m-auto">
        <Suspense fallback={"...Loading"}>
          {GetAllAnimes?.map((items, index) => (
            <AnimeCard
              key={items.mal_id}
              Title={items.title}
              ImageUrl={items?.images?.jpg?.large_image_url}
              URL={`anime/${items.mal_id}`}
              ItemIndex={index}
              Desc={items?.synopsis}
            />
          ))}
        </Suspense>
      </div>
    </>
  );
}

export default page;
