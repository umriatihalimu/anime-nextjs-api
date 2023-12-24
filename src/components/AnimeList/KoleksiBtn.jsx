"use client";
import { PlusIcon } from "@heroicons/react/24/solid";
import { CheckCircle } from "@phosphor-icons/react";
import { useState } from "react";

const KoleksiBtn = ({ anime_mal_id, user_email, anime_title, anime_img }) => {
  const [isCreated, setIsCreated] = useState(false);

  // objek diatas di tangkap di api/v1/collection/route
  const handle = async (e) => {
    e.preventDefault();

    // ambil lagi data dari api/v1/collection/route
    const data = { anime_mal_id, user_email, anime_title, anime_img };

    // panggil dari api/v1/collection
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.status == 200) {
      setIsCreated(true);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <div className="text-primary flex ml-3 p-2   rounded-xl text-sm  bg-slate-900 shadow-md px-3  justify-center items-center ">
          <CheckCircle className="h-5 w-5 mr-1" />
          <p>ditambahkan ke koleksi</p>
        </div>
      ) : (
        <button
          className="text-primary flex ml-3 p-2  rounded-xl text-sm  bg-slate-800 px-3 hover:bg-slate-600 justify-center items-center"
          onClick={handle}
        >
          <PlusIcon className="h-5 w-5 mr-1" />
          <p>tambah ke koleksi</p>
        </button>
      )}
    </>
  );
};

export default KoleksiBtn;
