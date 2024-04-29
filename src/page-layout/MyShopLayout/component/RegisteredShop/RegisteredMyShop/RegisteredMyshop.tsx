import classNames from "classnames/bind";
import styles from "@/page-layout/MyShopLayout/component/RegisteredShop/RegisteredMyShop/RegisteredMyShop.module.scss";
import { ApiResponse, Item } from "@/shared/apis/apiType";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { useGetShopNoticesData } from "@/shared/apis/api-hooks/useNotices";

import PostContainer from "./PostContainer/PostContainer";
import Registser from "../Register/Register";

const cn = classNames.bind(styles);

export default function RegistseredMyShop({ shopId }: { shopId: string }) {
  const [lastRef, inView] = useInView();

  const { shopNoticeData, hasNextPage, fetchNextPage } = useGetShopNoticesData({ shopId });

  // console.log(shopNoticeData?.pages);
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const RegisteredMyShopComponent = (
    <div className={cn("container")}>
      <div className={cn("registerContiner")}>
        <p className={cn("myRegisterdShop")}>내가 등록한 공고</p>
        <div className={cn("gridContainer")}>
          {shopNoticeData?.pages?.flatMap((page: ApiResponse, pageIndex) =>
            page.items.map((item: Item, itemIndex) => (
              <div key={item.item.id}>
                <PostContainer myShopData={item} shopId={shopId} />
                <div
                  ref={
                    pageIndex === shopNoticeData.pages.length - 1 && itemIndex === page.items.length - 1
                      ? lastRef
                      : null
                  }
                />
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
  return shopNoticeData ? RegisteredMyShopComponent : <Registser />;
}
