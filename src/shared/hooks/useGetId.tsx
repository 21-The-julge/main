import { useEffect } from "react";
import { useGetUserData } from "../apis/api-hooks/useUsers";
import { useGetShopNoticesData } from "../apis/api-hooks/useNotices";
import useUserDataStore from "./useUserDataStore";

export default function useGetId() {
  const { userId, shopId, noticeId, applicationId, resetAll, setIsLoggedIn, setShopId, setNoticeId, setApplicationId } =
    useUserDataStore();
  const { data: userData, error: userDataError, isLoading: userDataIsLodaing } = useGetUserData();
  const { data: shopData, error: shopDataError, isLoading: shopDataIslodaing } = useGetShopNoticesData({ shopId });

  const setShopIdFromData = () => {
    if (userData && userData.item.shop) {
      setShopId(userData?.item?.shop?.item?.id);
    }
  };

  const setNoticeIdFromData = () => {
    if (shopData) {
      setNoticeId(shopData?.items[0]?.item?.id);
    }
  };

  useEffect(() => {
    if (userData) {
      setShopIdFromData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  useEffect(() => {
    if (shopData) {
      setNoticeIdFromData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shopData]);

  return {
    userId,
    shopId,
    noticeId,
    applicationId,

    setIsLoggedIn,
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
