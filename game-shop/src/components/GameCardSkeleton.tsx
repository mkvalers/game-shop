import { Box, HStack, Skeleton, Stack } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Skeleton height={{ base: "120px", md: "220px" }} width="full" />

      <Box
        m={{ base: 2.5, md: 4 }}
        minH={{ base: "40px", md: "50px" }}
        display="flex"
        alignItems="flex-start"
      >
        <Stack width="full" gap={2}>
          <Skeleton height={{ base: "16px", md: "22px" }} width="88%" />
          <Skeleton height={{ base: "16px", md: "22px" }} width="58%" />
        </Stack>
      </Box>

      <Box m={{ base: 2.5, md: 4 }} mt={{ base: 0, md: 4 }}>
        <HStack justify="space-between">
          <Skeleton height="20px" width="70px" />
          <Skeleton height="20px" width="96px" />
        </HStack>
      </Box>
    </Box>
  );
};

export default GameCardSkeleton;
