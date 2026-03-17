import { useRef } from "react";

const MIN_PRICE = 700;
const MAX_PRICE = 3000;
const PRICE_STEP = 50;

const getSeededWholeNumber = (seed: number) => {
  const random = Math.abs(Math.sin(seed) * 10000) % 1;
  const stepCount = (MAX_PRICE - MIN_PRICE) / PRICE_STEP;
  const priceStep = Math.floor(random * (stepCount + 1));

  return MIN_PRICE + priceStep * PRICE_STEP;
};

const useGamePrice = (gameId: number) => {
  const priceRef = useRef<number>(getSeededWholeNumber(gameId));

  return priceRef.current;
};

export default useGamePrice;
