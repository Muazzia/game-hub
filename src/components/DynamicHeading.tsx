import { Text } from "@chakra-ui/react";
import { GameQuerry } from "../App";

interface Props {
  gameQuery: GameQuerry;
}

const DynamicHeading = ({ gameQuery }: Props) => {
  return (
    <Text as={"b"} fontSize={"4xl"}>
      {gameQuery.platform?.name} {gameQuery.genre?.name} Games
    </Text>
  );
};

export default DynamicHeading;
