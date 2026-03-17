import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../../../components/ui/color-mode";

interface Props {
  content: string;
}

const GameInfoAbout = ({ content }: Props) => {
  const surface = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const bodyText = useColorModeValue("gray.700", "gray.300");
  const subtleText = useColorModeValue("gray.500", "gray.400");

  return (
    <Box
      p={{ base: 5, md: 6 }}
      borderRadius="2xl"
      bg={surface}
      borderWidth="1px"
      borderColor={borderColor}
      boxShadow="xl"
    >
      <Text
        mb={3}
        textTransform="uppercase"
        letterSpacing="0.16em"
        fontSize="xs"
        color={subtleText}
      >
        About
      </Text>
      <Box
        color={bodyText}
        lineHeight="tall"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  );
};

export default GameInfoAbout;
