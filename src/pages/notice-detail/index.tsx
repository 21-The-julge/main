import RootLayout from "@/shared/components/RootLayout/RootLayout";
import NoticeDetailInfo from "@/page-layout/NoticesLayout/components/NoticeDetailInfo/NoticeDetailInfo";
import NoticesRecent from "@/page-layout/NoticesLayout/components/NoticesRecent/NoticesRecent";
import { useRouter } from "next/router";
import { useGetUserData } from "@/shared/apis/api-hooks";
import NoticeTable from "@/page-layout/NoticesLayout/components/NoticeTable/NoticeTable";

export default function NoticeDetail() {
  const router = useRouter();
  const { shopId, noticeId } = router.query;
  const { data } = useGetUserData();
  const currentShopId = data?.item?.shop?.item.id;

  if (typeof shopId !== "string" || typeof noticeId !== "string") {
    return <div>Loading</div>;
  }
  const myNotice = currentShopId === shopId;
  return (
    <RootLayout>
      <NoticeDetailInfo shopId={shopId} noticeId={noticeId} myNotice={myNotice} />
      {myNotice ? <NoticeTable shopId={shopId} noticeId={noticeId} /> : <NoticesRecent />}
    </RootLayout>
  );
}
