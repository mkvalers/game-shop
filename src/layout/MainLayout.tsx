import { Box } from "@chakra-ui/react/box";
import NavBar from "../components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

interface Props {
  aside?: React.ReactNode;
}

const MainLayout = ({ aside }: Props) => {
  return (
    <>
      <Box
        minH="100vh"
        mx={{ base: 3, md: 6, lg: 10 }}
        my={{ base: 4, md: 6, lg: 5 }}
      >
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
          <GridItem area="nav">
            <NavBar />
          </GridItem>

          <GridItem area="aside" hideBelow="lg">
            {aside}
          </GridItem>

          <GridItem area="main">
            <Outlet />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default MainLayout;
