import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import rawgApiClient from "../rawg-api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count?: number;
  image_background?: string;
}

export interface FetchGenresResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Genre[];
}

const useGenres = () => {
  return useQuery<FetchGenresResponse, AxiosError>({
    queryKey: ["genres"],
    queryFn: async () => await rawgApiClient.genGenres(),
    staleTime: 1000 * 60 * 10,
    placeholderData: keepPreviousData
  });
};

export default useGenres;
