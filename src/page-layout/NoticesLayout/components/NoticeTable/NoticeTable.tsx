import { ReactNode, useEffect, useState } from "react";
import Table from "@/common/components/Table/Table";
import { employersData } from "@/page-layout/NoticesLayout/components/NoticeTable/testData";
import Pagination from "@/shared/components/Pagination/Pagination";
import usePagination from "@/shared/hooks/usePagination";
import Badge from "@/shared/components/Badge/Badge";
import { Button } from "@/common/components";
import classNames from "classnames/bind";
import styles from "./NoticeTable.module.scss";
import { usePostApplicationData } from "@/shared/apis/api-hooks";

interface NoticeTableProps {
  shopId: string;
  noticeId: string;
}

interface TableHeader {
  header: string;
  accessor: string;
}
interface EmployerTableData {
  name: string;
  phone: string;
  bio: string;
  status: string;
}

const cn = classNames.bind(styles);

export default function NoticeTable({ shopId, noticeId }: NoticeTableProps) {
  const [employers, setEmployers] = useState<EmployerTableData[]>(employersData);
  const totalDataCount = employers.length;
  const itemsPageCount = 5;
  const [currentPage, totalPages, setPage] = usePagination({ totalDataCount, itemsPageCount });

  const indexOfLastItem = currentPage * itemsPageCount;
  const indexOfFirstItem = indexOfLastItem - itemsPageCount;
  const currentItems = employers.slice(indexOfFirstItem, indexOfLastItem);

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

  const dataFrom = currentItems.map((employer, index) => ({
    ...employer,
    status: statusFormatData(index + indexOfFirstItem, employer.status),
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

/*
  const userData = data.items.map(({ item }) => {
    const { id: userId, user: { item: { id, name, phone, bio }}, status } = item;
    
    // userId를 따로 저장하고, 나머지 정보를 객체로 구성
    return {
      userId: id,
      userDetails: {
        name,
        phone,
        bio,
        status
      }
    };
  });
  */
/*
  useEffect(() => {
    async function fetchData() {
      const { data } = await usePostApplicationData({ shopId, noticeId });
      console.log(data); // 데이터 처리
    }
    fetchData();
  }, [shopId, noticeId]);*/
