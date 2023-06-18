import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MdOutlineDarkMode } from "react-icons/md";

const ColorChanger = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <MdOutlineDarkMode size={"32px"} />
    </HStack>
  );
};

export default ColorChanger;
