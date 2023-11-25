import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/libs-api";

const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=6`
  // );
  const anime = await getAnimeResponse("top/anime", "limit=6");
  //console.log(anime);

  return (
    <div>
      <Header
        title={"Terpopuler"}
        linkHref={"/populer"}
        titleRef={"Lihat semua"}
      />
      <AnimeList api={anime} />
    </div>
  );
};
export default Page;
