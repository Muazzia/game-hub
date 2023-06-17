import { HStack, Image, PropsOf, Text } from "@chakra-ui/react";
import logo from "../assets/webpack.svg";
import ColorChanger from "./ColorChanger";
import Search from "./Search";

export interface SearchProps {
  setSearch: (search: string) => void;
}

const NavBar = ({ setSearch }: SearchProps) => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px 20px"}>
      <Image src={logo} boxSize={"60px"} />
      <Search onSearch={setSearch} />
      <ColorChanger />
    </HStack>
  );
};

export default NavBar;
