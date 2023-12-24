import React from "react";
import Link from "next/link";

const RekLain = async ({ api }) => {
  return (
    <div className="flex flex-col ms-3">
      <div className="font-semibold  mb-4 mt-3 text-md">
        Rekomendasi lainnya
      </div>
      {api.data?.map((data, index) => {
        return (
          <Link
            href={`/anime/${data.mal_id}`}
            key={index}
            className="flex flex-row w-full h-32"
          >
            <div className="h-full w-48">
              <img
                src={data.images.webp.image_url}
                alt=""
                className="h-28 w-full object-cover rounded"
              />
            </div>
            <div className="w-48 text-sm p-1 ms-1">
              <p className="font-extralight">{data.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RekLain;
