import { useGetUserData } from "../apis/api-hooks/useUsers";
import { useGetShopNoticesData } from "../apis/api-hooks/useNotices";
import useUserDataStore from "./useUserDataStore";

export default function GetUserData() {
  const {
    isLoggedIn,
    token,
    type,
    userId,
    shopId,
    noticeId,
    applicationId,
    resetAll,
    setLoggedIn,
    setShopId,
    setNoticeId,
    setApplicationId,
  } = useUserDataStore();
  const { data: userData, error: userDataError, isLoading: userDataIsLodaing } = useGetUserData();
  const { data: shopData, error: shopDataError, isLoading: shopDataIslodaing } = useGetShopNoticesData({ shopId });

  const setShopIdFromData = () => {
    if (userData && userData.item.shop) {
      setShopId(userData.item.shop.item.id);
    }
  };

  const setNoticeIdFromData = () => {
    if (shopData) {
      setNoticeId(shopData.items.item.id);
    }
  };

  return {
    isLoggedIn,
    token,
    type,
    userId,
    shopId,
    noticeId,
    applicationId,

    setLoggedIn,
    setShopIdFromData,
    setNoticeIdFromData,
    setApplicationId,
    resetAll,

    userDataError,
    userDataIsLodaing,
    shopDataError,
    shopDataIslodaing,
  };
}
