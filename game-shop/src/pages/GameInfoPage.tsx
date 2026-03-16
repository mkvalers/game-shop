import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
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
    <Flex justify="center" align="center">
      <Box>
        <NavLink to="/">Back</NavLink>
        {game.background_image && (
          <Image
            src={game.background_image}
            alt={game.name}
            width="full"
            maxHeight="420px"
            objectFit="cover"
            rounded="md"
            mb={{ base: 3, md: 10 }}
          />
        )}
        <Heading
          mb={{ base: 4, md: 6 }}
          fontSize={{ base: "x-large", md: "5xl" }}
        >
          {game.name}
        </Heading>
        {game.released && <Text>Released: {game.released}</Text>}
        <Text>Rating: {game.rating}</Text>
        {game.metacritic && <Text>Metacritic: {game.metacritic}</Text>}
      </Box>
    </Flex>
  );
};

export default GameInfoPage;
