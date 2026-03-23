import { create } from "zustand";
import type { GameOrdering } from "../../../api-clients/types";

export type { GameOrdering };

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

interface GameGridStore {
  ordering: GameOrdering;
  setOrdering: (ordering: GameOrdering) => void;
  searchQuery: string;
  debouncedSearchQuery: string;
  setSearchQuery: (query: string) => void;
}

let debounceTimer: ReturnType<typeof setTimeout> | undefined;

const useGameGridStore = create<GameGridStore>((set) => ({
  ordering: "",
  setOrdering: (ordering) => set({ ordering }),
  searchQuery: "",
  debouncedSearchQuery: "",
  setSearchQuery: (query) => {
    set({ searchQuery: query });
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      set({ debouncedSearchQuery: query.trim() });
    }, 300);
  },
}));

export default useGameGridStore;
