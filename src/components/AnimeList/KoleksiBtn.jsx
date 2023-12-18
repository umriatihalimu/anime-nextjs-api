"use client";

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
        <p className="text-primary">berhasil ditambahkan</p>
      ) : (
        <button
          className="flex ms-3 p-1 rounded-sm text-sm bg-slate-700 hover:bg-slate-500 "
          onClick={handle}
        >
          tambah ke koleksi
        </button>
      )}
    </>
  );
};

export default KoleksiBtn;
