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
        <HStack justifyContent={"space-between"} marginBottom={2}>
          <PlatformList object={game.parent_platforms.map((e) => e.platform)} />
          <Critic score={game.metacritic} />
        </HStack>
        <Heading fontSize={"xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default CardComp;
