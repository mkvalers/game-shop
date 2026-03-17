import { Badge, Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import BackToGamesButton from "../features/game-info/components/BackToGamesButton";
import GameInfoHero from "../features/game-info/components/GameInfoHero";
import GameInfoMetaCard from "../features/game-info/components/GameInfoMetaCard";
import useGameInfo from "../features/game-info/api/useGameInfo";
import useGameInfoRouteId from "../features/game-info/hooks/useGameInfoRouteId";
import useScrollToTopOnMount from "../features/game-info/hooks/useScrollToTopOnMount";
import { useColorModeValue } from "../components/ui/color-mode";
import CommonSpinner from "../components/CommonSpinner";
import AddToCartButton from "../components/purchase/AddToCartButton";
import BuyButton from "../components/purchase/BuyButton";

const GameInfoPage = () => {
  const { gameId, hasInvalidId } = useGameInfoRouteId();
  const { data: game, isLoading, isError } = useGameInfo(gameId);
  useScrollToTopOnMount();

  const pageBg = useColorModeValue("gray.50", "gray.950");
  const surface = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const bodyText = useColorModeValue("gray.700", "gray.300");
  const subtleText = useColorModeValue("gray.500", "gray.400");

  if (hasInvalidId) {
    return <Text>Game info is unavailable.</Text>;
  }

  if (isLoading) {
    return (
      <>
        <Flex align="center" justify="center" minH="75vh">
          <CommonSpinner />
        </Flex>
      </>
    );
  }

  if (isError || !game) {
    return <Text>Game info is unavailable.</Text>;
  }

  return (
    <Box bg={pageBg} borderRadius="2xl" p={{ base: 3, md: 5 }}>
      <BackToGamesButton />

      <Stack gap={{ base: 5, lg: 7 }} pb={10} maxW="6xl" mx="auto">
        <Stack gap={{ base: 5, lg: 6 }}>
          <GameInfoHero name={game.name} image={game.image} />

          <Stack gap={5}>
            <Stack
              direction={{ base: "column", lg: "row" }}
              gap={3}
              justify="space-between"
              align={{ base: "stretch", lg: "center" }}
            >
              <HStack gap={3} wrap="wrap" flex="1">
                {game.releaseDate && (
                  <Badge
                    colorPalette="orange"
                    variant="subtle"
                    px={3}
                    py={1.5}
                    borderRadius="full"
                  >
                    Released {game.releaseDate}
                  </Badge>
                )}
                {game.genre.slice(0, 3).map((genre) => (
                  <Badge
                    key={genre}
                    colorPalette="blue"
                    variant="subtle"
                    px={3}
                    py={1.5}
                    borderRadius="full"
                  >
                    {genre}
                  </Badge>
                ))}
              </HStack>

              <HStack
                gap={3}
                wrap="nowrap"
                width={{ base: "full", lg: "auto" }}
              >
                <BuyButton
                  gameName={game.name}
                  size="md"
                  flex={{ base: 1, lg: "unset" }}
                />
                <AddToCartButton
                  gameName={game.name}
                  size="md"
                  flex={{ base: 1, lg: "unset" }}
                />
              </HStack>
            </Stack>

            <Box
              p={{ base: 5, md: 6 }}
              borderRadius="2xl"
              bg={surface}
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="xl"
            >
              <Text
                mb={3}
                textTransform="uppercase"
                letterSpacing="0.16em"
                fontSize="xs"
                color={subtleText}
              >
                About
              </Text>
              <Box
                color={bodyText}
                lineHeight="tall"
                dangerouslySetInnerHTML={{ __html: game.about }}
              />
            </Box>

            <GameInfoMetaCard
              label="Developers"
              value={
                game.developer.length > 0
                  ? game.developer.join(", ")
                  : "Unknown developer"
              }
              accentColor="orange.400"
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default GameInfoPage;
