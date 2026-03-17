import { Box, Flex, Text } from "@chakra-ui/react";
import GameInfoContent from "../features/game-info/components/GameInfoContent";
import useGameInfo from "../api-clients/hooks/useGameInfo";
import useGameInfoRouteId from "../features/game-info/hooks/useGameInfoRouteId";
import useScrollToTopOnMount from "../features/game-info/hooks/useScrollToTopOnMount";
import { useColorModeValue } from "../components/ui/color-mode";
import CommonSpinner from "../components/CommonSpinner";

const GameInfoPage = () => {
  const { gameId, hasInvalidId } = useGameInfoRouteId();
  const { data: game, isLoading, isError } = useGameInfo(gameId);
  useScrollToTopOnMount();

  const pageBg = useColorModeValue("gray.50", "gray.950");

  if (hasInvalidId) {
    return <Text>Game info is unavailable.</Text>;
  }

  if (isLoading) {
    return (
      <Flex align="center" justify="center" minH="75vh">
        <CommonSpinner />
      </Flex>
    );
  }

  if (isError || !game) {
    return <Text>Game info is unavailable.</Text>;
  }

  return (
    <Box bg={pageBg} borderRadius="2xl" p={{ base: 3, md: 5 }}>
      <GameInfoContent game={game} />
    </Box>
  );
};

export default GameInfoPage;
