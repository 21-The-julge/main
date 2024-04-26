import { useState } from "react";

interface PaginationHookOptions {
  totalDataCount: number;
  itemsPageCount: number;
}

// pagination prop값을 리턴하는 use 커스텀 훅

export default function usePaginationProps({ totalDataCount, itemsPageCount }: PaginationHookOptions) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalDataCount / itemsPageCount);
  function setPage(page: number) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  return [currentPage, totalPages, setPage] as const;
}
