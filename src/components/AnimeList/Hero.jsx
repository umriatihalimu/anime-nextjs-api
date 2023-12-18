"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="">
      <div className="flex items-center  relative  h-screen   w-full  text-primary  bg-gradient-to-b from-black/50 via-white/50 ">
        <img
          src={"https://wallpaperaccess.com/full/4022287.jpg"}
          className="w-full h-full object-cover absolute   mix-blend-overlay  "
        />
        <div className=" p-24  ">
          <h1 className="font-bold md:text-5xl text-3xl mb-3  drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-slate-700  ">
            Welcome,
          </h1>
          <p className="md:text-lg text-sm mb-3 drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-slate-700 ">
            <TypeAnimation
              sequence={[`Nonton dimana aja kapan aja!!`, 2000]}
              wrapper="span"
              speed={30}
              style={{ display: "inline-block" }}
            />
          </p>
          <Link
            className="absolute rounded border border-neutral-700 hover:border hover:border-neutral-700 hover:bg-transparent bg-neutral-700 py-2 px-3.5 text-sm capitalize text-primary shadow shadow-black/20 "
            href={`/populer`}
          >
            Lihat Populer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
