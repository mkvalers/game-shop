import { Box, Skeleton, SimpleGrid, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "../../../components/ui/color-mode";

const GameInfoSkeleton = () => {
  const pageBg = useColorModeValue("gray.50", "gray.950");

  return (
    <Box bg={pageBg} borderRadius="2xl" p={{ base: 3, md: 5 }}>
      <Skeleton height="40px" width="158px" borderRadius="full" />
      <Stack gap={6} maxW="6xl" mx="auto" pb={10}>
        <Skeleton
          height={{ base: "280px", md: "400px", xl: "540px" }}
          borderRadius="3xl"
        />
        <Stack gap={4}>
          <Skeleton height="24px" width="120px" />
          <Skeleton height="56px" width="75%" />
          <Skeleton height="180px" borderRadius="2xl" />
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
            <Skeleton height="124px" borderRadius="xl" />
            <Skeleton height="124px" borderRadius="xl" />
            <Skeleton height="124px" borderRadius="xl" />
          </SimpleGrid>
        </Stack>
      </Stack>
    </Box>
  );
};

export default GameInfoSkeleton;
