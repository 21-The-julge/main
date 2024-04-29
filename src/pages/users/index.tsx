import ApplicationDetail from "@/page-layout/MyProfileLayout/ApplicationDetail/ApplicationDetail";
import MyProfile from "@/page-layout/MyProfileLayout/MyProfile/MyProfile";
import { useGetUserApplicationsData, useGetUserData } from "@/shared/apis/api-hooks";
import addComma from "@/shared/components/Post/utils/addComma";
import RootLayout from "@/shared/components/RootLayout/RootLayout";
import getBadge from "@/shared/utils/getBadge";
import formatDateTimeRange from "@/shared/utils/getFormatDateTimeRange";

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

export default function MyShop() {
  const { data, isPending } = useGetUserData();
  const { data: profileData } = useGetUserApplicationsData();
  const registeredMyPofile = data?.item;
  const registeredNotice: Item[] = profileData?.items;

  const registerNoticeData = registeredNotice?.map((item) => {
    return {
      name: item.item.shop.item.name,
      hourlyPay: `${addComma(item.item.notice.item.hourlyPay)}원`,
      startsAt: formatDateTimeRange(item.item.notice.item.startsAt, item.item.notice.item.workhour),
      status: getBadge(item.item.notice.item.status),
    };
  });

  return (
    <RootLayout>
      <MyProfile myProfile={registeredMyPofile} isPending={isPending} />
      {registeredMyPofile ? <ApplicationDetail registerNoticeData={registerNoticeData} /> : null}
    </RootLayout>
  );
}
