import { Box, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import type { Game } from "../../../api-clients/hooks/useGames";
import GameCardDetails from "./GameCardDetails";
import { useColorModeValue } from "../../../components/ui/color-mode";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const isLongTitle = game.name.length > 28;

  const surface = useColorModeValue("white", "gray.900");
  const softSurface = useColorModeValue("gray.100", "gray.800");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const headingColor = useColorModeValue("gray.900", "gray.100");

  const handleCardClick = () => {
    sessionStorage.setItem("gameGridScrollY", String(window.scrollY));
  };

  return (
    <Link
      to={`/game/${game.id}`}
      state={{ game }}
      onClick={handleCardClick}
      style={{ textDecoration: "none" }}
    >
      <Box
        borderWidth="1px"
        borderRadius="2xl"
        borderColor={borderColor}
        bg={surface}
        overflow="hidden"
        height="100%"
        display="flex"
        flexDirection="column"
        boxShadow="md"
        transition="transform 0.2s ease, box-shadow 0.2s ease"
        _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
      >
        <Box position="relative" overflow="hidden">
          {game.background_image ? (
            <Image
              src={game.background_image}
              alt={game.name}
              width="full"
              height={{ base: "120px", md: "220px" }}
              objectFit="cover"
            />
          ) : (
            <Box height={{ base: "120px", md: "220px" }} bg={softSurface} />
          )}
        </Box>

        <Box
          px={{ base: 3, md: 4 }}
          pt={{ base: 3, md: 4 }}
          minH={{ base: "56px", md: "72px" }}
          display="flex"
          alignItems="flex-start"
        >
          <Heading
            fontSize={{
              base: isLongTitle ? "sm" : "md",
              md: isLongTitle ? "xl" : "x-large",
            }}
            lineClamp={2}
            color={headingColor}
          >
            {game.name}
          </Heading>
        </Box>

        <Box
          px={{ base: 3, md: 4 }}
          pb={{ base: 3, md: 4 }}
          mt={{ base: 2, md: 3 }}
        >
          <GameCardDetails
            platforms={game.parent_platforms}
            metacritic={game.metacritic}
          />
        </Box>
      </Box>
    </Link>
  );
};

export default GameCard;
