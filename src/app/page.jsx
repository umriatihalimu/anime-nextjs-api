import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Hero from "@/components/AnimeList/Hero";
import PopAnime from "@/components/AnimeList/PopAnime";
import RekAnime from "@/components/AnimeList/RekAnime";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  const anime = await getAnimeResponse("top/anime", "limit=4");

  let rekomenAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  // timpa rekomen anime dengan fungsi reproduce jgn lupa impor dulu fungsinya
  rekomenAnime = reproduce(rekomenAnime, 8);

  //munculkan data recomendation
  //console.log(rekomenAnime);

  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        {/* <Header
          title={"Terpopuler"}
          linkHref={"/populer"}
          titleRef={"Lihat semua"}
        /> */}
        <AnimeList api={anime} />
      </section>
      <section>
        <Header title={"Rekomendasi"} />
        <RekAnime api={rekomenAnime} />
      </section>
    </>
  );
};
export default Page;
