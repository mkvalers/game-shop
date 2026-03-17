import { Input } from "@chakra-ui/react";
import { useColorModeValue } from "../../../components/ui/color-mode";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const GameSearchBar = ({ value, onChange }: Props) => {
  const bg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <Input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search games"
      size="lg"
      bg={bg}
      borderColor={borderColor}
      borderRadius="xl"
      boxShadow="sm"
      _focusVisible={{
        borderColor: "orange.400",
        boxShadow: "0 0 0 1px var(--chakra-colors-orange-400)",
      }}
    />
  );
};

export default GameSearchBar;
