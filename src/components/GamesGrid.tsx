import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import CardComp from "./CardComp";

const GamesGrid = () => {
  const { games, err } = useGames();
  return (
    <>
      {err && <p>{err}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={20}
        padding={"10px"}
      >
        {games.map((val) => (
          <CardComp key={val.id} game={val} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
