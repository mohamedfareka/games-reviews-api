import { useEffect, useState } from "react";
import fetchGamesByCateg from "../../services/fetchGamesByCateg";
import React from "react";
import Game from "../Game/Game";

export default function Mmorpg() {
  const category = "mmorpg";
  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchGamesByCateg(category);
        setGames(data);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    })();
  }, [category]);

  return (
    <>
      <div className="row mt-5 g-4">
        {games?.map((game) => (
          <Game gameData={game} key={game.id}/>
        ))}
      </div>
    </>
  );
}
