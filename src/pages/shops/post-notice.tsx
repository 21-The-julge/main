import Router from "next/router";
import RootLayout from "@/shared/components/RootLayout/RootLayout";
import PostNoticeLayout from "@/page-layout/PostNoticeLayout/PostNoticeLayout";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { ROUTE } from "@/common/constants/";

export default function PostNoticePage() {
  const { type } = useUserDataStore();
  if (type === "employee") {
    Router.replace(ROUTE.HOME);
  }
  return (
    <RootLayout needFooter={false}>
      <PostNoticeLayout />
    </RootLayout>
  );
}
