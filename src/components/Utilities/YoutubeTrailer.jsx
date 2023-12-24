"use client";
import YouTube from "react-youtube";
import { X } from "@phosphor-icons/react";
import { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

const YoutubeTrailer = ({ videoId }) => {
  const option = {
    //bawaan react min ada width dan heigt
    width: "310",
    height: "250",
  };

  const [isOpen, setIsOpen] = useState(false); //yt trailer awalnya false (tertutup)
  const handleBtn = () => {
    setIsOpen((prevBtn) => !prevBtn);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2 ">
        {/* float-right spy ke kanan btnnya */}

        <button
          className="justify-end bg-black float-right mb-1"
          onClick={handleBtn}
        >
          <X size={20} />
        </button>
        {/* onReady adl callback yg klo pertama kli muncul vidnya terpause */}
        <YouTube
          videoId={videoId}
          opts={option}
          onReady={(e) => e.target.pauseVideo}
        />
      </div>
    );
  };

  const BtnPlayer = () => {
    return (
      <button
        className="flex flex-row ms-1 p-2 px-4 bg-slate-900 rounded-2xl gap-1 hover:bg-opacity-50 hover:text-white/80 shadow-md text-sm font-semibold"
        onClick={handleBtn}
      >
        <PlayIcon className="h-6 w-6 text-primary " />
        Trailer
      </button>
    );
  };

  // jika vid open maka jalankan komponen Player
  return isOpen ? (
    <div>
      <Player />
      <BtnPlayer />
    </div>
  ) : (
    <BtnPlayer />
  );
};
export default YoutubeTrailer;
