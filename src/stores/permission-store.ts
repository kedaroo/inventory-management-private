import { create } from "zustand";

type Role = "user" | "admin";

type PermissionStore = {
  role: Role;
  setRole: (role: Role) => void;
};

export const usePermissionStore = create<PermissionStore>()((set) => ({
  role: "admin",
  setRole: (role) => set({ role }),
}));
