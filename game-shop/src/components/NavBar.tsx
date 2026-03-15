import { Box, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import vite from "../assets/vite.svg";
import react from "../assets/react.svg";

const NavBar = () => {
  return (
    <>
      <nav>
        <HStack justify={"space-between"}>
          <Box
            boxSize={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Link to="/">
              <Image src={vite} alt="Vite" fit={"cover"} />
            </Link>
          </Box>
          <Box
            boxSize={10}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Link to="/cart">
              <Image src={react} alt="React" fit={"cover"} />
            </Link>
          </Box>
        </HStack>
      </nav>
    </>
  );
};

export default NavBar;
