import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useColorModeValue } from "./ui/color-mode";
import { IoGameControllerOutline } from "react-icons/io5";

const NavBar = () => {
  const surface = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <>
      <nav>
        <HStack
          justify={"center"}
          mb={4}
          px={{ base: 3, md: 4 }}
          py={{ base: 2.5, md: 3 }}
          borderRadius="2xl"
          bg={surface}
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow="md"
        >
          <HStack>
            <Box
              boxSize={14}
              display="flex"
              alignItems="center"
              justifyContent="center"
              mr={5}
            >
              <Link to="/">
                <IoGameControllerOutline size={50} />
              </Link>
            </Box>
          </HStack>
        </HStack>
      </nav>
    </>
  );
};

export default NavBar;
