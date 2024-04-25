import NoticeDetailInfo from "@/page-layout/NoticesLayout/components/NoticeDetailInfo/NoticeDetailInfo";
import NoticeTable from "@/page-layout/NoticesLayout/components/NoticeTable/NoticeTable";
import NoticesViewedRecent from "@/page-layout/NoticesLayout/components/NoticesViewedRecent/NoticesViewedRecent";
import RootLayout from "@/shared/components/RootLayout/RootLayout";

export default function NoticeDetail() {
  return (
    <RootLayout>
      <NoticeTable />
    </RootLayout>
  );
}
//  <NoticesViewedRecent />
// <NoticeDetailInfo />
