import { getAnimeResponse } from "@/app/libs/libs-api";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params: { keyword } }) => {
  //masukkan params ke keyword
  const decode = decodeURI(keyword);

  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decode}`
  // );
  const searchAnime = await getAnimeResponse("anime", `q=${decode}`);
  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decode}`} linkHref="" titleRef={""} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};
export default Page;
