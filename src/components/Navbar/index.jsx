import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionBtn from "./UserActionBtn";

const Navbar = () => {
  return (
    <header className=" border-b-[1px] border-gray-500 text-primary w-full ">
      <div className="flex p-4 max-w-screen-2xl md:flex-row flex-col gap-y-2 justify-between items-center  py-5  h-full uppercase">
        <Link href="/" className=" font-bold text-2xl">
          Anime.id
        </Link>

        <InputSearch />
        <UserActionBtn />
      </div>
    </header>
  );
};
export default Navbar;
