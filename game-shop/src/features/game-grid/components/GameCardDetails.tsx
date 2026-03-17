import { Badge, HStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import PlatformIcons from "../../../components/PlatformIcons";
import type { ParentPlatformEntry } from "../../../api-clients/rawg-api-client";

interface Props {
  platforms?: ParentPlatformEntry[];
  metacritic?: number;
}

const GameCardDetails = ({ platforms, metacritic }: Props) => {
  return (
    <HStack justify="space-between" align="center">
      <PlatformIcons platforms={platforms} />
      {metacritic && (
        <Badge
          colorPalette="green"
          variant="subtle"
          borderRadius="md"
          px={1.5}
          py={1}
        >
          <FaPlus style={{ display: "inline", marginRight: "2px" }} />
          {metacritic}
        </Badge>
      )}
    </HStack>
  );
};

export default GameCardDetails;
