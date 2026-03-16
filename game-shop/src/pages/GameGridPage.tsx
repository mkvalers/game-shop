import { SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useRef } from "react";
import useGames, { type Game } from "../api-clients/hooks/useGames";
import GameCard from "../components/GameCard";
import useGenreStore from "../store/genre-store";
import GameCardSkeleton from "../components/GameCardSkeleton";
import ReturnToTopButton from "../components/ReturnToTopButton";

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
  const hasRestoredScrollRef = useRef(false);

  useLayoutEffect(() => {
    if (hasRestoredScrollRef.current) return;
    const storedScrollY = sessionStorage.getItem("gameGridScrollY");
    if (!storedScrollY) return;

    const targetScrollY = Number(storedScrollY);
    window.scrollTo({
      top: targetScrollY,
      left: 0,
      behavior: "auto",
    });

    const reachedTarget = Math.abs(window.scrollY - targetScrollY) <= 2;
    if (!reachedTarget && isLoading) return;

    hasRestoredScrollRef.current = true;
    sessionStorage.removeItem("gameGridScrollY");
  }, [isLoading, games.length]);

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
      {isError && <Text>Failed to load games.</Text>}

      <SimpleGrid columns={{ base: 2, md: 2, xl: 4 }} gap={6}>
        {(isLoading ? Array.from({ length: 8 }) : games).map((game, index) =>
          isLoading ? (
            <GameCardSkeleton key={`game-skeleton-${index}`} />
          ) : (
            <GameCard key={(game as Game).id} game={game as Game} />
          ),
        )}
      </SimpleGrid>

      <div ref={loadMoreRef} />

      {isFetchingNextPage && <Text mt={4}>Loading next page...</Text>}
      {!hasNextPage && games.length > 0 && (
        <Text mt={4}>You reached the end.</Text>
      )}

      <ReturnToTopButton />
    </>
  );
};

export default GameGridPage;
