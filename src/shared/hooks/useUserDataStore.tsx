import { create } from "zustand";

import { ADDRESSES } from "@/common/constants";

interface UserDataStoreState {
  token: string;
  userId: string;
  type: "employer" | "employee" | null;
  address: (typeof ADDRESSES)[number] | null;
  isLoggedIn: boolean;

  resetAll: () => void;

  setToken: (text: string) => void;
  setUserId: (text: string) => void;
  setType: (text: "employer" | "employee" | null) => void;
  setAddress: (text: (typeof ADDRESSES)[number] | null) => void;
  setLoggedIn: (value: boolean) => void;
}

const useUserDataStore = create<UserDataStoreState>((set) => ({
  token: "",
  userId: "",
  type: null,
  address: null,
  isLoggedIn: false,

  resetAll: () => set({ token: "", userId: "", type: null, address: null, isLoggedIn: false }),

  setToken: (value) => set({ token: value }),
  setUserId: (value) => set({ userId: value }),
  setType: (value) => set({ type: value }),
  setAddress: (value) => set({ address: value }),
  setLoggedIn: (value) => set({ isLoggedIn: value }),
}));

export default useUserDataStore;
