import { create } from "zustand";

interface GenreStore {
  genreId: number | undefined;
  setGenreId: (genreId: number | undefined) => void;
}

const useGenreStore = create<GenreStore>((set) => ({
  genreId: undefined,
  setGenreId: (genreId) =>
    set(() => ({
      genreId,
    })),
}));

export default useGenreStore;
