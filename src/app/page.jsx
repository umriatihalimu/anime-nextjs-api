import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  const anime = await getAnimeResponse("top/anime", "limit=8");
  let rekomenAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  // timpa rekomen anime dengan fungsi reproduce jgn lupa impor dulu fungsinya
  rekomenAnime = reproduce(rekomenAnime, 4);

  //munculkan data recomendation
  //console.log(rekomenAnime);

  return (
    <>
      <section>
        <Header
          title={"Terpopuler"}
          linkHref={"/populer"}
          titleRef={"Lihat semua"}
        />
        <AnimeList api={anime} />
      </section>
      <section>
        <Header title={"Rekomendasi"} />
        <AnimeList api={rekomenAnime} />
      </section>
    </>
  );
};
export default Page;
