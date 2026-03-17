import { Badge, HStack } from "@chakra-ui/react";
import PlatformIcons from "../../../components/PlatformIcons";
import type { ParentPlatformEntry } from "../../../api-clients/rawg-api-client";

interface Props {
  releaseDate?: string;
  genres: string[];
  parentPlatforms?: ParentPlatformEntry[];
}

const GameInfoMeta = ({ releaseDate, genres, parentPlatforms }: Props) => {
  return (
    <HStack wrap="wrap" flex="1" justify="space-between" gap={3}>
      <HStack gap={2}>
        {releaseDate && (
          <Badge
            colorPalette="orange"
            variant="subtle"
            px={3}
            py={1.5}
            borderRadius="full"
          >
            Released {releaseDate}
          </Badge>
        )}
        {genres.slice(0, 3).map((genre) => (
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
      <PlatformIcons platforms={parentPlatforms} />
    </HStack>
  );
};

export default GameInfoMeta;
