import { Stack } from "@chakra-ui/react";
import type { GameInfo } from "../../../api-clients/rawg-api-client";
import BackToGamesButton from "./BackToGamesButton";
import GameInfoHero from "./GameInfoHero";
import GameInfoMeta from "./GameInfoMeta";
import GameInfoAbout from "./GameInfoAbout";
import GameInfoMetaCard from "./GameInfoMetaCard";

interface Props {
  game: GameInfo;
}

const GameInfoContent = ({ game }: Props) => {
  return (
    <>
      <BackToGamesButton />

      <Stack gap={{ base: 5, lg: 7 }} pb={10} maxW="6xl" mx="auto">
        <Stack gap={{ base: 5, lg: 6 }}>
          <GameInfoHero name={game.name} image={game.image} />

          <Stack gap={5}>
            <GameInfoMeta
              releaseDate={game.releaseDate}
              genres={game.genre}
              parentPlatforms={game.parent_platforms}
            />

            <GameInfoAbout content={game.about} />

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
    </>
  );
};

export default GameInfoContent;
