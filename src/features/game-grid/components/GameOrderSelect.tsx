import type { ChangeEvent } from "react";
import { useColorModeValue } from "../../../components/ui/color-mode";
import StyledSelect from "../../../components/StyledSelect";
import type { GameOrdering, GameOrderingOption } from "../store/game-grid-store";

interface Props {
  value: GameOrdering;
  options: GameOrderingOption[];
  onChange: (value: GameOrdering) => void;
}

const GameOrderSelect = ({ value, options, onChange }: Props) => {
  const optionBgColor = useColorModeValue("#FFFFFF", "#1A202C");
  const optionTextColor = useColorModeValue("#1A202C", "#F7FAFC");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as GameOrdering);
  };

  return (
    <StyledSelect value={value} onChange={handleChange}>
      {options.map((option) => (
        <option
          key={option.label}
          value={option.value}
          style={{ color: optionTextColor, backgroundColor: optionBgColor }}
        >
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default GameOrderSelect;
