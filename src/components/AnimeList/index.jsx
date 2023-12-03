"use client";

import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-2 justify-center ms-5 me-5 ">
      {api.data?.map((data, index) => {
        return (
          <Link
            className="card bg-gray-200 rounded cursor-pointer text-primary"
            href={`/anime/${data.mal_id}`}
            key={index}
          >
            <Image
              className="rounded"
              width={500}
              height={500}
              src={data.images.webp.image_url}
              alt={data.images.jpg.image_url}
              priority={false}
            />
            <div className="p-3">
              <h4 className="font-semibold hover:text-secondary">
                {data.title}
              </h4>
              {data.rating || (data.type && data.year) ? (
                <p className="text-sm flex flex-row">
                  {data.rating} / {data.type}({data.year})
                </p>
              ) : null}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default AnimeList;
