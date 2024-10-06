import { create } from "zustand";

type InventoryStore = {
  count: number;
  inc: () => void;
};

export const useInventoryStore = create<InventoryStore>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
