import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import CropUrl from "../services/Image-Url";

const GenreList = () => {
  const { data } = useGenres();
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
            <Text>{val.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
