import RootLayout from "@/shared/components/RootLayout/RootLayout";
import NoticeDetailInfo from "@/page-layout/NoticesLayout/components/NoticeDetailInfo/NoticeDetailInfo";
import NoticesRecent from "@/page-layout/NoticesLayout/components/NoticesRecent/NoticesRecent";
import { useRouter } from "next/router";

export default function NoticeDetail() {
  const router = useRouter();
  const { shopId, noticeId } = router.query;

  if (typeof shopId !== "string" || typeof noticeId !== "string") {
    return <div>Loading</div>;
  }

  return (
    <RootLayout>
      <NoticeDetailInfo shopId={shopId} noticeId={noticeId} myNotice={false} />
      <NoticesRecent />
    </RootLayout>
  );
}
