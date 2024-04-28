import RootLayout from "@/shared/components/RootLayout/RootLayout";
import PostNoticeLayout from "@/page-layout/PostNoticeLayout/PostNoticeLayout";

export default function PostNoticePage() {
  return (
    <RootLayout needFooter={false}>
      <PostNoticeLayout />
    </RootLayout>
  );
}
