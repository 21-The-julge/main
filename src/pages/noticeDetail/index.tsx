import NoticeDetailInfo from "@/page-layout/NoticesLayout/components/NoticeDetailInfo/NoticeDetailInfo";
import NoticeTable from "@/page-layout/NoticesLayout/components/NoticeTable/NoticeTable";
import NoticesViewedRecent from "@/page-layout/NoticesLayout/components/NoticesViewedRecent/NoticesViewedRecent";
import RootLayout from "@/shared/components/RootLayout/RootLayout";

export default function NoticeDetail() {
  const userId = "e2a14429-0f94-49ea-96e0-9d1655d6ea24";
  const shopId = "7f79ef71-553d-4c50-a35c-7cb48e978b4c";
  const noticeId = "71520b38-69f6-4cc6-b8a3-e3ef859ed9a6";
  return (
    <RootLayout>
      <NoticeDetailInfo />
    </RootLayout>
  );
}
//  <NoticesViewedRecent />
//     <NoticeTable shopId={shopId} noticeId={noticeId} />
