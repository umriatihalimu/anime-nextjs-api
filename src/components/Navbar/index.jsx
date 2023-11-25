import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className=" border-b-[1px] border-gray-500   text-primary w-full  ">
      <div className="flex p-4 max-w-screen-2xl md:flex-row flex-col justify-between items-center content-center h-full uppercase">
        <Link href="/" className=" mb-3 font-bold text-2xl">
          Anime.id
        </Link>

        <InputSearch />
      </div>
    </header>
  );
};
export default Navbar;
