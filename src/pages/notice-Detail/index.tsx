import RootLayout from "@/shared/components/RootLayout/RootLayout";
import NoticeDetailInfo from "@/page-layout/NoticesLayout/components/NoticeDetailInfo/NoticeDetailInfo";
import NoticesRecent from "@/page-layout/NoticesLayout/components/NoticesRecent/NoticesRecent";

export default function NoticeDetail() {
  const shopId = "7f79ef71-553d-4c50-a35c-7cb48e978b4c";
  const noticeId = "71520b38-69f6-4cc6-b8a3-e3ef859ed9a6";

  return (
    <RootLayout>
      <NoticeDetailInfo shopId={shopId} noticeId={noticeId} myNotice={false} />
      <NoticesRecent />
    </RootLayout>
  );
}
