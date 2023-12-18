"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

//comment tdk usah dikirim krn sdh masuk dalam state
const KomenInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const router = useRouter();

  const handleInput = (e) => {
    setComment(e.target.value);
  };
  const handlePosting = async (e) => {
    e.preventDefault();
    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();

    if (postComment.status == 200) {
      setIsCreated(true);
      setComment(""); //pasangannya value={comment}
      router.refresh(); //spy otomatis terefresh komennya
    }
    return;
  };

  return (
    <div className="">
      {isCreated && <p className="text-primary">Komentar terkirim....</p>}
      <textarea
        onChange={handleInput}
        className="flex w-full h-20 text-sm text-slate-800 p-3 mb-2"
        placeholder="komentar"
        value={comment} //spy saat klik kirim textareamya jd kosong lagi
      />
      <button
        onClick={handlePosting}
        className="bg-slate-800 px-2 hover:bg-slate-600"
      >
        Kirim
      </button>
    </div>
  );
};
export default KomenInput;
