"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  // initialisasi useRouter
  const router = useRouter();
  const handle = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between text-primary mt-5 ms-5 me-5">
      <button className="hover:text-slate-400" onClick={handle}>
        <ArrowSquareLeft size={30} />
      </button>

      <h3>{title}</h3>
    </div>
  );
};
export default Header;
