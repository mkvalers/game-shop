import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react/box";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <>
      <Box mx={10} my={8}>
        <NavBar />
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
