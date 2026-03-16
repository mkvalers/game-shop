import { Box, HStack, Text } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { useColorModeValue } from "./ui/color-mode";
import { IoCartOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";

const NavBar = () => {
  const surface = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const textColor = useColorModeValue("gray.900", "gray.100");
  const homeActiveText = useColorModeValue("orange.600", "orange.200");
  const homeHoverText = useColorModeValue("orange.500", "orange.300");

  return (
    <>
      <nav>
        <HStack
          justify={"space-between"}
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

            <NavLink to="/">
              {({ isActive }) => (
                <Text
                  fontSize="x-large"
                  fontWeight="semibold"
                  letterSpacing="0.01em"
                  px={1}
                  py={1}
                  color={isActive ? homeActiveText : textColor}
                  transition="color 0.2s ease"
                  _hover={{ color: isActive ? homeActiveText : homeHoverText }}
                >
                  Home
                </Text>
              )}
            </NavLink>
          </HStack>

          <HStack gap={2}>
            <Box
              boxSize={10}
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="background-color 0.2s ease"
            >
              <Link to="/cart">
                <IoCartOutline size={40} />
              </Link>
            </Box>
          </HStack>
        </HStack>
      </nav>
    </>
  );
};

export default NavBar;
