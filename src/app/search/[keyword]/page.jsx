import { getAnimeResponse } from "@/libs/api-libs";
import PopAnime from "@/components/AnimeList/PopAnime";
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
        <Header title={`Pencarian untuk ${decode}`} />
        <PopAnime api={searchAnime} />
      </section>
    </>
  );
};
export default Page;
