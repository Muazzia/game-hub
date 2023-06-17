import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        placeholder="Search Games..."
        borderRadius={10}
        variant={"filled"}
      />
    </InputGroup>
  );
};

export default Search;
