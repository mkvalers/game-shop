import { Button } from "@chakra-ui/react";

const handleReturnToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const ReturnToTopButton = () => {
  return (
    <Button
      position="fixed"
      right={{ base: 4, md: 6 }}
      bottom={{ base: 5, md: 8 }}
      zIndex={20}
      colorScheme="teal"
      borderRadius="full"
      boxShadow="lg"
      outline="none"
      onClick={handleReturnToTop}
    >
      Top
    </Button>
  );
};

export default ReturnToTopButton;
