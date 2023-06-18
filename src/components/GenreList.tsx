import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import CropUrl from "../services/Image-Url";

import { Genres } from "../hooks/useGenres";

interface Props {
  selected: Genres | null;
  onSelect: (genre: Genres) => void;
}

const GenreList = ({ selected, onSelect }: Props) => {
  const { data, isloading, Error } = useGenres();

  if (Error) return null;
  if (isloading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"3xl"} marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data.map((val) => (
          <ListItem key={val.id} paddingY={2}>
            <HStack key={val.id}>
              <Image
                boxSize={"28px"}
                src={CropUrl(val.image_background)}
                borderRadius={4}
                fit={"cover"}
              />
              <Button
                onClick={() => onSelect(val)}
                variant={"link"}
                colorScheme={
                  selected ? (selected === val ? "blue" : "white") : "white"
                }
              >
                {val.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
