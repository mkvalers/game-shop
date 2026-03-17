import { Box, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import { type Game } from "../api-clients/hooks/useGames";
import GameCard from "../features/game-grid/components/GameCard";
import GameOrderSelect from "../features/game-grid/components/GameOrderSelect";
import GameInfoLoadingState from "../features/game-grid/components/GameInfoLoadingState";
import GameSearchBar from "../features/game-grid/components/GameSearchBar";
import ReturnToTopButton from "../components/ReturnToTopButton";
import useGameGridGames from "../features/game-grid/hooks/useGameGridGames";
import useGameOrdering, {
  gameOrderingOptions,
} from "../features/game-grid/hooks/useGameOrdering";
import useGameGridScrollRestore from "../features/game-grid/hooks/useGameGridScrollRestore";
import useGameSearchQuery from "../features/game-grid/hooks/useGameSearchQuery";
import useInfiniteScrollLoadMore from "../features/game-grid/hooks/useInfiniteScrollLoadMore";
import useGenres from "../api-clients/hooks/useGenres";
import GenreFilterSelect from "../features/genre-filter/components/GenreFilterSelect";
import useGenreStore from "../features/genre-filter/store/genre-store";
import CommonSpinner from "../components/CommonSpinner";

const GameGridPage = () => {
  const selectedGenreId = useGenreStore((s) => s.genreId);
  const setSelectedGenreId = useGenreStore((s) => s.setGenreId);
  const { data: genresData, isLoading: isGenresLoading } = useGenres();

  const { ordering, setOrdering } = useGameOrdering();
  const { searchQuery, debouncedSearchQuery, setSearchQuery } =
    useGameSearchQuery();

  const {
    games,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGameGridGames(selectedGenreId, debouncedSearchQuery, ordering);

  useGameGridScrollRestore({ isLoading, gamesLength: games.length });

  const loadMoreRef = useInfiniteScrollLoadMore({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  return (
    <>
      {isError && <Text>Failed to load games.</Text>}

      <Grid
        templateColumns={{
          base: "1fr",
          sm: "1.4fr 1fr 1fr",
          lg: "1fr 260px",
        }}
        gap={4}
        mb={6}
        alignItems="end"
      >
        <Box minW={0} gridColumn={{ base: "1 / -1", sm: "auto" }}>
          <GameSearchBar value={searchQuery} onChange={setSearchQuery} />
        </Box>

        <Box minW={0} display={{ base: "block", lg: "none" }}>
          <GenreFilterSelect
            genres={genresData?.results ?? []}
            isLoading={isGenresLoading}
            selectedGenreId={selectedGenreId}
            onSelectGenre={setSelectedGenreId}
            showLabel={false}
          />
        </Box>

        <Box minW={0}>
          <GameOrderSelect
            value={ordering}
            options={gameOrderingOptions}
            onChange={setOrdering}
          />
        </Box>
      </Grid>

      <SimpleGrid columns={{ base: 2, md: 2, xl: 4 }} gap={6}>
        {(isLoading ? Array.from({ length: 12 }) : games).map((game, index) =>
          isLoading ? (
            <GameInfoLoadingState key={`game-skeleton-${index}`} />
          ) : (
            <GameCard key={(game as Game).id} game={game as Game} />
          ),
        )}
      </SimpleGrid>

      {!isLoading && !isError && games.length === 0 && (
        <Text mt={6}>No games match your search.</Text>
      )}

      <div ref={loadMoreRef} />

      {isFetchingNextPage && !debouncedSearchQuery && <CommonSpinner />}
      {!hasNextPage && games.length > 0 && (
        <Text mt={4}>You reached the end.</Text>
      )}

      <ReturnToTopButton />
    </>
  );
};

export default GameGridPage;
