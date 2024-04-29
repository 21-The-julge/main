import RegisterMyProfile from "./RegisterMyProfile/RegisterMyProfile";
import ShowMyProfile from "./ShowMyProfile/ShowMyProfile";

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
}

export default function MyProfile({ myProfile }: MyProfileProps) {
  return myProfile ? <ShowMyProfile myProfile={myProfile} /> : <RegisterMyProfile />;
}
