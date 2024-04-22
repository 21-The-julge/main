import classNames from "classnames/bind";
import { useRouter } from "next/router";
import styles from "./SearchLayout.module.scss";

const cn = classNames.bind(styles);

export default function SearchLayout() {
  const router = useRouter();
  const { inputValue } = router.query;
  return (
    <div className={cn("container")}>
      <div>
        <div>{inputValue && inputValue}에 대한 검색 결과</div>
        <div>필터 컴포넌트 위치</div>
        <div>공고 목록 위치</div>
      </div>
    </div>
  );
}
