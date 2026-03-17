import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import rawgApiClient, {
  type FetchGenresResponse,
} from "../rawg-api-client";

export type Genre = FetchGenresResponse["results"][number];

const useGenres = () => {
  return useQuery<FetchGenresResponse, AxiosError>({
    queryKey: ["genres"],
    queryFn: async () => await rawgApiClient.genGenres(),
    staleTime: 1000 * 60 * 10,
  });
};

export default useGenres;
