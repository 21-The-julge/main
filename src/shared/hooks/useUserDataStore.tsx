import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ADDRESSES } from "@/common/constants";

interface UserDataStoreState {
  token: string | null;
  userId: string | null;
  type: "employer" | "employee" | null;
  address: (typeof ADDRESSES)[number] | null;
  isLoggedIn: boolean;
  shopId: string;
  noticeId: string | null;
  applicationId: string | null;

  resetAll: () => void;

  setToken: (text: string) => void;
  setUserId: (text: string) => void;
  setType: (text: "employer" | "employee" | null) => void;
  setAddress: (text: (typeof ADDRESSES)[number] | null) => void;
  setIsLoggedIn: (value: boolean) => void;
  setShopId: (value: string) => void;
  setNoticeId: (value: string) => void;
  setApplicationId: (value: string) => void;
}

const useUserDataStore = create(
  persist<UserDataStoreState>(
    (set) => ({
      token: null,
      userId: null,
      type: null,
      address: null,
      isLoggedIn: false,
      shopId: "",
      noticeId: null,
      applicationId: null,

      resetAll: () =>
        set({
          token: null,
          userId: null,
          type: null,
          isLoggedIn: false,
          shopId: "",
          noticeId: null,
          applicationId: null,
        }),

      setToken: (value) => set({ token: value }),
      setUserId: (value) => set({ userId: value }),
      setType: (value) => set({ type: value }),
      setAddress: (value) => set({ address: value }),
      setIsLoggedIn: (value) => set({ isLoggedIn: value }),
      setShopId: (value) => set({ shopId: value }),
      setNoticeId: (value) => set({ noticeId: value }),
      setApplicationId: (value) => set({ applicationId: value }),
    }),
    {
      name: "userDataStore", // unique name
    },
  ),
);

export default useUserDataStore;
