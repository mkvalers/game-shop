import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import type { Game } from "../api-clients/hooks/useGames";

interface GameInfoLocationState {
  game?: Game;
}

const GameInfoPage = () => {
  const location = useLocation();
  const state = location.state as GameInfoLocationState | null;
  const game = state?.game;

  if (!game) {
    return <Text>Game info is unavailable.</Text>;
  }

  return (
    <Box>
      {game.background_image && (
        <Image
          src={game.background_image}
          alt={game.name}
          width="full"
          maxHeight="420px"
          objectFit="cover"
          mb={6}
        />
      )}

      <Heading mb={3}>{game.name}</Heading>

      {game.released && <Text>Released: {game.released}</Text>}
      <Text>Rating: {game.rating}</Text>
      {game.metacritic && <Text>Metacritic: {game.metacritic}</Text>}
    </Box>
  );
};

export default GameInfoPage;
