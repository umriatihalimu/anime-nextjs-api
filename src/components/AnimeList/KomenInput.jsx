"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#F59E0B",
  white: "#eeeeee",
};

//comment tdk usah dikirim krn sdh masuk dalam state
const KomenInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const router = useRouter();
  const stars = Array(5).fill(0);
  const [rating, setRating] = useState(0);

  //   untuk update nilai value bintngnya
  const handleClick = (value) => {
    setRating(value);
  };

  const handleInput = (e) => {
    const { target } = e;
    setComment(target.value);
  };

  const handlePosting = async (e) => {
    e.preventDefault();
    const data = {
      anime_mal_id,
      user_email,
      comment,
      username,
      anime_title,
      rating,
    };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();

    if (comment.length > 3) {
      if (postComment.status == 200) {
        setIsCreated(true);
        setComment(""); //pasangannya value={comment}
        router.refresh(); //spy otomatis terefresh komennya
      }
    }
    setRating(0);
  };

  return (
    <div className="">
      {isCreated && <p className="text-primary">Komentar terkirim....</p>}

      <div>
        <textarea
          onChange={handleInput}
          className="flex w-full  rounded h-20 text-md text-slate-800 p-3 mb-2"
          placeholder="komentar"
          value={comment} //spy saat klik kirim textareamya jd kosong lagi
        />
        <div className="p-3 -mt-14  w-full flex justify-end">
          <button
            onClick={handlePosting}
            className=" text-slate-400 lg:w-auto hover:text-slate-600 font-semibold border rounded-lg px-1 "
          >
            Kirim
          </button>
        </div>
      </div>
      <div className="text-sm text-primary font-light pb-2">
        *minimal 3 karakter
      </div>

      {/* rating */}
      <div className="flex flex-row gap-3 items-center mb-4">
        <div className="text-lg">Rating :</div>
        <div className="flex flex-row ">
          {stars.map((_, index) => (
            <FaStar
              key={index}
              style={{ cursor: "pointer" }}
              className="mx-0.5"
              size={22}
              value={rating}
              color={rating > index ? colors.orange : colors.white}
              onClick={() => handleClick(index + 1)}
            />
          ))}
        </div>
      </div>

      {/* <button
        onClick={handlePosting}
        className="p-1 lg:w-auto md:w-auto w-full h-auto bg-slate-800 px-2 hover:bg-slate-600 md:flex md:justify-center rounded"
      >
        Kirim
      </button> */}
    </div>
  );
};
export default KomenInput;
