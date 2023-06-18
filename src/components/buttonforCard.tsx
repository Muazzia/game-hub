import { Button, HStack } from "@chakra-ui/react";
import { useState } from "react";
import Search from "./Search";

interface Props {
  onClick: (search: string) => void;
}

const ButtonForCard = ({ onClick }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (set: boolean) => {
    setIsClicked(set);
  };

  return (
    <>
      {!isClicked ? (
        <Button variant="link" onClick={() => handleClick(true)}>
          Search
        </Button>
      ) : (
        // Render the component you want to display when the button is clicked
        <HStack>
          <Search onSearch={onClick} />
          <Button variant="link" onClick={() => handleClick(false)}>
            X
          </Button>
        </HStack>
      )}
    </>
  );
};

export default ButtonForCard;
