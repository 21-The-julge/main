import LeftArrowIcon from "@/images/ic_arrow_left.svg";
import LeftArrowDoubleIcon from "@/images/ic_arrow_double_left.svg";
import RightArrowIcon from "@/images/ic_arrow_right.svg";
import RightArrowDoubleIcon from "@/images/ic_arrow_double_right.svg";
import classNames from "classnames/bind";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageNumberLimit?: number;
}

const cn = classNames.bind(styles);

export default function Pagination({ currentPage, totalPages, onPageChange, pageNumberLimit = 7 }: PaginationProps) {
  const currentPageGroup = Math.ceil(currentPage / pageNumberLimit); // 현재 페이지가 속한 페이지 그룹 Ex) (1~7)1그룹 (8~14)2그룹
  const currentGroupFirstIndex = (currentPageGroup - 1) * pageNumberLimit + 1;
  const currentGroupLastIndex = Math.min(currentGroupFirstIndex + pageNumberLimit - 1, totalPages);

  // 현재 페이지 그룹에 속한 페이지 번호 배열 생성
  const pages = Array.from(
    { length: currentGroupLastIndex - currentGroupFirstIndex + 1 },
    (_, i) => currentGroupFirstIndex + i,
  );

  const moveNextGroup = () => {
    const nextGroupPage = currentPageGroup * pageNumberLimit + 1;
    if (nextGroupPage <= totalPages) {
      onPageChange(nextGroupPage);
    }
  };

  const movePrevGroup = () => {
    const prevGroupPage = (currentPageGroup - 2) * pageNumberLimit + 1;
    if (prevGroupPage > 0) {
      onPageChange(prevGroupPage);
    }
  };

  return (
    <div className={cn("pagination")}>
      <button onClick={() => onPageChange(1)}>
        <LeftArrowDoubleIcon className={cn("buttonArrow")} />
      </button>
      {currentPageGroup > 0 && (
        <button onClick={movePrevGroup}>
          <LeftArrowIcon className={cn("buttonArrow")} />
        </button>
      )}
      <div className={cn("buttonPageFrame")}>
        {pages.map((page) => (
          <button
            className={cn("buttonPage", { active: currentPage === page })}
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button onClick={moveNextGroup}>
        <RightArrowIcon className={cn("buttonArrow")} />
      </button>
      <button onClick={() => onPageChange(totalPages)}>
        <RightArrowDoubleIcon className={cn("buttonArrow")} />
      </button>
    </div>
  );
}
