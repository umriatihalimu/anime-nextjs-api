import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";
import YoutubeTrailer from "@/components/Utilities/YoutubeTrailer";
import Image from "next/image";
import KoleksiBtn from "@/components/AnimeList/KoleksiBtn";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Header from "@/components/Dashboard/Header";
import KomenInput from "@/components/AnimeList/KomenInput";
import KomenBox from "@/components/AnimeList/KomenBox";
import RekLain from "@/components/AnimeList/RekLain";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  let rekomenAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  // timpa rekomen anime dengan fungsi reproduce jgn lupa impor dulu fungsinya
  rekomenAnime = reproduce(rekomenAnime, 4);

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      {/* copy dari hero */}

      <div className=" bg-blue-700/30 bg-gradient-to-t from-blue-700/30 to-black border-t border-sky-900/10  w-full h-full">
        <Header title={""} />

        <div className="flex sm:flex-nowrap flex-wrap sm:content-center text-justify justify-between text-primary lg:p-10 p-3 me-3 lg:gap-20 md:gap-16 gap-20  ">
          <div className="lg:h-72 lg:w-64 md:h-72 md:w-64 h-80 w-72  lg:ms-20 ms-5 mb-10">
            <Image
              className="rounded "
              src={anime.data.images.webp.image_url}
              alt="..."
              width={500}
              height={500}
            />
          </div>

          {/* text */}
          <div className="lg:w-4/6 w-full lg:mt-1 mt-6 ">
            <h2 className="lg:text-4xl text-2xl font-bold lg:py-5 mb-4 ">
              {anime.data.title}
            </h2>
            <p className="line-clamp-6">{anime.data.synopsis}</p>
            <div className="text-sm flex  text-primary overflow-x-auto">
              {/* rating/peringkat */}
              <div className="p-3 text-primary">
                <div className="flex flex-row items-center px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="lg:w-8 lg:h-8 h-6 w-6  text-yellow-600 fill-yellow-600 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <div className="flex ms-1 font-sans lg:text-xl">
                    {anime.data.score}
                  </div>
                  <div className="px-3 flex flex-row gap-2 ">
                    <div className="flex items-center">|</div>
                    {anime.data.year && (
                      <div className="border border-white/30 border-opacity-30 rounded-md p-1">
                        {anime.data.year}
                      </div>
                    )}
                    <div className="flex flex-row border border-white/30 border-opacity-30 rounded-md p-1 ">
                      {anime.data.episodes}
                      <p className="ms-1"> Eps</p>
                    </div>
                    <div className="text-primary border border-white/30 border-opacity-30 rounded-md p-1 ">
                      {anime.data.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* trailer youtube & add koleksi*/}
            <div className="flex flex-row items-center">
              <YoutubeTrailer videoId={anime.data.trailer.youtube_id} />
              {!collection && user && (
                <KoleksiBtn
                  anime_mal_id={id}
                  user_email={user?.email}
                  anime_title={anime.data.title}
                  anime_img={anime.data.images.webp.image_url}
                />
              )}
            </div>
          </div>
        </div>

        {/* komentar dan rek lainnya */}
        <div className="flex md:flex-row flex-col lg:mt-28 mt-15 p-8  text-primary">
          <div className="md:w-4/6 sm:w-full  p-1 flex flex-col">
            <div className="font-semibold text-lg mb-3">Komentar</div>

            {user && (
              <div className="">
                <KomenInput
                  anime_mal_id={id}
                  user_email={user?.email}
                  username={user?.name}
                  anime_title={anime.data.title}
                />
              </div>
            )}
            <div className="">
              <KomenBox anime_mal_id={id} />
            </div>
          </div>

          {/* rekomendasi lain */}
          {/* {user && (
            <div
              className="md:w-2/6 sm:w-full
              p-1 "
            >
              <RekLain api={rekomenAnime} />
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};
export default Page;
