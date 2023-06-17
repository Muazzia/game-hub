import { Game } from "../hooks/useGames";
import PlatformList from "./PlatformList";
import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import Critic from "./Critic";
import CropUrl from "../services/Image-Url";

interface Props {
  game: Game;
}

const CardComp = ({ game }: Props) => {
  return (
    <Card>
      <Image src={CropUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"1xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformList object={game.parent_platforms.map((e) => e.platform)} />
          <Critic score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default CardComp;
