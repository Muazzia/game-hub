import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
} from "@chakra-ui/react";

interface Props {
  game: Game;
}

const CardComp = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"3xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default CardComp;
