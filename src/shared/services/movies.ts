import axios from "axios";

const instance = axios.create({
  baseURL: "http://www.omdbapi.com",
  params: {
    apikey: "e10ee77",
  },
});

const getMovies = async (s: string, page: number) => {
  const { data } = await instance.get("/", {
    params: {
      s,
      page,
    },
  });

  return data.Search;
};

export default getMovies;
