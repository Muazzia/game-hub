import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import CardComp from "./CardComp";
import SkeletonComp from "./SkeletonComp";

const GamesGrid = () => {
  const { games, err, isloading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {err && <p>{err}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={20}
        padding={"10px"}
      >
        {isloading && skeleton.map((val) => <SkeletonComp key={val} />)}
        {games.map((val) => (
          <CardComp key={val.id} game={val} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
