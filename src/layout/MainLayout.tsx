import { Box } from "@chakra-ui/react/box";
import NavBar from "../components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import AsideBar from "../features/genre-filter/components/AsideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
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
            <AsideBar />
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
