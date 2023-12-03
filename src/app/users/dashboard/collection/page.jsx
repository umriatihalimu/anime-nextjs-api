import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Header title={"My Collection"} />
      <div className="grid mx-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-3 justify-center">
        <Link href={""} className="relative border  border-primary">
          <Image src={""} height={250} width={250} alt="..." />
          <div className="absolute bottom-0 flex bg-gray-800 text-md w-full h-10 text-center items-center justify-center">
            judul anime
          </div>
        </Link>
        <Link href={""} className="relative border  border-primary">
          <Image src={""} height={250} width={250} alt="..." />
          <div className="absolute bottom-0 flex bg-gray-800 text-md w-full h-10 text-center items-center justify-center">
            judul anime
          </div>
        </Link>
        <Link href={""} className="relative border  border-primary">
          <Image src={""} height={250} width={250} alt="..." />
          <div className="absolute bottom-0 flex bg-gray-800 text-md w-full h-10 text-center items-center justify-center">
            judul anime
          </div>
        </Link>
        <Link href={""} className="relative border  border-primary">
          <Image src={""} height={250} width={250} alt="..." />
          <div className="absolute bottom-0 flex bg-gray-800 text-md w-full h-10 text-center items-center justify-center">
            judul anime
          </div>
        </Link>
      </div>
    </>
  );
};
export default Page;
