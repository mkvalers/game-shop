import { Box, Flex, Grid, HStack } from "@chakra-ui/react";
import GameSearchBar from "./GameSearchBar";
import GameOrderSelect from "./GameOrderSelect";
import GenreFilterSelect from "../../genre-filter/components/GenreFilterSelect";
import type { GameOrderingOption, GameOrdering } from "../hooks/useGameOrdering";
import type { Genre } from "../../../api-clients/hooks/useGenres";

interface Props {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  ordering: GameOrdering;
  orderingOptions: GameOrderingOption[];
  onOrderChange: (value: GameOrdering) => void;
  genres: Genre[];
  isGenresLoading: boolean;
  selectedGenreId: number | undefined;
  onGenreSelect: (id: number | undefined) => void;
}

const GameGridControls = ({
  searchQuery,
  onSearchChange,
  ordering,
  orderingOptions,
  onOrderChange,
  genres,
  isGenresLoading,
  selectedGenreId,
  onGenreSelect,
}: Props) => (
  <Grid
    templateColumns={{ base: "1fr", sm: "1fr", lg: "1fr 260px" }}
    gap={4}
    mb={6}
    alignItems="end"
  >
    <Flex minW={0} gridColumn={{ base: "1fr", sm: "auto" }} flex={1}>
      <GameSearchBar value={searchQuery} onChange={onSearchChange} />
    </Flex>

    <HStack
      minW={0}
      gap={3}
      display={{ base: "flex", lg: "none" }}
      gridColumn="1 / -1"
      align="stretch"
    >
      <Box minW={0} flex={1}>
        <GenreFilterSelect
          genres={genres}
          isLoading={isGenresLoading}
          selectedGenreId={selectedGenreId}
          onSelectGenre={onGenreSelect}
          showLabel={false}
        />
      </Box>
      <Box minW={0} flex={1}>
        <GameOrderSelect value={ordering} options={orderingOptions} onChange={onOrderChange} />
      </Box>
    </HStack>

    <Box minW={0} display={{ base: "none", lg: "block" }}>
      <GameOrderSelect value={ordering} options={orderingOptions} onChange={onOrderChange} />
    </Box>
  </Grid>
);

export default GameGridControls;
