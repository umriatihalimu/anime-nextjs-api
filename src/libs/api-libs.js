export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};

// untuk ambil data didalam data(maping didalam maping)
export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((items) => items[objectProperty]);
};

// data dari rekomenAnime
// gap itu jarak berapa anime yg mau dimunculkan
// tanda(~~) agar hasil random tdk desimal
export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;
  const response = { data: data.slice(first, last) };
  return response;
};
