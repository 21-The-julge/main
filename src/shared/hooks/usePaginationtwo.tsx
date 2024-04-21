import { useState, useMemo } from "react";

// pagination prop값과 데이터를 리턴하는 use 커스텀 훅

function usePagination(
  data: {
    [key: string]: any;
  }[],
  itemsPageNum: number,
) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPageNum);

  const currentData = useMemo(() => {
    return data.slice((currentPage - 1) * itemsPageNum, currentPage * itemsPageNum);
  }, [currentPage, itemsPageNum, data]);

  return { currentPage, totalPages, currentData, setPage: setCurrentPage };
}
