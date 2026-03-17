import { useParams } from "react-router-dom";

const useGameInfoRouteId = () => {
  const { id } = useParams();
  const gameId = Number(id);
  const hasInvalidId = !id || Number.isNaN(gameId);

  return {
    gameId,
    hasInvalidId,
  };
};

export default useGameInfoRouteId;
