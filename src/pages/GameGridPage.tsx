import ReturnToTopButton from "../components/ReturnToTopButton";
import useGameGridScrollRestore from "../features/game-grid/hooks/useGameGridScrollRestore";
import useInfiniteScrollLoadMore from "../features/game-grid/hooks/useInfiniteScrollLoadMore";
import useGames from "../api-clients/hooks/useGames";
import useGameGridStore from "../features/game-grid/store/game-grid-store";
import useGenreStore from "../features/genre-filter/store/genre-store";
import GameGridControls from "../features/game-grid/components/GameGridControls";
import GameGridList from "../features/game-grid/components/GameGridList";

const GameGridPage = () => {
  const debouncedSearchQuery = useGameGridStore((s) => s.debouncedSearchQuery);
  const ordering = useGameGridStore((s) => s.ordering);
  const selectedGenreId = useGenreStore((s) => s.genreId);

  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGames(selectedGenreId, debouncedSearchQuery, ordering);

  const games = data?.pages.flatMap((page) => page.results) ?? [];

  const { saveScrollPosition } = useGameGridScrollRestore({ isLoading, gamesLength: games.length });
  const loadMoreRef = useInfiniteScrollLoadMore({ hasNextPage, isFetchingNextPage, fetchNextPage });

  return (
    <>
      <GameGridControls />
      <GameGridList
        games={games}
        isLoading={isLoading}
        isError={isError}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        debouncedSearchQuery={debouncedSearchQuery}
        loadMoreRef={loadMoreRef}
        onGameClick={saveScrollPosition}
      />
      <ReturnToTopButton />
    </>
  );
};

export default GameGridPage;
