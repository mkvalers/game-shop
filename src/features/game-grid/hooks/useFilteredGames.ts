import { useDeferredValue } from "react";
import type { Game } from "../../../api-clients/hooks/useGames";

const useFilteredGames = (games: Game[], searchQuery: string) => {
  const deferredQuery = useDeferredValue(searchQuery.trim().toLowerCase());

  if (!deferredQuery) {
    return games;
  }

  return games.filter((game) =>
    game.name.toLowerCase().includes(deferredQuery),
  );
};

export default useFilteredGames;
