import { Grid, GridItem } from "@chakra-ui/react";

const Home = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
      templateRows={{
        base: "auto 1fr",
        lg: "auto 1fr",
      }}
    >
      <GridItem area="aside" hideBelow="lg" bg={"green"}>
        Aside
      </GridItem>
      <GridItem area="main" bg={"blue"}>
        Main
      </GridItem>
    </Grid>
  );
};

export default Home;
