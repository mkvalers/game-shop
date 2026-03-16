import { SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import useGames, { type Game } from "../api-clients/hooks/useGames";
import GameCard from "../components/GameCard";
import useGenreStore from "../store/genre-store";

const GameGridPage = () => {
  const selectedGenreId = useGenreStore((s) => s.genreId);

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames(selectedGenreId);

  const games = data?.pages.flatMap((page) => page.results) ?? [];
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sentinel = loadMoreRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        if (!hasNextPage || isFetchingNextPage) return;

        fetchNextPage();
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <>
      {isLoading && <Text>Loading games...</Text>}
      {isError && <Text>Failed to load games.</Text>}

      <SimpleGrid columns={{ base: 2, md: 2, xl: 4 }} gap={6}>
        {games.map((game: Game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>

      <div ref={loadMoreRef} />

      {isFetchingNextPage && <Text mt={4}>Loading next page...</Text>}
      {!hasNextPage && games.length > 0 && (
        <Text mt={4}>You reached the end.</Text>
      )}
    </>
  );
};

export default GameGridPage;
