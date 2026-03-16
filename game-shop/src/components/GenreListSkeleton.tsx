import { Box, HStack, Skeleton, VStack } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Box mr={3}>
      <Skeleton height="30px" width="120px" mb={4} />

      <VStack align="stretch" gap={2}>
        <Skeleton height="40px" borderRadius="md" />

        {Array.from({ length: 18 }).map((_, index) => (
          <HStack key={`genre-skeleton-${index}`} gap={2} py={0.5} px={3}>
            <Skeleton boxSize="40px" borderRadius="md" flexShrink={0} />
            <Skeleton height="18px" width="65%" />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default GenreListSkeleton;
