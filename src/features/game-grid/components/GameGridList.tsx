import { SimpleGrid, Text } from "@chakra-ui/react";
import { type Game } from "../../../api-clients/hooks/useGames";
import GameCard from "./GameCard";
import GameInfoLoadingState from "./GameInfoLoadingState";
import CommonSpinner from "../../../components/CommonSpinner";

interface Props {
  games: Game[];
  isLoading: boolean;
  isError: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  debouncedSearchQuery: string;
  loadMoreRef: React.RefObject<HTMLDivElement | null>;
}

const GameGridList = ({
  games,
  isLoading,
  isError,
  isFetchingNextPage,
  hasNextPage,
  debouncedSearchQuery,
  loadMoreRef,
}: Props) => (
  <>
    {isError && <Text>Failed to load games.</Text>}

    <SimpleGrid columns={{ base: 2, md: 2, xl: 4 }} gap={6}>
      {(isLoading ? Array.from({ length: 12 }) : games).map((game, index) =>
        isLoading ? (
          <GameInfoLoadingState key={`game-skeleton-${index}`} />
        ) : (
          <GameCard key={(game as Game).id} game={game as Game} />
        ),
      )}
    </SimpleGrid>

    {!isLoading && !isError && games.length === 0 && (
      <Text mt={6}>No games match your search.</Text>
    )}

    <div ref={loadMoreRef} />

    {isFetchingNextPage && !debouncedSearchQuery && <CommonSpinner />}
    {!hasNextPage && games.length > 0 && <Text mt={4}>You reached the end.</Text>}
  </>
);

export default GameGridList;
