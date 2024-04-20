import classNames from "classnames/bind";
import styles from "@/page-layout/MyShopLayout/component/MyShop/ShowMyShop/ShowMyshop.module.scss";
import Button from "@/common/components/Button/Button";
import Location from "@/images/ic_location.svg";
import { useRouter } from "next/router";
import Image from "next/image";

const cn = classNames.bind(styles);

interface ShowMyShopProps {
  myShopData: {
    name: string;
    category: string;
    address1: string;
    description: string;
    imageUrl: string;
  };
}

export default function ShowMyShop({ myShopData }: ShowMyShopProps) {
  const router = useRouter();

  const handleEditClick = () => {
    router.push("/");
    // TODO: 가게 정보 편집하기 페이지로 이동해야함
  };

  const handleRegisterClick = () => {
    router.push("/");
    // TODO: 공도 등록하기 페이지로 이동해야함
  };

  return (
    <div className={cn("shopContainer")}>
      <div className={cn("img")}>
        <Image fill src={myShopData?.imageUrl} alt="내 가게" />
      </div>
      <div className={cn("myShopInfoContainer")}>
        <div className={cn("contentContainer")}>
          <div className={cn("myShopTitleContainer")}>
            <p className={cn("myShopType")}>{myShopData.category}</p>
            <p className={cn("myShopTitle")}>{myShopData.name}</p>
          </div>
          <div className={cn("location")}>
            <Location width={20} height={20} fill="#F48A71" />
            <p>{myShopData.address1}</p>
          </div>
          <p className={cn("explanation")}>{myShopData.description}</p>
        </div>
        <div className={cn("buttonContainer")}>
          <Button variant="outline" size="large" onClick={handleEditClick}>
            편집하기
          </Button>
          <Button size="large" onClick={handleRegisterClick}>
            공고 등록하기
          </Button>
        </div>
      </div>
    </div>
  );
}
