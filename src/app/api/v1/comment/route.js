// ini api internal saya

import prisma from "@/libs/prisma";

// krn mau create data di database maka pake POST
export async function POST(request) {
  // untuk coba apaka muncul/tdk
  //return Response.json({ data: "hello" });

  const { anime_mal_id, user_email, username, comment, anime_title, rating } =
    await request.json();
  const data = {
    anime_mal_id,
    user_email,
    username,
    comment,
    anime_title,
    rating,
  };

  const createComment = await prisma.comment.create({
    data,
  }); //sesuai aturan prisma

  if (!createComment) return Response.json({ status: 500, isCreated: false });
  else {
    return Response.json({ status: 200, isCreated: true });
  }
}
