import { ROUTE } from "@/common/constants/index";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
import classNames from "classnames/bind";
import Button from "@/common/components/Button/Button";
import Phone from "@/images/ic_phone.svg";
import Locatoin from "@/images/ic_location.svg";
import { useRouter } from "next/router";
import styles from "@/page-layout/MyProfileLayout/MyProfile/ShowMyProfile/ShowMyProfile.module.scss";

const cn = classNames.bind(styles);

interface ShowMyShopProps {
  myProfile: {
    id: string;
    email: string;
    type: string;
    name: string;
    phone: string;
    address: string;
    bio: string;
  };
}

export default function ShowMyProfile({ myProfile }: ShowMyShopProps) {
  const { userId } = useUserDataStore();
  const router = useRouter();

  const handleEditClick = () => {
    router.push(`${ROUTE.MYPROFILE}/${userId}/edit`);
  };

  return (
    <div className={cn("container")}>
      <div className={cn("registerContiner")}>
        <p className={cn("myProfile")}>내 프로필</p>
        <div className={cn("profileContainer")}>
          <div className={cn("profile")}>
            <div className={cn("profileInfo")}>
              <div className={cn("profileData")}>
                <div className={cn("nameContainer")}>
                  <p className={cn("name")}>이름</p>
                  <p className={cn("apiName")}>{myProfile.name}</p>
                </div>
                <div className={cn("phoneNumberContainer")}>
                  <Phone className={cn("phone")} />
                  <p className={cn("phoneNumber")}>{myProfile.phone}</p>
                </div>
                <div className={cn("locationContainer")}>
                  <Locatoin width={20} height={20} fill="#F48A71" />
                  <p className={cn("location")}>선호 지역: {myProfile.address}</p>
                </div>
              </div>
              <p className={cn("bio")}>{myProfile.bio}</p>
            </div>
            <Button className={cn("button")} variant="outline" onClick={handleEditClick} size="medium">
              편집하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
