import { HStack, Text } from "@chakra-ui/react";

interface Props {
  metacritic?: number;
}

const GameCardDetails = ({ metacritic }: Props) => {
  return (
    <HStack justify={"space-between"}>
      <Text textStyle="lg" fontWeight="medium" letterSpacing="tight">
        Php. 0.00
      </Text>
      {metacritic && <Text>Metacritic: {metacritic}</Text>}
    </HStack>
  );
};

export default GameCardDetails;
