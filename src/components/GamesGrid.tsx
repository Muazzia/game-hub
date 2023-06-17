import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import CardComp from "./CardComp";
import SkeletonComp from "./SkeletonComp";
import GameCardContainer from "./GameCardContainer";

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
        {isloading &&
          skeleton.map((val) => (
            <GameCardContainer key={val}>
              <SkeletonComp />
            </GameCardContainer>
          ))}
        {games.map((val) => (
          <GameCardContainer key={val.id}>
            <CardComp game={val} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
