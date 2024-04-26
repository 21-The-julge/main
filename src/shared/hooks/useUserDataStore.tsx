import { create } from "zustand";

interface UserDataStoreState {
  token: string;
  userId: string;
  type: "employer" | "employee" | null;
  isLoggedIn: boolean;

  resetAll: () => void;

  setToken: (text: string) => void;
  setUserId: (text: string) => void;
  setType: (text: "employer" | "employee" | null) => void;
  setLoggedIn: (value: boolean) => void;
}

const useUserDataStore = create<UserDataStoreState>((set) => ({
  token: "",
  userId: "",
  type: null,
  isLoggedIn: false,

  resetAll: () => set({ token: "", userId: "", type: null, isLoggedIn: false }),

  setToken: (value) => set({ token: value }),
  setUserId: (value) => set({ userId: value }),
  setType: (value) => set({ type: value }),
  setLoggedIn: (value) => set({ isLoggedIn: value }),
}));

export default useUserDataStore;
