import { HStack, Text } from "@chakra-ui/react";

interface Props {
  metacritic?: number;
}

const GameDetails = ({ metacritic }: Props) => {
  return (
    <HStack justify={"space-between"}>
      <Text>Price: $0.00</Text>
      {metacritic && <Text>Metacritic: {metacritic}</Text>}
    </HStack>
  );
};

export default GameDetails;
