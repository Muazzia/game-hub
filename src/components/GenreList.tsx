import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import CropUrl from "../services/Image-Url";

import { Genres } from "../hooks/useGenres";

interface Props {
  onSelect: (genre: Genres) => void;
}

const GenreList = ({ onSelect }: Props) => {
  const { data, isloading, Error } = useGenres();

  if (Error) return null;
  if (isloading) return <Spinner />;
  return (
    <List>
      {data.map((val) => (
        <ListItem key={val.id} paddingY={2}>
          <HStack key={val.id}>
            <Image
              boxSize={"28px"}
              src={CropUrl(val.image_background)}
              borderRadius={4}
            />
            <Button onClick={() => onSelect(val)} variant={"link"}>
              {val.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
