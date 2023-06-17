import React from "react";
import { Game } from "../hooks/useGames";
import PlatformList from "./PlatformList";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import Critic from "./Critic";

interface Props {
  game: Game;
}

const CardComp = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
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
