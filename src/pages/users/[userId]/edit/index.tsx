import { useRouter } from "next/router";
import RootLayout from "@/shared/components/RootLayout/RootLayout";
import PostProfileEditLayout from "@/page-layout/PostProfileEditLayout/PostProfileEditLayout";

import useUserDataStore from "@/shared/hooks/useUserDataStore";
import { ROUTE } from "@/common/constants/";

export default function PostProfileEditPage() {
  const router = useRouter();
  const { type } = useUserDataStore();
  if (type === "employer") {
    router.replace(ROUTE.HOME);
  }
  return (
    <RootLayout needFooter={false}>
      <PostProfileEditLayout />
    </RootLayout>
  );
}
