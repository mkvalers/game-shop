import { Button } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const handleReturnToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const ReturnToTopButton = () => {
  return (
    <Button
      position="fixed"
      right={{ base: 4, md: 10 }}
      bottom={{ base: 5, md: 7 }}
      zIndex={20}
      boxSize="40px"
      colorScheme="teal"
      borderRadius="full"
      boxShadow="lg"
      outline="none"
      onClick={handleReturnToTop}
    >
      <FaArrowUp />
    </Button>
  );
};

export default ReturnToTopButton;
