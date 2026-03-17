import { useNavigate } from "react-router-dom";
import useGenres from "../../../api-clients/hooks/useGenres";
import useGenreStore from "../store/genre-store";
import GenreList from "./GenreList";
import GenreListSkeleton from "./GenreListSkeleton";

const AsideBar = () => {
  const selectedGenreId = useGenreStore((s) => s.genreId);
  const setSelectedGenreId = useGenreStore((s) => s.setGenreId);
  const { data: genresData, isLoading } = useGenres();
  const navigate = useNavigate();

  const handleSelectGenre = (genreId?: number) => {
    setSelectedGenreId(genreId);
    navigate("/");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (isLoading) return <GenreListSkeleton />;

  return (
    <GenreList
      genres={genresData?.results ?? []}
      selectedGenreId={selectedGenreId}
      onSelectGenre={handleSelectGenre}
    />
  );
};

export default AsideBar;
