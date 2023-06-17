import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuerry } from "../App";

interface Props {
  obj: GameQuerry;
  onSet: (sort: string) => void;
}

const SortSelector = ({ obj, onSet }: Props) => {
  const list = [
    { value: "Relevance", path: "" },
    { value: "Name", path: "name" },
    { value: "Added", path: "-added" },
    { value: "Rating", path: "-rating" },
    { value: "Metacritic", path: "-metacritic" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{" "}
        {obj.sort
          ? list.find((val) => val.path === obj.sort)?.value
          : "Relevance"}
      </MenuButton>
      <MenuList>
        {list.map((val) => (
          <MenuItem onClick={() => onSet(val.path)} key={val.path}>
            {val.value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
