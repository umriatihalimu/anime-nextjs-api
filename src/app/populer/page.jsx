"use client";

import { getAnimeResponse } from "../../libs/api-libs";
import AnimeList from "@/components/AnimeList";
import { useEffect, useState } from "react";
import Pagination from "@/components/Utilities/Pagination";
import HeaderPopuler from "@/components/Utilities/HeaderPopuler";

const Page = () => {
  const [page, setPage] = useState(1);
  const [animePopuler, setAnimePopuler] = useState([]);

  const fetchAnime = async () => {
    const data = await getAnimeResponse("top/anime", `page=${page}`);
    setAnimePopuler(data);
  };

  // spy trigger fetchAnime
  useEffect(() => {
    fetchAnime();
  }, [page]);

  const lastpage = Math.ceil(animePopuler.pagination?.last_visible_page / 250);

  return (
    <>
      <HeaderPopuler title={"Populer"} page={page} />
      <AnimeList api={animePopuler} />
      <Pagination setPage={setPage} lastpage={lastpage} page={page} />
    </>
  );
};
export default Page;
