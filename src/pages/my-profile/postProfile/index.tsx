import RootLayout from "@/shared/components/RootLayout/RootLayout";
import PostProfileLayout from "@/page-layout/PostProfileLayout/PostProfileLayout";

export default function PostProfilePage() {
  return (
    <RootLayout needFooter={false}>
      <PostProfileLayout />
    </RootLayout>
  );
}
