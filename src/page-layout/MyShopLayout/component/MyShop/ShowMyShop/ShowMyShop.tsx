import { useState } from "react";
import { ROUTE } from "@/common/constants/index";
import classNames from "classnames/bind";
import styles from "@/page-layout/MyShopLayout/component/MyShop/ShowMyShop/ShowMyshop.module.scss";

import Button from "@/common/components/Button/Button";
import Location from "@/images/ic_location.svg";

import { useRouter } from "next/router";
import Image from "next/image";
import { ShopData } from "@/page-layout/MyShopLayout/type";

const cn = classNames.bind(styles);

interface ShowMyShopProps {
  myShopData: ShopData;
}

export default function ShowMyShop({ myShopData }: ShowMyShopProps) {
  const router = useRouter();

  const [isImgError, setIsImgError] = useState<boolean>(false);

  const handleEditClick = () => {
    router.push(`${ROUTE.EDIT_MY_SHOP}`);
  };

  const handleRegisterClick = () => {
    router.push(ROUTE.POSTNOTICE);
  };

  return (
    <div className={cn("shopContainer")}>
      <div className={cn("img")}>
        {myShopData?.imageUrl && (
          <Image
            fill
            src={isImgError ? "/images/logo.svg" : myShopData?.imageUrl}
            alt="내 가게"
            sizes="(max-width: 757px) 303px, (max-width: 1024px) 632px, 539px"
            onError={() => setIsImgError(true)}
          />
        )}
      </div>
      <div className={cn("myShopInfoContainer")}>
        <div className={cn("contentContainer")}>
          <div className={cn("myShopTitleContainer")}>
            <p className={cn("myShopType")}>{myShopData.category}</p>
            <p className={cn("myShopTitle")}>{myShopData.name}</p>
          </div>
          <div className={cn("location")}>
            <Location width="2rem" height="2rem" fill="#F48A71" />
            <p>{myShopData.address1}</p>
          </div>
          <p className={cn("explanation")}>{myShopData.description}</p>
        </div>
        <div className={cn("buttonContainer")}>
          <Button className={cn("button")} variant="outline" size="large" onClick={handleEditClick}>
            편집하기
          </Button>
          <Button className={cn("button")} size="large" onClick={handleRegisterClick}>
            공고 등록하기
          </Button>
        </div>
      </div>
    </div>
  );
}
