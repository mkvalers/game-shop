import { useQuery } from "@tanstack/react-query";
import rawgApiClient from "../rawg-api-client";

interface RawgNamedItem {
    name: string;
}

export interface RawgGameDetailsResponse {
    id: number;
    name: string;
    description: string;
    background_image?: string;
    released?: string;
    genres?: RawgNamedItem[];
    developers?: RawgNamedItem[];
}

export interface GameDetails {
    id: number;
    name: string,
    image?: string;
    about: string;
    genre: string[];
    releaseDate?: string;
    developer: string[];
}

const useGameInfo = (id: number) => {
  return useQuery<GameDetails>({
    queryKey: ["game", id],
    queryFn: () => rawgApiClient.getGameInfo(id),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGameInfo;
