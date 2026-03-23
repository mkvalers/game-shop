import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useCardSurface from "./useCardSurface";
import { IoGameControllerOutline } from "react-icons/io5";

const NavBar = () => {
  const { surface, borderColor } = useCardSurface();

  return (
    <nav>
        <HStack
          justify="center"
          mb={4}
          px={{ base: 3, md: 4 }}
          py={{ base: 2.5, md: 3 }}
          borderRadius="2xl"
          bg={surface}
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow="md"
        >
          <Box
            boxSize={14}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Link to="/">
              <IoGameControllerOutline size={50} />
            </Link>
          </Box>
        </HStack>
    </nav>
  );
};

export default NavBar;
