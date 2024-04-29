import IcLeftArrow from "@/images/ic_arrow_left.svg";
import IcArrowDoubleLeft from "@/images/ic_arrow_double_left.svg";
import IcArrowRight from "@/images/ic_arrow_right.svg";
import IcArrowDoubleRight from "@/images/ic_arrow_double_right.svg";
import classNames from "classnames/bind";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageClick: (page: number) => void;
  pageNumberLimit?: number;
}

const cn = classNames.bind(styles);

export default function Pagination({ currentPage, totalPage, onPageClick, pageNumberLimit = 7 }: PaginationProps) {
  const currentPageGroup = Math.ceil(currentPage / pageNumberLimit);
  const currentGroupFirstIndex = (currentPageGroup - 1) * pageNumberLimit + 1;
  const currentGroupLastIndex = Math.min(currentGroupFirstIndex + pageNumberLimit - 1, totalPage);

  const pages = Array.from(
    { length: currentGroupLastIndex - currentGroupFirstIndex + 1 },
    (_, i) => currentGroupFirstIndex + i,
  );

  const movePrevGroup = () => {
    const prevGroupPage = (currentPageGroup - 2) * pageNumberLimit + 1;
    if (prevGroupPage > 0) {
      onPageClick(prevGroupPage);
    }
  };

  const moveNextGroup = () => {
    const nextGroupPage = currentPageGroup * pageNumberLimit + 1;
    if (nextGroupPage <= totalPage) {
      onPageClick(nextGroupPage);
    }
  };

  return (
    <div className={cn("pagination")}>
      {totalPage > pageNumberLimit && (
        <button type="button" aria-label="처음 페이지로" onClick={() => onPageClick(1)}>
          <IcArrowDoubleLeft className={cn("buttonArrow")} />
        </button>
      )}
      {totalPage > pageNumberLimit && (
        <button type="button" aria-label="이전 페이지 그룹" onClick={movePrevGroup}>
          <IcLeftArrow className={cn("buttonArrow")} />
        </button>
      )}
      <div className={cn("buttonPageFrame")}>
        {pages.map((page) => (
          <button
            type="button"
            className={cn("buttonPage", { active: currentPage === page })}
            key={page}
            aria-label={`페이지 ${page}로 이동`}
            onClick={() => onPageClick(page)}
          >
            {page}
          </button>
        ))}
      </div>
      {totalPage > pageNumberLimit && (
        <button type="button" aria-label="다음 페이지 그룹" onClick={moveNextGroup}>
          <IcArrowRight className={cn("buttonArrow")} />
        </button>
      )}
      {totalPage > pageNumberLimit && (
        <button type="button" aria-label="마지막 페이지로" onClick={() => onPageClick(totalPage)}>
          <IcArrowDoubleRight className={cn("buttonArrow")} />
        </button>
      )}
    </div>
  );
}
