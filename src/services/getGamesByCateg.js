import axios from "axios";

const getGamesByCateg = async (categ) => {
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: {
      category: categ,
    },
    headers: {
      "x-rapidapi-key": "832cb4d818msh8fb2fccbaa412ebp177c3cjsna673107f3d0a",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const resp = await axios.request(options);
  const { data } = resp;
  return data;
};

export default getGamesByCateg;
