import classNames from "classnames/bind";
import styles from "./NoticeDetailInfo.module.scss";
import Image from "next/image";
import { data } from "./testData";

const cn = classNames.bind(styles);

export default function NoticeDetailInfo() {
  return (
    <div className={cn("noticeDetailInfo")}>
      <div className={cn("content")}>
        <div className={cn("font")}>
          <h2>음식종류 데이터</h2>
          <h1>식당 이름</h1>
        </div>
        <div className={cn("imgFrame")}>
          <div style={{ width: "596.75px", height: "542.85px", position: "relative" }}>
            <Image
              src="https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/d3fdf139-8b17-46ac-8e72-9ceb9893ae68-xef.jpeg"
              fill
              alt="Description"
            />
          </div>
        </div>
        <div className={cn("detail")}></div>
      </div>

      <div></div>
    </div>
  );
}

//
