import { Box, Flex, Grid, HStack } from "@chakra-ui/react";
import GameSearchBar from "./GameSearchBar";
import GameOrderSelect from "./GameOrderSelect";
import GenreFilterSelect from "../../genre-filter/components/GenreFilterSelect";
import useGameGridStore, { gameOrderingOptions } from "../store/game-grid-store";
import useGenreStore from "../../genre-filter/store/genre-store";
import useGenres from "../../../api-clients/hooks/useGenres";

const GameGridControls = () => {
  const searchQuery = useGameGridStore((s) => s.searchQuery);
  const setSearchQuery = useGameGridStore((s) => s.setSearchQuery);
  const ordering = useGameGridStore((s) => s.ordering);
  const setOrdering = useGameGridStore((s) => s.setOrdering);
  const selectedGenreId = useGenreStore((s) => s.genreId);
  const setSelectedGenreId = useGenreStore((s) => s.setGenreId);
  const { data: genresData, isLoading: isGenresLoading } = useGenres();
  const genres = genresData?.results ?? [];

  return (
    <Grid
      templateColumns={{ base: "1fr", sm: "1fr", lg: "1fr 260px" }}
      gap={4}
      mb={6}
      alignItems="end"
    >
      <Flex minW={0} gridColumn={{ base: "1fr", sm: "auto" }} flex={1}>
        <GameSearchBar value={searchQuery} onChange={setSearchQuery} />
      </Flex>

      <HStack
        minW={0}
        gap={3}
        display={{ base: "flex", lg: "none" }}
        gridColumn="1 / -1"
        align="stretch"
      >
        <Box minW={0} flex={1}>
          <GenreFilterSelect
            genres={genres}
            isLoading={isGenresLoading}
            selectedGenreId={selectedGenreId}
            onSelectGenre={setSelectedGenreId}
            showLabel={false}
          />
        </Box>
        <Box minW={0} flex={1}>
          <GameOrderSelect
            value={ordering}
            options={gameOrderingOptions}
            onChange={setOrdering}
          />
        </Box>
      </HStack>

      <Box minW={0} display={{ base: "none", lg: "block" }}>
        <GameOrderSelect
          value={ordering}
          options={gameOrderingOptions}
          onChange={setOrdering}
        />
      </Box>
    </Grid>
  );
};

export default GameGridControls;
