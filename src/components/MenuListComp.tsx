import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useMenuList from "../hooks/useMenuList";

const MenuListComp = () => {
  const { data, Error, isloading } = useMenuList();

  if (Error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Actions
      </MenuButton>
      <MenuList>
        {data.map((obj) => (
          <MenuItem onSelect={() => console.log(obj.name)} key={obj.id}>
            {obj.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuListComp;
