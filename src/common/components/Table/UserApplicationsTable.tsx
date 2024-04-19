import Table from "./Table";
import { useState } from "react";
import { parseISO, format, addHours } from "date-fns";
import { employeeTableData } from "@/common/components/Table/testData";

// Data 변경 하기전
interface EmployeeTableData {
  name: string; // 상점 이름
  startsAt: string; // 근무 시작 시간
  workhour: number; // 근무 시간(시간 단위)
  originalHourlyPay: number; // 원래 시간당 급여
  status: "pending" | "accepted" | "rejected" | "canceled"; // 지원 상태
}
// table에 들어갈 최종 데이터 타입
interface EmployeeDataForm {
  name: string;
  date: string;
  originalHourlyPay: number;
  status: string;
}
// table header 타입과 접근하는 colum 내용
interface TableHeader {
  header: string;
  accessor: string;
}

export default function UserApplicationsTable() {
  // 여기는 페이지 네이션 관련코드입니다
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPageNum = 5;
  const totalPagesNum = Math.ceil(employeeTableData.length / rowsPageNum);
  const currentData = employeeTableData.slice((currentPage - 1) * rowsPageNum, currentPage * rowsPageNum);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  // 시간 정제하는 코드에요
  const timeFormDate = (startsAt: string, workhour: number): string => {
    const startTime = parseISO(startsAt);
    const endTime = addHours(startTime, workhour);
    const date = `${format(startTime, "yyyy-MM-dd HH:mm")}~${format(endTime, "HH:mm")}`;
    return date;
  };
  const statusFormDate = (status: string): string => {
    let color;
    if (status === "accepted") {
      color = "blue";
    } else if (status === "rejected") {
      color = "red";
    } else {
      color = "green";
    }
    return color;
    // <Badge color={color} hasCloseIcon=false> 이값으로 리턴할것입니다.
  };
  const employeeHeaders: TableHeader[] = [
    { header: "상점 이름", accessor: "name" },
    { header: "일자", accessor: "date" },
    { header: "시간당 급여", accessor: "originalHourlyPay" },
    { header: "지원 상태", accessor: "status" },
  ];

  return <Table columns={employeeHeaders} data={employeeTableData} position="employer" />;
  // <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
  // 위에는 예시일뿐이고 여기에 페이지 네이션 컴포넌트 들어가면 됩니다.
}
