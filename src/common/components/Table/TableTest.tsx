import React from "react";
import Table from "./Table"; // './Table'은 이전에 정의한 Table 컴포넌트의 경로입니다.
import { employerColumns, employers } from "./testData";

export default function TableTest() {
  return <Table columns={employerColumns} data={employers} />;
}
/*
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const currentData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };*/
//<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />``
