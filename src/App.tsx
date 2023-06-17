import "./App.css";
import { Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import MenuListComp from "./components/MenuListComp";
import { MenuListProp } from "./hooks/useMenuList";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  const [selectedMenu, setSelectedMenu] = useState<MenuListProp | null>(null);
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
            <GenreList selected={selectedGenre} onSelect={setSelectedGenre} />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <MenuListComp
            selectedPlatform={selectedMenu}
            onSelect={setSelectedMenu}
          />
          <GamesGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedMenu}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
