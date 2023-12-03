import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export const authUserSession = async () => {
  const session = await getServerSession(authOption);

  //pake session? spy jika kita signout kan tdk ada user maka tidak error, cra bacanya klo ada user maka jalankan klo tdk maka tdk apa2
  return session?.user;
};
