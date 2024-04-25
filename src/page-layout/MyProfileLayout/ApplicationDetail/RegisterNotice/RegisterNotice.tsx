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
  const itemsPageNum = 5;
  const [currentPage, totalPages, setPage] = usePaginationProps(totalDataCount, itemsPageNum);

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
        <Table columns={employeeHeaders} data={registerNoticeData} />
        {/* <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} /> */}
      </div>
    </div>
  );
}
