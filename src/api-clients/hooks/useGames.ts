import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import { AxiosError } from "axios";
import rawgApiClient, {
  type FetchGamesResponse,
  type Game,
} from "../rawg-api-client";
import type { GameOrdering } from "../../features/game-grid/hooks/useGameOrdering";

export type { Game, FetchGamesResponse };

const useGames = (
  genreId?: number,
  searchQuery?: string,
  ordering?: GameOrdering,
) => {
  return useInfiniteQuery<
    FetchGamesResponse,
    AxiosError,
    InfiniteData<FetchGamesResponse>,
    [string, number | undefined, string, GameOrdering],
    string | undefined
  >({
    queryKey: ["games", genreId, searchQuery ?? "", ordering ?? ""],
    initialPageParam: undefined as string | undefined,
    queryFn: async ({ pageParam }): Promise<FetchGamesResponse> => {
      if (!pageParam) {
        return await rawgApiClient.getGames(genreId, searchQuery, ordering);
      }

      const response =
        await rawgApiClient.apiClient.get<FetchGamesResponse>(pageParam);
      return response.data;
    },
    getNextPageParam: (lastPage) => lastPage.next ?? undefined,
    staleTime: 1000 * 60 * 5,
  });
};

export default useGames;
