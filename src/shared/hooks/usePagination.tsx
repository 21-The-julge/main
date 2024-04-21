import { useState } from "react";

// pagination prop값을 리턴하는 use 커스텀 훅

export default function usePagination(
  totalDataNum: number,
  itemsPageNum: number,
): [number, number, (page: number) => void] {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalDataNum / itemsPageNum);
  function setPage(page: number) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  return [currentPage, totalPages, setPage];
}
