import React, { useEffect, useState } from "react";
import apiClient from "../services/api-Client";

interface Game {
  id: number;
  name: string;
}

interface FetchingGame {
  count: number;
  results: Game[];
}

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchingGame>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => setErrors(err.message));
  }, []);

  return (
    <>
      {err && <p>{err}</p>}
      <ul>
        {games.map((val) => (
          <li key={val.id}>{val.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
