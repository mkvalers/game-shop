import { useQuery } from "@tanstack/react-query";
import rawgApiClient from "../rawg-api-client";

export type GameInfo = Awaited<ReturnType<typeof rawgApiClient.getGameInfo>>;

const useGameInfo = (id: number) => {
  return useQuery<GameInfo>({
    queryKey: ["game", id],
    queryFn: () => rawgApiClient.getGameInfo(id),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGameInfo;
