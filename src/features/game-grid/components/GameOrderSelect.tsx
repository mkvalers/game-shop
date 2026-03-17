import { Box, Text } from "@chakra-ui/react";
import type { ChangeEvent } from "react";
import { useColorModeValue } from "../../../components/ui/color-mode";
import type {
  GameOrdering,
  GameOrderingOption,
} from "../hooks/useGameOrdering";

interface Props {
  value: GameOrdering;
  options: GameOrderingOption[];
  onChange: (value: GameOrdering) => void;
}

const GameOrderSelect = ({ value, options, onChange }: Props) => {
  const bg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const selectTextColor = useColorModeValue("#1A202C", "#F7FAFC");
  const optionBgColor = useColorModeValue("#FFFFFF", "#1A202C");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as GameOrdering);
  };

  return (
    <Box>
      <Box
        width="full"
        height="44px"
        px={3}
        bg={bg}
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="xl"
        boxShadow="sm"
        display="flex"
        alignItems="center"
      >
        <Text
          color={textColor}
          fontSize="sm"
          fontWeight="medium"
          whiteSpace="nowrap"
          mr={2}
        >
          Order by
        </Text>

        <select
          value={value}
          onChange={handleChange}
          style={{
            flex: 1,
            height: "100%",
            background: "transparent",
            border: "none",
            outline: "none",
            color: selectTextColor,
          }}
        >
          {options.map((option) => (
            <option
              key={option.label}
              value={option.value}
              style={{ color: selectTextColor, backgroundColor: optionBgColor }}
            >
              {option.label}
            </option>
          ))}
        </select>
      </Box>
    </Box>
  );
};

export default GameOrderSelect;
