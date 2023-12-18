"use client";
import Image from "next/image";
import Link from "next/link";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const RekAnime = ({ api }) => {
  const slideLeft = () => {
    let left = document.getElementById("slider");
    left.scrollBy(350, 0);
  };

  const slideRight = () => {
    let right = document.getElementById("slider");
    right.scrollLeft = right.scrollBy(-350, 0);
  };

  return (
    <>
      {/* relative flex spy ke samping */}
      <div
        className="
      flex items-center text-primary p-2 "
      >
        <MdChevronLeft
          onClick={slideLeft}
          size={60}
          className="cursor-pointer opacity-50 hover:opacity-100"
        />
        <div
          id="slider"
          className="flex overflow-x-scroll  scroll scroll-smooth    scrollbar-hide "
        >
          {api.data?.map((data, index) => {
            return (
              <div className="p-1">
                <div className="h-68 w-72">
                  <Link href={`/anime/${data.mal_id}`} key={index}>
                    <Image
                      className="p-2 rounded  w-full object-cover h-60"
                      width={100}
                      height={100}
                      src={data.images.webp.image_url}
                      alt={data.images.jpg.image_url}
                      priority={false}
                    />

                    <p className="p-2 text-sm font-semibold">{data.title}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={60}
          className="cursor-pointer opacity-50 hover:opacity-100"
        />
      </div>
    </>
  );
};
export default RekAnime;

{
  /* <Link className="" href={`/anime/${data.mal_id}`} key={index}>
<Image
  className=" p-2 rounded  w-72 h-60"
  width={200}
  height={200}
  src={data.images.webp.image_url}
  alt={data.images.jpg.image_url}
  priority={false}
/>
<div className="flex p-2">
  <p className="text-sm font-semibold truncate  ">
    {data.title}
  </p>
</div>
</Link> */
}

// <div className="grid md:grid-cols-4 grid-cols-2 gap-4 gap-y-6 p-4 justify-center ms-5 me-5 ">
//       {api.data?.map((data, index) => {
//         return (
//           <Link
//             className="card bg-gray-200 rounded cursor-pointer text-primary"
//             href={`/anime/${data.mal_id}`}
//             key={index}
//           >
//             <Image
//               className="w-full rounded"
//               width={200}
//               height={200}
//               src={data.images.webp.image_url}
//               alt={data.images.jpg.image_url}
//               priority={false}
//             />
//             <div className="p-3">
//               <h4 className="font-semibold hover:text-secondary">
//                 {data.title}
//               </h4>
//               {data.rating || (data.type && data.year) ? (
//                 <p className="text-sm flex flex-row">
//                   {data.rating} / {data.type}({data.year})
//                 </p>
//               ) : null}
//             </div>
//           </Link>
//         );
//       })}
//     </div>
