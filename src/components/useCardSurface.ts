import { useColorModeValue } from "./ui/color-mode";

const useCardSurface = () => ({
  surface: useColorModeValue("white", "gray.900"),
  softSurface: useColorModeValue("gray.100", "gray.800"),
  borderColor: useColorModeValue("gray.200", "whiteAlpha.200"),
});

export default useCardSurface;
