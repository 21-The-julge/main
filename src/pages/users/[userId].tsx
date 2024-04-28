import RootLayout from "@/shared/components/RootLayout/RootLayout";
import PostProfileEditLayout from "@/page-layout/PostProfileEditLayout/PostProfileEditLayout";

export default function PostProfileEditPage() {
  return (
    <RootLayout needFooter={false}>
      <PostProfileEditLayout />
    </RootLayout>
  );
}
