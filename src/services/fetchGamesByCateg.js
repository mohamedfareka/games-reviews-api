const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "832cb4d818msh8fb2fccbaa412ebp177c3cjsna673107f3d0a",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};
const fetchGamesByCateg = async (categ) => {
  try {
    const req = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categ}`,
      options
    );

    if (!req.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const response = await req.json();
    return response;
  } catch (err) {
    console.error("failed to fetch data : ", err);
    throw err;
  }
};

export default fetchGamesByCateg;
