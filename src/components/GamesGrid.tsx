import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import CardComp from "./CardComp";
import SkeletonComp from "./SkeletonComp";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";
import { MenuListProp } from "../hooks/useMenuList";
import { GameQuerry } from "../App";

interface Props {
  gameQuery: GameQuerry;
}

const GamesGrid = ({ gameQuery }: Props) => {
  const { data, Error, isloading, setErrors } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {Error && <p>{Error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={2}
        padding={"10px"}
      >
        {isloading &&
          skeleton.map((val) => (
            <GameCardContainer key={val}>
              <SkeletonComp />
            </GameCardContainer>
          ))}
        {data.map((val) => (
          <GameCardContainer key={val.id}>
            <CardComp game={val} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
