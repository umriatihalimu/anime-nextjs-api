"use client";
import YouTube from "react-youtube";
import { X } from "@phosphor-icons/react";
import { useState } from "react";

const YoutubeTrailer = ({ videoId }) => {
  const option = {
    //bawaan react min ada width dan heigt
    width: "280",
    height: "230",
  };

  const [isOpen, setIsOpen] = useState(true); //yt trailer awalnya true(terbuka)
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
        className="fixed bottom-4 right-5 bg-primary text-black hover:bg-gray-500 rounded p-1 text-sm"
        onClick={handleBtn}
      >
        Lihat trailer
      </button>
    );
  };

  // jika vid open maka jalankan komponen Player
  return isOpen ? <Player /> : <BtnPlayer />;
};
export default YoutubeTrailer;
