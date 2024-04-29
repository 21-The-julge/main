import RootLayout from "@/shared/components/RootLayout/RootLayout";
import PostNoticeEditLayout from "@/page-layout/PostNoticeEditLayout/PostNoticeEditLayout";

export default function PostNoticeEditPage() {
  return (
    <RootLayout needFooter={false}>
      <PostNoticeEditLayout />
    </RootLayout>
  );
}
