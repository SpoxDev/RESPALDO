// src/store/useUserStore.ts
import { create } from "zustand";

type Role = "admin" | "asistant" | null;

type User = {
  username: string;
  role: Role;
};

type UserState = {
  user: User;
  setUser: (user: User) => void;
  resetUser: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: {
    username: "",
    role: null,
  },
  setUser: (user) => set({ user }),
  resetUser: () => set({ user: { username: "", role: null } }),
}));
