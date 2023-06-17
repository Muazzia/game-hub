import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useMenuList, { MenuListProp } from "../hooks/useMenuList";

interface Porps {
  onSelect: (obj: MenuListProp | null) => void;
  selectedPlatform: MenuListProp | null;
}

const MenuListComp = ({ onSelect, selectedPlatform }: Porps) => {
  const { data, Error, isloading } = useMenuList();

  if (Error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Menu"}
      </MenuButton>
      <MenuList>
        {data.map((obj) => (
          <MenuItem onClick={() => onSelect(obj)} key={obj.id}>
            {obj.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuListComp;
