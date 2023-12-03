// ini api internal saya

import prisma from "@/libs/prisma";

// krn mau create data di database maka pake POST
export async function POST(request) {
  // untuk coba apaka muncul/tdk
  //return Response.json({ data: "hello" });

  const { anime_mal_id, user_email } = await request.json();
  const data = { anime_mal_id, user_email };

  const createCollection = await prisma.collection.create({ data }); //sesuai aturan prisma
  if (!createCollection)
    return Response.json({ status: 500, isCreated: false });
  else {
    return Response.json({ status: 200, isCreated: true });
  }
}
