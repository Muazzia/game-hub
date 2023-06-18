import { Box, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import logo from "../assets/webpack.svg";
import ColorChanger from "./ColorChanger";
import Search from "./Search";
import ButtonForCard from "./buttonforCard";

export interface SearchProps {
  setSearch: (search: string) => void;
}

const NavBar = ({ setSearch }: SearchProps) => {
  const isSmallScreen = useBreakpointValue({
    sm: false,
    base: true,
  });

  if (isSmallScreen) {
    // Render small screen version
    return (
      <>
        <HStack justifyContent={"space-between"} padding={"10px 20px"}>
          <Image src={logo} boxSize={"60px"} />
          <HStack>
            <ButtonForCard onClick={setSearch} />
            <ColorChanger />
          </HStack>
        </HStack>
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
