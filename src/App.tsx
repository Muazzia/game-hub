import "./App.css";
import { HStack, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import MenuListComp from "./components/MenuListComp";
import { MenuListProp } from "./hooks/useMenuList";
import SortSelector from "./components/sortSelector";

export interface GameQuerry {
  genre: Genres | null;
  platform: MenuListProp | null;
  sort: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuerry>({} as GameQuerry);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav"  "main"`,
          lg: `"nav nav"  "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "220px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              selected={gameQuery.genre}
              onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <HStack spacing={2} paddingLeft={2} marginBottom={5}>
            <MenuListComp
              selectedPlatform={gameQuery.platform}
              onSelect={(platform) => setGameQuery({ ...gameQuery, platform })}
            />
            <SortSelector
              obj={gameQuery}
              onSet={(sort: string) => setGameQuery({ ...gameQuery, sort })}
            />
          </HStack>
          <GamesGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
