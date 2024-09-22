import { revalidatePath } from "next/cache";

async function AnimeApiCall(UrlString) {
  const baseURL = process.env.NEXT_MOVIE_BASE_URl;
  const response = await fetch(`${baseURL + UrlString}`, { cache: "no-store" });

  if (response.ok) {
    const getAnime = await response.json();
    const data = await getAnime.data;
    return data;
  } else {
    console.log("some wrong with the api call");
  }
}

export default AnimeApiCall;
