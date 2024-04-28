import classNames from "classnames/bind";

import styles from "@/page-layout/MyProfileLayout/ApplicationDetail/RegisterNotice/RegitserNotice.module.scss";
import Table from "@/common/components/Table/Table";
import Pagination from "@/shared/components/Pagination/Pagination";
import usePaginationProps from "@/shared/hooks/usePagination";

const cn = classNames.bind(styles);

interface TableHeader {
  header: string;
  accessor: string;
}

interface RegisterNoticeProps {
  registerNoticeData: {
    name: string;
    startsAt: string;
    hourlyPay: string;
  }[];
}

export default function RegisterNotice({ registerNoticeData }: RegisterNoticeProps) {
  const totalDataCount = registerNoticeData.length;
  const itemsPageCount = 5;

  const [currentPage, totalPages, setPage] = usePaginationProps({ totalDataCount, itemsPageCount });
  const startIndex = (currentPage - 1) * itemsPageCount; // 테이블의 첫 번째 요소의 인덱스
  const endIndex = startIndex + itemsPageCount; // 테이블의 마지막 요소의 인덱스
  const currentPageData = registerNoticeData.slice(startIndex, endIndex);

  const employeeHeaders: TableHeader[] = [
    { header: "가게", accessor: "name" },
    { header: "일자", accessor: "startsAt" },
    { header: "시급", accessor: "hourlyPay" },
    { header: "상태", accessor: "status" },
  ];

  return (
    <div className={cn("container")}>
      <div className={cn("registerContiner")}>
        <p className={cn("registerTitle")}>신청 내역</p>
        <Table columns={employeeHeaders} data={currentPageData} />
        <Pagination currentPage={currentPage} totalPage={totalPages} onPageClick={setPage} />
      </div>
    </div>
  );
}
