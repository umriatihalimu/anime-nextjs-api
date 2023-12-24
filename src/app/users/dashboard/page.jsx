import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="border-2 h-screen bg-blue-700/30 bg-gradient-to-t from-blue-700/30 to-black border-t border-sky-900/10 ">
      <div className="flex flex-col text-primary items-center justify-center mt-4">
        <h3 className="m-3 text-lg">Selamat datang, {user?.name}</h3>
        <Image src={user?.image} width={250} height={250} alt="..." />
      </div>
      <div className="flex flex-row  gap-4 mt-5 text-primary items-center justify-center">
        <Link
          href={"/users/dashboard/collection/"}
          className="bg-gray-700 rounded-sm p-1 hover:bg-gray-600"
        >
          My Collection
        </Link>
        <Link
          href={"/users/dashboard/comment/"}
          className="bg-gray-700 rounded-sm p-1 hover:bg-gray-600"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};
export default Page;
