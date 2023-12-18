import { getAnimeResponse } from "@/libs/api-libs";
import YoutubeTrailer from "@/components/Utilities/YoutubeTrailer";
import Image from "next/image";
import KoleksiBtn from "@/components/AnimeList/KoleksiBtn";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Header from "@/components/Dashboard/Header";
import KomenInput from "@/components/AnimeList/KomenInput";
import KomenBox from "@/components/AnimeList/KomenBox";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <Header title={""} />
      <div className=" text-primary px-3">
        <h2 className="text-xl font-semibold py-4 ">{anime.data.title}</h2>

        {!collection && user && (
          <KoleksiBtn
            anime_mal_id={id}
            user_email={user?.email}
            anime_title={anime.data.title}
            anime_img={anime.data.images.webp.image_url}
          />
        )}

        <div className="p-2 text-sm flex  text-primary overflow-x-auto">
          <div className="p-1 text-black">
            <h5 className=" rounded-md bg-primary px-2">
              Peringkat: {anime.data.rank}
            </h5>
          </div>
          <div className="p-1 text-black">
            <h5 className=" rounded-md bg-primary px-2">
              Skor: {anime.data.score}
            </h5>
          </div>
          <div className="p-1 text-black">
            <h5 className=" rounded-md bg-primary px-2">
              Year: {anime.data.year}
            </h5>
          </div>
          <div className="p-1 text-black">
            <h5 className=" rounded-md bg-primary px-2">
              Episode: {anime.data.episodes}
            </h5>
          </div>
          <div className="p-1 text-black">
            <h5 className=" rounded-md bg-primary px-2">
              Duration: {anime.data.duration}
            </h5>
          </div>
        </div>

        <div className="flex sm:flex-nowrap flex-wrap sm:content-center text-justify py-2 ">
          <Image
            className="rounded mr-3 mb-3"
            src={anime.data.images.webp.image_url}
            alt="..."
            width={500}
            height={500}
          />
          <p> {anime.data.synopsis}</p>
        </div>

        {user && (
          <div className="p-4 border-t-[0.02px] mt-4 ">
            <h3 className="mb-3 text-md">Komentar</h3>
            <KomenInput
              anime_mal_id={id}
              user_email={user?.email}
              username={user?.name}
              anime_title={anime.data.title}
            />
          </div>
        )}
        <div className="p-6">
          <KomenBox anime_mal_id={id} />
        </div>
        {/* <div>
          <YoutubeTrailer videoId={anime.data.trailer.youtube_id} />
        </div> */}
      </div>
    </>
  );
};
export default Page;
