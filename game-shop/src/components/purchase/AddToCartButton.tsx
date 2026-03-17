import { Button, type ButtonProps } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";

interface Props extends ButtonProps {
  gameName?: string;
}

const AddToCartButton = ({ gameName, ...buttonProps }: Props) => {
  return (
    <Button
      colorPalette="blue"
      variant="outline"
      aria-label={gameName ? `Add ${gameName} to cart` : "Add game to cart"}
      {...buttonProps}
    >
      <FaCartPlus />
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
