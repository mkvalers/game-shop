import { Box } from "@chakra-ui/react";
import type { ChangeEvent, ReactNode } from "react";
import { useColorModeValue } from "./ui/color-mode";
import useCardSurface from "./useCardSurface";

interface Props {
  value: string | number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  children: ReactNode;
}

const StyledSelect = ({ value, onChange, disabled, children }: Props) => {
  const { surface, borderColor } = useCardSurface();
  const selectTextColor = useColorModeValue("#1A202C", "#F7FAFC");

  return (
    <Box
      width="full"
      height="44px"
      px={3}
      bg={surface}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="xl"
      boxShadow="sm"
      display="flex"
      alignItems="center"
    >
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={{
          flex: 1,
          height: "100%",
          background: "transparent",
          border: "none",
          outline: "none",
          color: selectTextColor,
        }}
      >
        {children}
      </select>
    </Box>
  );
};

export default StyledSelect;
