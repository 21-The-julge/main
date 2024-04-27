import { create } from "zustand";

interface UserDataStoreState {
  token: string | null;
  userId: string | null;
  type: "employer" | "employee" | null;
  isLoggedIn: boolean;
  shopId: string | null;
  noticeId: string | null;
  applicationId: string | null;

  resetAll: () => void;

  setToken: (text: string) => void;
  setUserId: (text: string) => void;
  setType: (text: "employer" | "employee" | null) => void;
  setLoggedIn: (value: boolean) => void;
  setShopId: (value: string) => void;
  setNoticeId: (value: string) => void;
  setApplicationId: (value: string) => void;
}

const useUserDataStore = create<UserDataStoreState>((set) => ({
  token: null,
  userId: null,
  type: null,
  isLoggedIn: false,
  shopId: null,
  noticeId: null,
  applicationId: null,

  resetAll: () =>
    set({
      token: null,
      userId: null,
      type: null,
      isLoggedIn: false,
      shopId: null,
      noticeId: null,
      applicationId: null,
    }),

  setToken: (value) => set({ token: value }),
  setUserId: (value) => set({ userId: value }),
  setType: (value) => set({ type: value }),
  setLoggedIn: (value) => set({ isLoggedIn: value }),
  setShopId: (value) => set({ shopId: value }),
  setNoticeId: (value) => set({ noticeId: value }),
  setApplicationId: (value) => set({ applicationId: value }),
}));

export default useUserDataStore;
