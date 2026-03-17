import useGames from "../../../api-clients/hooks/useGames";
import type { GameOrdering } from "./useGameOrdering";

const useGameGridGames = (
  genreId?: number,
  searchQuery?: string,
  ordering?: GameOrdering,
) => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames(genreId, searchQuery, ordering);

  const games = data?.pages.flatMap((page) => page.results) ?? [];

  return {
    games,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useGameGridGames;
