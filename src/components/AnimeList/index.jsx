"use client";

import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-black/40 mt-10 mb-16">
      <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-5 ">
        {api.data?.map((data, index) => {
          //console.log(data);
          return (
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow  rounded">
              <div className="lg:h-96 lg:w-72 sm:h-80 sm:w-60 ">
                <Image
                  src={data.images.webp.image_url}
                  width={200}
                  height={200}
                  alt=".."
                  className="h-full w-full object-cover  group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* overlaynya */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black-70"></div>

              {/* text & btn */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[61%] hover:translate-y-0 transition-all">
                <h2 className="font-bold text-xl text-primary mb-5">
                  {data.title}
                </h2>
                <p className=" text-md italic text-primary mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-24 overflow-hidden text-ellipsis">
                  {data.synopsis}
                </p>
                <Link
                  className="rounded bg-neutral-900 py-2 px-3.5 text-sm capitalize text-primary shadow shadow-black/60 "
                  href={`/anime/${data.mal_id}`}
                  onClick={scrollToTop}
                  key={index}
                >
                  Lihat
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimeList;
