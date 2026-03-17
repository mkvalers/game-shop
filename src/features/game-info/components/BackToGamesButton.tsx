import { Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useColorModeValue } from "../../../components/ui/color-mode";

const BackToGamesButton = () => {
  const bg = useColorModeValue("white", "whiteAlpha.100");
  const hoverBg = useColorModeValue("gray.100", "whiteAlpha.200");
  const borderColor = useColorModeValue("gray.300", "whiteAlpha.300");
  const textColor = useColorModeValue("gray.900", "gray.100");

  return (
    <Link to="/">
      <Button
        mb={2}
        borderRadius="full"
        px={5}
        h="42px"
        bg={bg}
        color={textColor}
        borderWidth="1px"
        borderColor={borderColor}
        boxShadow="sm"
        _hover={{ bg: hoverBg, transform: "translateY(-1px)" }}
        _active={{ transform: "translateY(0)" }}
      >
        <HStack gap={2}>
          <Text fontSize="lg" lineHeight="1">
            &lt;
          </Text>
          <Text fontWeight="semibold">Back To Games</Text>
        </HStack>
      </Button>
    </Link>
  );
};

export default BackToGamesButton;
