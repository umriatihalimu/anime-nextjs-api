"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className=" text-primary items-center justify-center p-3 flex flex-col min-h-screen">
        <div>
          <FileSearch size={36} />
        </div>
        <h4 className="pt-2 pb-1"> Halaman Tidak ditemukan</h4>
        <Link
          className="underline text-sm hover:text-secondary font-extralight"
          href="/"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};
export default Page;
