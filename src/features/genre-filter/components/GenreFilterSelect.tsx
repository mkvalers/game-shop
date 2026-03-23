import { Box, Text } from "@chakra-ui/react";
import type { ChangeEvent } from "react";
import type { Genre } from "../../../api-clients/hooks/useGenres";
import { useColorModeValue } from "../../../components/ui/color-mode";
import StyledSelect from "../../../components/StyledSelect";

interface Props {
  genres: Genre[];
  isLoading?: boolean;
  selectedGenreId?: number;
  onSelectGenre: (genreId?: number) => void;
  showLabel?: boolean;
}

const GenreFilterSelect = ({
  genres,
  isLoading,
  selectedGenreId,
  onSelectGenre,
  showLabel = true,
}: Props) => {
  const textColor = useColorModeValue("gray.700", "gray.300");
  const optionBgColor = useColorModeValue("#FFFFFF", "#1A202C");
  const optionTextColor = useColorModeValue("#1A202C", "#F7FAFC");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onSelectGenre(value ? Number(value) : undefined);
  };

  return (
    <Box>
      {showLabel && (
        <Text mb={2} fontSize="sm" fontWeight="medium" color={textColor}>
          Filter by genre
        </Text>
      )}
      <StyledSelect
        value={selectedGenreId ?? ""}
        onChange={handleChange}
        disabled={isLoading}
      >
        <option
          value=""
          style={{ color: optionTextColor, backgroundColor: optionBgColor }}
        >
          All genres
        </option>
        {genres.map((genre) => (
          <option
            key={genre.id}
            value={genre.id}
            style={{ color: optionTextColor, backgroundColor: optionBgColor }}
          >
            {genre.name}
          </option>
        ))}
      </StyledSelect>
    </Box>
  );
};

export default GenreFilterSelect;
