import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import type { Genre } from "../../../api-clients/hooks/useGenres";

interface Props {
  genres: Genre[];
  selectedGenreId?: number;
  onSelectGenre: (genreId?: number) => void;
}

const GenreList = ({ genres, selectedGenreId, onSelectGenre }: Props) => {
  const [pendingGenreId, setPendingGenreId] = useState<number | undefined>(undefined);
  const displayGenreId = pendingGenreId ?? selectedGenreId;

  const handleSelectGenre = (genreId?: number) => {
    setPendingGenreId(genreId);
    onSelectGenre(genreId);
  };

  return (
    <Box mr={3} overflow="hidden">
      <Heading fontSize="2xl" mb={4}>
        Genres
      </Heading>
      <VStack align="stretch" gap={2}>
        <Button
          justifyContent="flex-start"
          variant={displayGenreId === undefined ? "solid" : "ghost"}
          onClick={() => handleSelectGenre(undefined)}
          transition="background-color 0.2s ease, color 0.2s ease, transform 0.2s ease"
        >
          All genres
        </Button>
        {genres.map((genre) => {
          const isSelected = displayGenreId === genre.id;
          return (
            <Button
              key={genre.id}
              justifyContent="flex-start"
              variant={isSelected ? "solid" : "ghost"}
              onClick={() => handleSelectGenre(genre.id)}
              transition="background-color 0.2s ease, color 0.2s ease, transform 0.2s ease"
              _hover={{ transform: "translateX(4px)" }}
            >
              <HStack gap={3} width="full" justify="flex-start">
                {genre.image_background && (
                  <Image
                    src={genre.image_background}
                    alt={genre.name}
                    boxSize="40px"
                    borderRadius="md"
                    objectFit="cover"
                    flexShrink={0}
                    transition="filter 0.25s ease, transform 0.25s ease"
                    filter={isSelected ? "none" : "saturate(0.75)"}
                    transform={isSelected ? "scale(1.02)" : "scale(1)"}
                  />
                )}
                <Text transition="color 0.2s ease">{genre.name}</Text>
              </HStack>
            </Button>
          );
        })}
      </VStack>
    </Box>
  );
};

export default GenreList;
