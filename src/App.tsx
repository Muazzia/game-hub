import "./App.css";
import { Button, ButtonGroup, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ColorChanger from "./components/ColorChanger";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav"  "main"`,
          lg: `"nav nav"  "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={"yellow"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"coral"}>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
