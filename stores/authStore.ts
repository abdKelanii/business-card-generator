import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { cookieStorage } from "./cookieStorage";

interface AuthStoreType {
  token: string;
  isAuthenticated: boolean;
  signIn: (token: string) => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      token: "",
      isAuthenticated: false,
      signIn: (token: string | undefined) => {
        if (token) {
          set(() => ({
            token: token,
            isAuthenticated: true,
          }));
        }
      },
      signOut: () => {
        set(() => ({
          token: "",
          isAuthenticated: false,
        }));
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => cookieStorage),
      partialize: (state) => ({
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
