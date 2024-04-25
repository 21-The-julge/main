import RegisterNotice from "@/page-layout/MyProfileLayout/ApplicationDetail/RegisterNotice/RegisterNotice";
import ViewNotice from "@/page-layout/MyProfileLayout/ApplicationDetail/ViewNotice/ViewNotice";
import MyProfile from "@/page-layout/MyProfileLayout/MyProfile/MyProfile";
import { axiosInstance, axiosInstanceToken } from "@/shared/apis/axiosInstance";
import RootLayout from "@/shared/components/RootLayout/RootLayout";
import formatDateTimeRange from "@/shared/utils/getFormatDateTimeRange";
import { useEffect, useState } from "react";

interface Shop {
  name: string;
}

interface Notice {
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

export async function getServerSideProps() {
  let myProfile;

  try {
    const response = await axiosInstance.get("users/af968af9-03b1-448e-b8f3-f3823fc7f6a8");
    myProfile = response?.data.item ?? [];
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      myProfile,
    },
  };
}

export default function MyShop({ myProfile }: ApiData) {
  const [registeredNotice, setRegisteredNotice] = useState<Item[]>([]);

  const fetchNotices = async () => {
    const res = await axiosInstanceToken.get(`users/af968af9-03b1-448e-b8f3-f3823fc7f6a8/applications`);
    const result = await res.data.items;
    setRegisteredNotice(result);
  };

  const registerNoticeData = registeredNotice.map((item) => {
    return {
      name: item.item.shop.item.name,
      hourlyPay: item.item.notice.item.hourlyPay,
      startsAt: formatDateTimeRange(item.item.notice.item.startsAt, item.item.notice.item.workhour),
    };
  });

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <RootLayout>
      <MyProfile myProfile={myProfile} />
      {registeredNotice ? <RegisterNotice registerNoticeData={registerNoticeData} /> : <ViewNotice />}
    </RootLayout>
  );
}
