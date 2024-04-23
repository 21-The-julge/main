import NoticeDetailInfo from "@/page-layout/NoticesLayout/components/NoticeDetailInfo/NoticeDetailInfo";
import NoticesViewedRecent from "@/page-layout/NoticesLayout/components/NoticesViewedRecent/NoticesViewedRecent";
import RootLayout from "@/shared/components/RootLayout/RootLayout";

export default function NoticeDetail() {
  return (
    <RootLayout>
      <NoticeDetailInfo />
      <NoticesViewedRecent />
    </RootLayout>
  );
}
