import useGames from "../hooks/useGames";

const GamesGrid = () => {
  const { games, err } = useGames();
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
