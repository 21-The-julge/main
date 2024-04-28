import classNames from "classnames/bind";
import Button from "@/common/components/Button/Button";

import { useRouter } from "next/router";
import styles from "@/page-layout/MyProfileLayout/MyProfile/RegisterMyProfile/RegisterMyProfile.module.scss";

const cn = classNames.bind(styles);

export default function RegisterMyProfile() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
    // TODO: 가게 정보 등록 페이지로 이동해야함
  };

  return (
    <div className={cn("container")}>
      <div className={cn("registerContiner")}>
        <p className={cn("myProfile")}>내 프로필</p>
        <div className={cn("register")}>
          <p className={cn("registerText")}>내 프로필을 등록하고 원하는 가게에 지원해 보세요.</p>
          <Button size="large" onClick={handleClick}>
            내 프로필 등록하기
          </Button>
        </div>
      </div>
    </div>
  );
}
