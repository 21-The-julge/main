import ApplicationDetail from "@/page-layout/MyProfileLayout/ApplicationDetail/ApplicationDetail";
import MyProfile from "@/page-layout/MyProfileLayout/MyProfile/MyProfile";
import { axiosInstance, axiosInstanceToken } from "@/shared/apis/axiosInstance";
import addComma from "@/shared/components/Post/utils/addComma";
import RootLayout from "@/shared/components/RootLayout/RootLayout";
import GetUserData from "@/shared/hooks/getUserData";
import getBadge from "@/shared/utils/getBadge";
import formatDateTimeRange from "@/shared/utils/getFormatDateTimeRange";

import { useEffect, useState } from "react";

interface Shop {
  name: string;
}

interface Notice {
  status: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
}

interface Item {
  item: {
    shop: {
      item: Shop;
    };
    notice: {
      item: Notice;
    };
  };
}

interface ApiData {
  myProfile: {
    id: string;
    email: string;
    type: string;
    name: string;
    phone: string;
    address: string;
    bio: string;
  };
}

export default function MyShop() {
  const { token, userId } = GetUserData();

  const [registeredMyPofile, setRegisteredMyProfile] = useState<ApiData["myProfile"]>();
  const [registeredNotice, setRegisteredNotice] = useState<Item[]>([]);

  const fetchMyProfile = async () => {
    const res = await axiosInstance.get(`users/${userId}`);
    const result = await res.data.item;
    if (result.name) {
      setRegisteredMyProfile(result);
    }
  };

  const fetchNotices = async () => {
    const res = await axiosInstanceToken(token).get(`users/${userId}/applications?limit=100`);
    const result = await res.data.items;
    setRegisteredNotice(result);
  };

  const registerNoticeData = registeredNotice.map((item) => {
    return {
      name: item.item.shop.item.name,
      hourlyPay: `${addComma(item.item.notice.item.hourlyPay)}원`,
      startsAt: formatDateTimeRange(item.item.notice.item.startsAt, item.item.notice.item.workhour),
      status: getBadge(item.item.notice.item.status),
    };
  });

  useEffect(() => {
    if (userId && registeredMyPofile) {
      fetchNotices();
    } else if (userId) {
      fetchMyProfile();
    }
  }, [userId]);

  return (
    <RootLayout>
      <MyProfile myProfile={registeredMyPofile} />
      {registeredMyPofile ? <ApplicationDetail registerNoticeData={registerNoticeData} /> : null}
    </RootLayout>
  );
}
