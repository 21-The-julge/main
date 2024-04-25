import { ReactNode, useEffect, useState } from "react";
import { parseISO, format, addHours } from "date-fns";
import Table from "@/common/components/Table/Table";
import { employersData } from "@/page-layout/NoticesLayout/components/NoticeTable/testData";
import Pagination from "@/shared/components/Pagination/Pagination";
import usePagination from "@/shared/hooks/usePagination";
import Badge from "@/shared/components/Badge/Badge";
import { Button } from "@/common/components";
import classNames from "classnames/bind";
import styles from "./NoticeTable.module.scss";

const cn = classNames.bind(styles);

interface TableHeader {
  header: string;
  accessor: string;
}
interface EmployerTableData {
  name: string;
  phone: string;
  bio: string;
  status: string; // 'initial', 'accepted', or 'rejected'
}

export default function NoticeTable() {
  const [employers, setEmployers] = useState<EmployerTableData[]>(employersData);
  const totalDataCount = employers.length;
  const itemsPageCount = 5;
  const [currentPage, totalPages, setPage] = usePagination({ totalDataCount, itemsPageCount });

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedEmployers = employers.map((employer, idx) => {
      if (idx === index) {
        return { ...employer, status: newStatus };
      }
      return employer;
    });
    setEmployers(updatedEmployers);
  };

  const statusFormatData = (index: number, status: string): ReactNode => {
    if (status === "accepted") {
      return (
        <Badge color="blue" isResponsive={true} hasCloseIcon={false}>
          승인 완료
        </Badge>
      );
    } else if (status === "rejected") {
      return (
        <Badge color="red" isResponsive={true} hasCloseIcon={false}>
          거절
        </Badge>
      );
    } else {
      return (
        <div className={cn("tableButton")}>
          <Button
            type="button"
            size="small"
            variant="outline"
            color="primary"
            onClick={() => handleStatusChange(index, "rejected")}
          >
            거절하기
          </Button>
          <Button
            type="button"
            size="small"
            variant="outline"
            color="secondary"
            onClick={() => handleStatusChange(index, "accepted")}
          >
            승인하기
          </Button>
        </div>
      );
    }
  };

  const dataFrom = employers.map((employer, index) => ({
    ...employer,
    status: statusFormatData(index, employer.status),
  }));

  const employerColumns: TableHeader[] = [
    { header: "이름", accessor: "name" },
    { header: "간략한 소개", accessor: "bio" },
    { header: "전화번호", accessor: "phone" },
    { header: "지원 상태", accessor: "status" },
  ];

  return (
    <div>
      <Table columns={employerColumns} data={dataFrom} />
      <Pagination currentPage={currentPage} totalPage={totalPages} onPageClick={setPage} />
    </div>
  );
}
