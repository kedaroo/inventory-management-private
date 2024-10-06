import { create } from "zustand";
import { TInventoryItem } from "../types/inventory";
import { getInventory } from "../services/inventory-service";

type InventoryStore = {
  count: number;
  inc: () => void;
  inventory: TInventoryItem[];
  fetchInventory: () => Promise<void>;
};

export const useInventoryStore = create<InventoryStore>()((set) => ({
  count: 1,
  inventory: [],
  inc: () => set((state) => ({ count: state.count + 1 })),
  fetchInventory: async () => {
    const inventory = await getInventory();
    set({ inventory });
  },
}));
