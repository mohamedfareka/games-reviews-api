import React, { useState } from "react";
import getGamesByCateg from "../../services/getGamesByCateg";
import { useEffect } from "react";
import Game from "../Game/Game";

export default function Shooter() {
  const category = "shooter";
  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getGamesByCateg(category);
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
