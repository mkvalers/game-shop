import { Spinner, Stack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  label?: string;
  minH?: string;
}

const CommonSpinner = ({ label = "Loading...", minH = "220px" }: Props) => {
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Stack align="center" justify="center" minH={minH} gap={3}>
      <Spinner size="xl" color="whiteAlpha.500" borderWidth="3px" />
      <Text color={textColor} fontSize="sm">
        {label}
      </Text>
    </Stack>
  );
};

export default CommonSpinner;
