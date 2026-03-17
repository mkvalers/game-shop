import { Button, type ButtonProps } from "@chakra-ui/react";
import { FaShoppingBag } from "react-icons/fa";

interface Props extends ButtonProps {
  gameName?: string;
}

const BuyButton = ({ gameName, ...buttonProps }: Props) => {
  return (
    <Button
      colorPalette="green"
      variant="solid"
      aria-label={gameName ? `Buy ${gameName}` : "Buy game"}
      {...buttonProps}
    >
      <FaShoppingBag />
      Buy
    </Button>
  );
};

export default BuyButton;
