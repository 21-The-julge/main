import { Button } from "@/common/components";

import { useRouter } from "next/router";

import classNames from "classnames/bind";
import styles from "@/page-layout/MyShopLayout/component/RegisteredShop/Register/Register.module.scss";
import { ROUTE } from "@/common/constants";

const cn = classNames.bind(styles);

export default function Registser() {
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTE.POSTNOTICE);
  };

  return (
    <div className={cn("container")}>
      <div className={cn("registerContiner")}>
        <p className={cn("myRegisterdShop")}>등록한 공고</p>
        <div className={cn("registerContainer")}>
          <p className={cn("registerText")}>공고를 등록해 보세요.</p>
          <Button size="large" onClick={handleClick}>
            공고 등록하기
          </Button>
        </div>
      </div>
    </div>
  );
}
