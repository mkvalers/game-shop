import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import useGames, { type Game } from "../hooks/useGames";

const Home = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames();

  const games = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
      templateRows={{
        base: "auto 1fr",
        lg: "auto 1fr",
      }}
    >
      <GridItem area="aside" hideBelow="lg" bg={"green"}>
        Aside
      </GridItem>
      <GridItem area="main" bg={"blue"}>
        {isLoading && <Text>Loading games...</Text>}
        {isError && <Text>Failed to load games.</Text>}

        {games.map((game: Game) => (
          <p key={game.id}>{game.name}</p>
        ))}

        <Button
          mt={4}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading next page..." : "Load more games"}
        </Button>
      </GridItem>
    </Grid>
  );
};

export default Home;
