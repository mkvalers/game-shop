import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import { AxiosError } from "axios";
import rawgApiClient from "../rawg-api-client";

export interface Game {
  id: number;
  slug: string;
  name: string;
  released?: string;
  background_image?: string;
  rating: number;
  metacritic?: number;
}

export interface FetchGamesResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Game[];
}

const useGames = (genreId?: number) => {
  return useInfiniteQuery<
    FetchGamesResponse,
    AxiosError,
    InfiniteData<FetchGamesResponse>,
    [string, number | undefined],
    string | undefined
  >({
    queryKey: ["games", genreId],
    initialPageParam: undefined as string | undefined,
    queryFn: async ({ pageParam }): Promise<FetchGamesResponse> => {
      if (!pageParam) {
        return await rawgApiClient.getGames(genreId);
      }

      const response = await rawgApiClient.apiClient.get<FetchGamesResponse>(pageParam);
      return response.data;
    },
    getNextPageParam: (lastPage) => lastPage.next ?? undefined,
    staleTime: 1000 * 60 * 5,
  });
};

export default useGames;
