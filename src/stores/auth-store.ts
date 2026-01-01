import { boolean } from "zod";
import type { User } from "./auth-types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  signIn: (token: string, user: User) => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      user: null,
      signIn: (token, user) => {
        set({
          isAuthenticated: true,
          token: token,
          user: user,
        });
      },
      signOut: () => {
        set({
          isAuthenticated: false,
          token: null,
          user: null,
        });
      },
    }),
    {
      name: "auth-storage", // unique name for localStorage key
      storage: createJSONStorage(() => localStorage), // default is localStorage
    }
  )
);
