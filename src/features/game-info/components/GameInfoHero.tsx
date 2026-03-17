import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../../../components/ui/color-mode";

interface Props {
  name: string;
  image?: string;
}

const GameInfoHero = ({ name, image }: Props) => {
  const surface = useColorModeValue("white", "gray.900");
  const softSurface = useColorModeValue("gray.100", "gray.800");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <Box
      overflow="hidden"
      borderRadius="3xl"
      bg={surface}
      boxShadow="2xl"
      borderWidth="1px"
      borderColor={borderColor}
      position="relative"
    >
      {image ? (
        <Image
          src={image}
          alt={name}
          width="full"
          height={{ base: "280px", md: "420px", xl: "540px" }}
          objectFit="cover"
        />
      ) : (
        <Box
          height={{ base: "280px", md: "420px", xl: "540px" }}
          bg={softSurface}
        />
      )}

      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-t, blackAlpha.900, blackAlpha.500, transparent)"
      />

      <Box
        position="absolute"
        left={{ base: 4, md: 8 }}
        bottom={{ base: 4, md: 8 }}
        bg="blackAlpha.500"
        backdropFilter="blur(6px)"
        borderRadius="xl"
        px={{ base: 3, md: 5 }}
        py={{ base: 2.5, md: 4 }}
        maxW="min(90%, 720px)"
      >
        <Text
          textTransform="uppercase"
          letterSpacing="0.18em"
          fontSize="xs"
          color="orange.100"
          mb={2}
        >
          Game Profile
        </Text>
        <Heading
          color="white"
          fontSize={{ base: "3xl", md: "5xl" }}
          lineHeight="0.95"
          textShadow="0 2px 14px rgba(0,0,0,0.65)"
        >
          {name}
        </Heading>
      </Box>
    </Box>
  );
};

export default GameInfoHero;
