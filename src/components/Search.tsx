import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchProps } from "./NavBar";

interface Props {
  onSearch: (search: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  //   const FormControl = (event) => {};

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search Games..."
          borderRadius={10}
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default Search;
