import { Box, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import type { Game } from "../api-clients/hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/game/${game.id}`} state={{ game }}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        {game.background_image && (
          <Image
            src={game.background_image}
            alt={game.name}
            width="full"
            height="220px"
            objectFit="cover"
          />
        )}

        <Box p={4}>
          <Heading fontSize="xl">{game.name}</Heading>
        </Box>
      </Box>
    </Link>
  );
};

export default GameCard;
