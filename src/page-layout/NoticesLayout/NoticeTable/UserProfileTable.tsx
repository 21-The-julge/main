import { useEffect, useState } from "react";
import { parseISO, format, addHours } from "date-fns";
import Table from "./Table";
import { employeeTableData } from "@/common/components/Table/testData";
import Pagination from "../Pagination/Pagination";
import usePagination from "@/shared/hooks/usePagination";
// 더미 데이터 용이라 추후 뺄꺼라 띄어쓰기 해두었습니다

// Data 변경 하기전
interface EmployeeTableData {
  name: string;
  startsAt: string; // 근무 시작 시간
  workhour: number; // 근무 시간(시간 단위)
  originalHourlyPay: number;
  status: "pending" | "accepted" | "rejected" | "canceled";
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

export default function UserProfileTable() {
  // 여기는 페이지 네이션 관련코드입니다
  const totalDataCount = employeeTableData.length;
  const itemsPageNum = 5;
  const [currentPage, totalPages, setPage] = usePagination(totalDataCount, itemsPageNum);

  const timeFormDate = (startsAt: string, workhour: number): string => {
    const startTime = parseISO(startsAt);
    const endTime = addHours(startTime, workhour);
    const date = `${format(startTime, "yyyy-MM-dd HH:mm")}~${format(endTime, "HH:mm")}`;
    return date;
  };
  // status를 badge로 변경할 함수입니다
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
    // 아직 컴포넌트가 객체에 넣어질지{status: 뱃지컴포넌트} 확인을 못했는데 뱃지 머지하고 확인해보겠습니다.
  };
  const employeeHeaders: TableHeader[] = [
    { header: "상점 이름", accessor: "name" },
    { header: "일자", accessor: "date" },
    { header: "시간당 급여", accessor: "originalHourlyPay" },
    { header: "지원 상태", accessor: "status" },
  ];
  /*
  const [currentData, setCurrentData] = useState<EmployeeDataForm[]>([]);
  useEffect(() => {
    console.log("Current page:", currentPage);
    const newData: EmployeeDataForm[] = employeeTableData.slice(
      (currentPage - 1) * itemsPageNum,
      currentPage * itemsPageNum,
    );
    setCurrentData(newData);
    console.log("New data:", newData);
  }, [currentPage, itemsPageNum]);
*/
  return (
    <div>
      <Table columns={employeeHeaders} data={currentData} position="employer" />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
  // 위에는 예시일뿐이고 여기에 페이지 네이션 컴포넌트 들어가면 됩니다.
}
