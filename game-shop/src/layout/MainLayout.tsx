import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react/box";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <>
      <Box mx={{ base: 3, md: 6, lg: 10 }} my={{ base: 4, md: 6, lg: 5 }}>
        <NavBar />
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
