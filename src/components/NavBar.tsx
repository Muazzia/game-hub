import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/webpack.svg";
import React from "react";
import ColorChanger from "./ColorChanger";
import Search from "./Search";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px 20px"}>
      <Image src={logo} boxSize={"60px"} />
      <Search />
      <ColorChanger />
    </HStack>
  );
};

export default NavBar;
