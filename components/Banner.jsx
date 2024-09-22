import BackgroundBanner from "../app/assets/banner.jpg";
import "./style.css";
import "swiper/css";
import Slider from "./Slider";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

async function Banner() {
  // const GetBannerItem = await BannerApiCall();
  // const GetAnimeItems = await GetBannerItem.data;
  //   const RandomItem = Math.floor(Math.random() * GetAnimeItems.length);
  //   const data = GetAnimeItems[RandomItem];

  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className="flex flex-row items-center justify-between p-20 ">
          <div className="anime__content__right w-1/3">
            <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold  text-black dark:text-white font-sans tracking-tight">
              FIND OUT
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                  <span className="">BEST ANIME</span>
                </div>
              </div>
            </h2>

            <p className="text-white mt-5 mb-5 text-lg ml-2">
              This would set a dynamic tone and appeal to anime enthusiasts
              looking for a fast and comprehensive search experience. You could
              also feature popular anime characters or genres in the banner to
              draw in users visually.
            </p>
            <Link
              className="text-white px-10 border ml-2 border-white py-2 mt-10  rounded-bl-3xl rounded-tr-3xl inline-block"
              href={"#"}
            >
              See more
            </Link>
          </div>
          <div className="anime__content__left  w-1/2">
            <Slider />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}

export default Banner;
