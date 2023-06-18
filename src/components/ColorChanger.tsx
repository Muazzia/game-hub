import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorChanger = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>DarkMode</Text>
    </HStack>
  );
};

export default ColorChanger;
