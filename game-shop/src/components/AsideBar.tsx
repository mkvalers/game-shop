import { useNavigate } from "react-router-dom";
import useGenres from "../api-clients/hooks/useGenres";
import useGenreStore from "../store/genre-store";
import GenreList from "./GenreList";

const AsideBar = () => {
  const selectedGenreId = useGenreStore((s) => s.genreId);
  const setSelectedGenreId = useGenreStore((s) => s.setGenreId);
  const { data: genresData } = useGenres();
  const navigate = useNavigate();

  const handleSelectGenre = (genreId?: number) => {
    setSelectedGenreId(genreId);
    navigate("/");
  };

  return (
    <GenreList
      genres={genresData?.results ?? []}
      selectedGenreId={selectedGenreId}
      onSelectGenre={handleSelectGenre}
    />
  );
};

export default AsideBar;
