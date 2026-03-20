import ReturnToTopButton from "../components/ReturnToTopButton";
import useGameGridGames from "../features/game-grid/hooks/useGameGridGames";
import useGameGridScrollRestore from "../features/game-grid/hooks/useGameGridScrollRestore";
import useInfiniteScrollLoadMore from "../features/game-grid/hooks/useInfiniteScrollLoadMore";
import useGameGridFilters from "../features/game-grid/hooks/useGameGridFilters";
import GameGridControls from "../features/game-grid/components/GameGridControls";
import GameGridList from "../features/game-grid/components/GameGridList";

const GameGridPage = () => {
  const {
    selectedGenreId,
    setSelectedGenreId,
    genres,
    isGenresLoading,
    ordering,
    setOrdering,
    orderingOptions,
    searchQuery,
    debouncedSearchQuery,
    setSearchQuery,
  } = useGameGridFilters();

  const { games, isLoading, isError, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useGameGridGames(selectedGenreId, debouncedSearchQuery, ordering);

  useGameGridScrollRestore({ isLoading, gamesLength: games.length });

  const loadMoreRef = useInfiniteScrollLoadMore({ hasNextPage, isFetchingNextPage, fetchNextPage });

  return (
    <>
      <GameGridControls
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        ordering={ordering}
        orderingOptions={orderingOptions}
        onOrderChange={setOrdering}
        genres={genres}
        isGenresLoading={isGenresLoading}
        selectedGenreId={selectedGenreId}
        onGenreSelect={setSelectedGenreId}
      />
      <GameGridList
        games={games}
        isLoading={isLoading}
        isError={isError}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        debouncedSearchQuery={debouncedSearchQuery}
        loadMoreRef={loadMoreRef}
      />
      <ReturnToTopButton />
    </>
  );
};

export default GameGridPage;
