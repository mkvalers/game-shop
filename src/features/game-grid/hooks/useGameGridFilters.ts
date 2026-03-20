import useGenres from "../../../api-clients/hooks/useGenres";
import useGenreStore from "../../genre-filter/store/genre-store";
import useGameOrdering, { gameOrderingOptions } from "./useGameOrdering";
import useGameSearchQuery from "./useGameSearchQuery";

const useGameGridFilters = () => {
  const selectedGenreId = useGenreStore((s) => s.genreId);
  const setSelectedGenreId = useGenreStore((s) => s.setGenreId);
  const { data: genresData, isLoading: isGenresLoading } = useGenres();
  const { ordering, setOrdering } = useGameOrdering();
  const { searchQuery, debouncedSearchQuery, setSearchQuery } = useGameSearchQuery();

  return {
    selectedGenreId,
    setSelectedGenreId,
    genres: genresData?.results ?? [],
    isGenresLoading,
    ordering,
    setOrdering,
    orderingOptions: gameOrderingOptions,
    searchQuery,
    debouncedSearchQuery,
    setSearchQuery,
  };
};

export default useGameGridFilters;
