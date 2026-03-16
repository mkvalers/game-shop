import { Box, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import type { Game } from "../api-clients/hooks/useGames";
import GameCardDetails from "./GameCardDetails";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const isLongTitle = game.name.length > 28;

  return (
    <Link to={`/game/${game.id}`} state={{ game }}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        {game.background_image ? (
          <Image
            src={game.background_image}
            alt={game.name}
            width="full"
            height={{ base: "120px", md: "220px" }}
            objectFit="cover"
          />
        ) : (
          <Box height={{ base: "120px", md: "220px" }} bg="bg.muted" />
        )}

        <Box
          m={{ base: 2.5, md: 4 }}
          minH={{ base: "40px", md: "50px" }}
          display="flex"
          alignItems="flex-start"
        >
          <Heading
            fontSize={{
              base: isLongTitle ? "sm" : "md",
              md: isLongTitle ? "lg" : "xl",
            }}
            lineClamp={2}
          >
            {game.name}
          </Heading>
        </Box>

        <Box m={{ base: 2.5, md: 4 }} mt={{ base: 0, md: 4 }}>
          <GameCardDetails metacritic={game.metacritic} />
        </Box>
      </Box>
    </Link>
  );
};

export default GameCard;
