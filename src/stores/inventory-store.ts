import { create } from "zustand";
import { TInventoryItem, TInventoryStats } from "../types/inventory";
import { getInventory } from "../services/inventory-service";
import { calculateInventoryStats } from "../utils/inventory";

type InventoryStore = {
  count: number;
  inc: () => void;
  inventory: TInventoryItem[];
  inventoryStats: TInventoryStats;
  fetchInventory: () => Promise<void>;
};

const initialInventoryStats: TInventoryStats = {
  totalProducts: 0,
  totalStoreValue: 0,
  outOfStockProducts: 0,
  numOfCategories: 0,
};

export const useInventoryStore = create<InventoryStore>()((set) => ({
  count: 1,
  inventory: [],
  inventoryStats: initialInventoryStats,
  inc: () => set((state) => ({ count: state.count + 1 })),
  fetchInventory: async () => {
    const inventory = await getInventory();
    const inventoryStats = calculateInventoryStats(inventory);
    set({ inventory, inventoryStats });
  },
}));
