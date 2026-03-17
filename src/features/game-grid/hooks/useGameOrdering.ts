import { useState } from "react";

export type GameOrdering =
  | ""
  | "-added"
  | "name"
  | "-released"
  | "-metacritic"
  | "-rating";

export interface GameOrderingOption {
  label: string;
  value: GameOrdering;
}

export const gameOrderingOptions: GameOrderingOption[] = [
  { label: "Relevance", value: "" },
  { label: "Date added", value: "-added" },
  { label: "Name", value: "name" },
  { label: "Release date", value: "-released" },
  { label: "Popularity", value: "-metacritic" },
  { label: "Average rating", value: "-rating" },
];

const useGameOrdering = () => {
  const [ordering, setOrdering] = useState<GameOrdering>("");

  return {
    ordering,
    setOrdering,
  };
};

export default useGameOrdering;
