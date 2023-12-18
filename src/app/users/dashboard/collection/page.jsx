import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/libs/prisma";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });
  //console.log(collection);
  return (
    <>
      <Header title={"My Collection"} />
      <div className="grid mx-4 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 mt-3 justify-center text-primary">
        {collection.map((collect, index) => {
          //console.log(collect);

          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative border-2  rounded border-primary"
            >
              <Image
                src={collect.anime_img}
                height={200}
                width={200}
                alt="..."
                className="w-full object-cover"
              />

              <p className="absolute bottom-0 flex bg-gray-800 text-md w-full h-10 text-center items-center justify-center">
                {collect.anime_title}
              </p>
            </Link>
          );
          //console.log(anime);
        })}
      </div>
    </>
  );
};
export default Page;
