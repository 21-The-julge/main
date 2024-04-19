import classNames from "classnames/bind";
import styles from "@/page-layout/MyShopLayout/component/ShopRegister/ShopRegister.module.scss";
import Button from "@/common/components/Button/Button";

import { useRouter } from "next/router";

const cn = classNames.bind(styles);

export default function ShopRegister() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
    // TODO: 가게 정보 등록 페이지로 이동해야함. + 등록한 가게가 있으면 모달 띄우기
  };

  return (
    <div className={cn("container")}>
      <div className={cn("registerContiner")}>
        <p className={cn("myShop")}>내 가게</p>
        <div className={cn("register")}>
          <p className={cn("registerText")}>내 가게를 소개하고 공고도 등록해 보세요.</p>
          <Button size="large" onClick={handleClick}>
            가게 등록하기
          </Button>
        </div>
      </div>
    </div>
  );
}
