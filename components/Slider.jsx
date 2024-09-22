import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AnimeApiCall from "./Actions";
import Image from "next/image";

async function Slider({ ImageURL, AnimeTitle }) {
  const AnimeItem = await AnimeApiCall("?page=1&limit=25");

  return (
    <Carousel>
      <CarouselContent className="ml-0">
        {AnimeItem?.map((item, index) => (
          <CarouselItem
            key={item?.mal_id}
            className="relative basis-1/3 w-full h-96 overflow-hidden"
          >
            <Image
              src={item?.images?.jpg?.large_image_url}
              fill
              alt={item.title}
              className="object-cover p-2 rounded-[20px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white" />
      <CarouselNext className="text-white" />
    </Carousel>
  );
}

export default Slider;
