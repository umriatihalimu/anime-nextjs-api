import { getAnimeResponse } from "@/libs/api-libs";
import YoutubeTrailer from "@/components/Utilities/YoutubeTrailer";
import Image from "next/image";
import KoleksiBtn from "@/components/AnimeList/KoleksiBtn";
import { authUserSession } from "@/libs/auth-libs";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  //console.log(anime);

  return (
    <div className=" text-primary p-3 ">
      <h2 className="text-xl font-semibold py-4 ">{anime.data.title}</h2>
      <KoleksiBtn anime_mal_id={id} user_email={user?.email} />
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
          className="rounded mr-3 mb-3 "
          src={anime.data.images.webp.image_url}
          alt="..."
          width={300}
          height={300}
        />
        <p> {anime.data.synopsis}</p>
      </div>

      <div>
        <YoutubeTrailer videoId={anime.data.trailer.youtube_id} />
      </div>
    </div>
  );
};
export default Page;
