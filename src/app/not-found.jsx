"use client";
import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <div className=" text-primary items-center justify-center p-3 flex flex-col min-h-screen">
        <div>
          <FileSearch size={36} />
        </div>
        <h4 className="pt-2 pb-1"> Halaman Tidak ditemukan</h4>
        <button
          onClick={() => router.back()}
          className="underline text-sm hover:text-secondary font-extralight"
          href="/"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};
export default Page;
