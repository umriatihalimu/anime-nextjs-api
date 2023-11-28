"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const inputRef = useRef();
  const router = useRouter();

  const keyClick = (e) => {
    const keyword = inputRef.current.value;

    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      if (!keyword || keyword.trim() === "") {
        return;
      }
      router.push(`/search/${keyword}`);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="pe-4">
      <div className="search-bar flex  p-1 ps-4 pe-4 ">
        <input placeholder="cari anime" ref={inputRef} onKeyDown={keyClick} />
        <button onClick={keyClick}>
          <MagnifyingGlass size={25} />
        </button>
      </div>
    </div>
  );
};
export default InputSearch;
