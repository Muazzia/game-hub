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

interface Props {
  game: Game;
}

const CardComp = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"1xl"}>{game.name}</Heading>
        <PlatformList object={game.parent_platforms.map((e) => e.platform)} />
      </CardBody>
    </Card>
  );
};

export default CardComp;
