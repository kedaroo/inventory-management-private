import { create } from "zustand";
import { TInventoryItem, TInventoryStats } from "../types/inventory";
import { getInventory } from "../services/inventory-service";
import { calculateInventoryStats } from "../utils/inventory";

type InventoryStore = {
  inventory: TInventoryItem[];
  inventoryStats: TInventoryStats;
  fetchInventory: () => Promise<void>;
  updateInventory: (newInventory: TInventoryItem[]) => void;
};

const initialInventoryStats: TInventoryStats = {
  totalProducts: 0,
  totalStoreValue: 0,
  outOfStockProducts: 0,
  numOfCategories: 0,
};

export const useInventoryStore = create<InventoryStore>()((set) => ({
  inventory: [],
  inventoryStats: initialInventoryStats,
  fetchInventory: async () => {
    const inventory = await getInventory();
    const inventoryStats = calculateInventoryStats(inventory);
    set({ inventory, inventoryStats });
  },
  updateInventory: (newInventory) => {
    const inventoryStats = calculateInventoryStats(newInventory);
    set({ inventory: newInventory, inventoryStats });
  },
}));
