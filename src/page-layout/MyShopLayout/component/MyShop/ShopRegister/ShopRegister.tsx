import classNames from "classnames/bind";
import styles from "@/page-layout/MyShopLayout/component/MyShop/ShopRegister/ShopRegister.module.scss";

import Button from "@/common/components/Button/Button";

import { useRouter } from "next/router";

const cn = classNames.bind(styles);

export default function ShopRegister() {
  const router = useRouter();

  const handleClick = () => {
    router.push("shops/register-my-shop");
  };

  return (
    <div className={cn("register")}>
      <p className={cn("registerText")}>내 가게를 소개하고 공고도 등록해 보세요.</p>
      <Button size="large" onClick={handleClick}>
        가게 등록하기
      </Button>
    </div>
  );
}
