import classNames from "classnames/bind";

import styles from "@/page-layout/MyProfileLayout/ApplicationDetail/RegisterNotice/RegitserNotice.module.scss";
import Table from "@/common/components/Table/Table";

const cn = classNames.bind(styles);

interface TableHeader {
  header: string;
  accessor: string;
}

interface RegisterNoticeProps {
  registerNoticeData: {
    name: string;
    startsAt: string;
    hourlyPay: number;
  }[];
}

export default function RegisterNotice({ registerNoticeData }: RegisterNoticeProps) {
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
      </div>
    </div>
  );
}
