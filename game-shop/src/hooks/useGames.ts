import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import { AxiosError } from "axios";
import rawgApiClient from "../api-clients/rawg-api-client";

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

const useGames = () => {
  return useInfiniteQuery<
    FetchGamesResponse,
    AxiosError,
    InfiniteData<FetchGamesResponse>,
    string[],
    string | undefined
  >({
    queryKey: ["games"],
    initialPageParam: undefined as string | undefined,
    queryFn: async ({ pageParam }): Promise<FetchGamesResponse> => {
      if (!pageParam) {
        return rawgApiClient.getGames() as Promise<FetchGamesResponse>;
      }

      const response = await rawgApiClient.apiClient.get<FetchGamesResponse>(pageParam);
      return response.data;
    },
    getNextPageParam: (lastPage) => lastPage.next ?? undefined,
    staleTime: 1000 * 60 * 5,
  });
};

export default useGames;
