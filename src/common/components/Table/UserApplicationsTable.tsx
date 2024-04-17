import { useState, useEffect } from "react";
import Table from "./Table"; // './Table'은 이전에 정의한 Table 컴포넌트의 경로입니다.
import { EmployeeData, employeeColumns, employees, employerColumns, employers } from "./testData";
import { UserApplicationData, getUserApplications } from "./tableDate";

export default function UserApplicationsTable() {
  const [data, setData] = useState<EmployeeData[]>([
    {
      name: "상점 이름",
      startsAt: "근무 시작 시간",
      workhour: 0, //"근무 시간(시간 단위)",
      originalHourlyPay: 0, //"원래 시간당 급여",
      status: "pending",
    },
  ]);

  const UserApplicationTableData = {
    name: "상점 이름",
    startsAt: "2023-07-26T15:00:00.000Z",
    workhour: 2, //"근무 시간(시간 단위)",
    originalHourlyPay: 10000, //"원래 시간당 급여",
    status: "pending",
  };

  useEffect(() => {
    async function fetchData() {
      const testUserId = "b86138e5-686d-4b12-a52e-1e5fdd442dea";
      const testToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiODYxMzhlNS02ODZkLTRiMTItYTUyZS0xZTVmZGQ0NDJkZWEiLCJpYXQiOjE3MTMyMjEwNTR9.GSbfEfJCXcIHEvn-3qE9BDCnSmTCfSZncNV7zDxOhfY";
      const ApiResult = await getUserApplications(testUserId, testToken);
      const userTableDate = await UserApplicationData(ApiResult);
      setData(userTableDate);
      console.log(userTableDate);
    }
    fetchData();
  }, []);
  return <Table columns={employerColumns} data={employers} />;
}

/*
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const currentData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
*/
