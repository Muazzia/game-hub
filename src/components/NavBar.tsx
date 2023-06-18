import {
  Box,
  HStack,
  Image,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import logo from "../assets/webpack.svg";
import ColorChanger from "./ColorChanger";
import Search from "./Search";
import { useState } from "react";

export interface SearchProps {
  setSearch: (search: string) => void;
}

const NavBar = ({ setSearch }: SearchProps) => {
  const isSmallScreen = useBreakpointValue({
    sm: false,
    base: true,
  });

  const [isClicked, setIsClicked] = useState(false);

  if (isSmallScreen) {
    // Render small screen version
    return (
      <>
        <HStack justifyContent={"space-between"} padding={"10px 20px"}>
          <Image src={logo} boxSize={"60px"} />
          <HStack>
            <Button onClick={() => setIsClicked(!isClicked)} variant="link">
              Search
            </Button>
            <ColorChanger />
          </HStack>
        </HStack>
        <Box marginX={5} marginY={3}>
          {isClicked && <Search onSearch={setSearch} />}
        </Box>
      </>
    );
  }

  // Render large screen version
  return (
    <HStack justifyContent={"space-between"} padding={"10px 20px"}>
      <Image src={logo} boxSize={"60px"} />
      <Search onSearch={setSearch} />
      <ColorChanger />
    </HStack>
  );
};

// const NavBar = ({ setSearch }: SearchProps) => {
//   return (
//     <HStack justifyContent={"space-between"} padding={"10px 20px"}>
//       <Image src={logo} boxSize={"60px"} />
//       <Search onSearch={setSearch} />
//       <ColorChanger />
//     </HStack>
//   );
// };

export default NavBar;
