import { Badge, Stack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import PlatformIcons from "../../../components/PlatformIcons";
import type { ParentPlatformEntry } from "../../../api-clients/rawg-api-client";

interface Props {
  platforms?: ParentPlatformEntry[];
  metacritic?: number;
}

const GameCardDetails = ({ platforms, metacritic }: Props) => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align={{ base: "flex-start", md: "center" }}
      gap={2}
    >
      <PlatformIcons platforms={platforms} />
      {metacritic && (
        <Badge
          colorPalette="green"
          variant="subtle"
          borderRadius="md"
          px={1.5}
          py={1}
        >
          <FaStar style={{ display: "inline", marginRight: "2px" }} />
          {metacritic}
        </Badge>
      )}
    </Stack>
  );
};

export default GameCardDetails;
