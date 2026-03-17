import { Box, Text } from "@chakra-ui/react";
import type { ChangeEvent } from "react";
import type { Genre } from "../../../api-clients/hooks/useGenres";
import { useColorModeValue } from "../../../components/ui/color-mode";

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
  const bg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const selectTextColor = useColorModeValue("#1A202C", "#F7FAFC");
  const optionBgColor = useColorModeValue("#FFFFFF", "#1A202C");

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
        <select
          value={selectedGenreId ?? ""}
          onChange={handleChange}
          disabled={isLoading}
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
            border: "none",
            outline: "none",
            color: selectTextColor,
          }}
        >
          <option
            value=""
            style={{ color: selectTextColor, backgroundColor: optionBgColor }}
          >
            All genres
          </option>
          {genres.map((genre) => (
            <option
              key={genre.id}
              value={genre.id}
              style={{ color: selectTextColor, backgroundColor: optionBgColor }}
            >
              {genre.name}
            </option>
          ))}
        </select>
      </Box>
    </Box>
  );
};

export default GenreFilterSelect;
