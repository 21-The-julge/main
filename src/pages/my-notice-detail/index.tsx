import NoticeDetailInfo from "@/page-layout/NoticesLayout/components/NoticeDetailInfo/NoticeDetailInfo";
import NoticeTable from "@/page-layout/NoticesLayout/components/NoticeTable/NoticeTable";
import RootLayout from "@/shared/components/RootLayout/RootLayout";

export default function NoticeDetail() {
  const shopId = "7f79ef71-553d-4c50-a35c-7cb48e978b4c";
  const noticeId = "71520b38-69f6-4cc6-b8a3-e3ef859ed9a6";

  return (
    <RootLayout>
      <NoticeDetailInfo shopId={shopId} noticeId={noticeId} myNotice />
      <NoticeTable shopId={shopId} noticeId={noticeId} />
    </RootLayout>
  );
}
