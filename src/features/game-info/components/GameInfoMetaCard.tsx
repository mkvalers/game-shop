import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../../../components/ui/color-mode";

interface Props {
  label: string;
  value: string;
  accentColor: string;
}

const GameInfoMetaCard = ({ label, value, accentColor }: Props) => {
  const surface = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const headingColor = useColorModeValue("gray.900", "gray.100");

  return (
    <Box
      p={5}
      borderRadius="xl"
      bg={surface}
      borderWidth="1px"
      borderColor={borderColor}
      boxShadow="md"
    >
      <Text
        mb={2}
        fontSize="xs"
        textTransform="uppercase"
        letterSpacing="0.14em"
        color={accentColor}
      >
        {label}
      </Text>
      <Text fontWeight="semibold" color={headingColor}>
        {value}
      </Text>
    </Box>
  );
};

export default GameInfoMetaCard;
