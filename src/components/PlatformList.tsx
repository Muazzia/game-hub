import React from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  BsPlaystation,
  BsNintendoSwitch,
  BsApple,
  BsAndroid,
  BsGlobe,
} from "react-icons/bs";
import { FaWindows, FaXbox } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { DiLinux } from "react-icons/di";

interface Props {
  object: Platform[];
}

const PlatformList = ({ object }: Props) => {
  const icons = new Map([
    ["playstation", BsPlaystation],
    ["pc", MdComputer],
    ["android", BsAndroid],
    ["mac", BsApple],
    ["linux", DiLinux],
    ["windows", FaWindows],
    ["web", BsGlobe],
    ["nintendo", BsNintendoSwitch],
    ["xbox", FaXbox],
  ]);

  //   console.log(object);
  return (
    <HStack>
      {object.map((obj) => (
        <Icon key={obj.id} as={icons.get(obj.slug)} color={"gray.500"} />
      ))}
      ;
    </HStack>
  );
};

export default PlatformList;
