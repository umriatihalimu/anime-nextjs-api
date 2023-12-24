import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });
  return (
    <div className="bg-blue-700/30 bg-gradient-to-t from-blue-700/30 to-black border-t border-sky-900/10  w-full h-screen">
      <Header title={"My Comment"} />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 p-4">
        {comments.map((comment) => {
          return (
            <Link
              key={comment.id}
              href={`/anime/${comment.anime_mal_id}`}
              className="bg-primary text-black p-3 rounded text-sm"
            >
              <p className="font-bold">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Page;
