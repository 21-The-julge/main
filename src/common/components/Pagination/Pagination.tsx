import React from "react";

// Props 타입 정의
interface PaginationProps {
  currentPage: number; // 현재 페이지 번호
  totalPages: number; // 전체 페이지 수
  onPageChange: (page: number) => void; // 페이지 번호 클릭 시 실행할 함수
  pageSize: number; // 페이지당 아이템 수
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, pageSize }) => {
  const pageNumberLimit = 7; // 한 그룹당 최대 페이지 번호 수
  const maxPageNumberGroup = Math.ceil(totalPages / pageNumberLimit); // 전체 페이지 그룹 수 계산
  const currentPageGroup = Math.ceil(currentPage / pageNumberLimit); // 현재 페이지 그룹

  const firstPageIndex = (currentPageGroup - 1) * pageNumberLimit + 1; // 현재 그룹의 첫 페이지 번호
  const lastPageIndex = Math.min(firstPageIndex + pageNumberLimit - 1, totalPages); // 현재 그룹의 마지막 페이지 번호

  const pages = Array.from({ length: lastPageIndex - firstPageIndex + 1 }, (_, i) => firstPageIndex + i); // 현재 페이지 그룹의 페이지 번호 배열 생성

  const goToNextGroup = () => {
    // 다음 페이지 그룹으로 이동
    const nextGroupFirstPage = currentPageGroup * pageNumberLimit + 1;
    if (nextGroupFirstPage <= totalPages) {
      onPageChange(nextGroupFirstPage);
    }
  };

  const goToPreviousGroup = () => {
    // 이전 페이지 그룹으로 이동
    const previousGroupFirstPage = (currentPageGroup - 2) * pageNumberLimit + 1;
    if (previousGroupFirstPage > 0) {
      onPageChange(previousGroupFirstPage);
    }
  };

  return (
    <div>
      {currentPageGroup > 1 && <button onClick={goToPreviousGroup}>{"<<"} // 이전 그룹으로 이동 버튼</button>}
      {pages.map((page) => (
        <button
          key={page}
          style={{ fontWeight: currentPage === page ? "bold" : "normal" }} // 현재 페이지는 굵게 표시
          onClick={() => onPageChange(page)} // 해당 페이지 번호 클릭 시 핸들러
        >
          {page}
        </button>
      ))}
      {currentPageGroup < maxPageNumberGroup && (
        <button onClick={goToNextGroup}>{">>"} // 다음 그룹으로 이동 버튼</button>
      )}
      <button onClick={() => onPageChange(1)}>First // 첫 페이지로 이동</button>
      <button onClick={() => onPageChange(totalPages)}>Last // 마지막 페이지로 이동</button>
    </div>
  );
};

export default Pagination;
