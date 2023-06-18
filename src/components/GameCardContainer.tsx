import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      borderWidth="1px"
      borderColor="black"
      p="4"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
