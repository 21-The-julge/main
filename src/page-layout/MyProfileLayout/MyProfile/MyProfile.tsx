import PostSkeleton from "@/shared/components/Post/Skeleton/PostSkeleton";
import classNames from "classnames/bind";
import styles from "@/page-layout/MyProfileLayout/MyProfile/ShowMyProfile/ShowMyProfile.module.scss";
import RegisterMyProfile from "./RegisterMyProfile/RegisterMyProfile";
import ShowMyProfile from "./ShowMyProfile/ShowMyProfile";

const cn = classNames.bind(styles);

interface MyProfileProps {
  myProfile:
    | {
        id: string;
        email: string;
        type: string;
        name: string;
        phone: string;
        address: string;
        bio: string;
      }
    | undefined;
  isPending: boolean;
}

export default function MyProfile({ myProfile, isPending }: MyProfileProps) {
  if (isPending) {
    return <PostSkeleton className={cn("skeleton")} />;
  }
  if (!myProfile?.bio) {
    return <RegisterMyProfile />;
  }

  return <ShowMyProfile myProfile={myProfile} />;
}
