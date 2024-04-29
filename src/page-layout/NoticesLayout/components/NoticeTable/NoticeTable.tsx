import { ReactNode, useEffect, useState } from "react";
import Table from "@/common/components/Table/Table";
import Pagination from "@/shared/components/Pagination/Pagination";
import usePagination from "@/shared/hooks/usePagination";
import Badge from "@/shared/components/Badge/Badge";
import { Button } from "@/common/components";
import classNames from "classnames/bind";
import { GetShopApplicationsDataType } from "@/page-layout/NoticesLayout/type";
import { useGetShopApplicationsData, usePutApplicationData } from "@/shared/apis/api-hooks";
import styles from "./NoticeTable.module.scss";

interface NoticeTableProps {
  shopId: string;
  noticeId: string;
}
interface TableHeader {
  header: string;
  accessor: string;
}
interface EmployeeTableData {
  name?: string;
  phone?: string;
  bio?: string;
  status?: string | ReactNode;
}

const cn = classNames.bind(styles);

export default function NoticeTable({ shopId, noticeId }: NoticeTableProps) {
  const { data: getShopApplicationsData } = useGetShopApplicationsData({ shopId, noticeId, limit: 100 }) as {
    data: GetShopApplicationsDataType;
  };
  const [employeeTableData, setEmployeeTableData] = useState<EmployeeTableData[]>([]);
  const [applicationId, setApplicationId] = useState("");

  const totalDataCount = employeeTableData.length;
  const itemsPageCount = 5;
  const [currentPage, totalPages, setPage] = usePagination({ totalDataCount, itemsPageCount });

  const lastItemIndex = currentPage * itemsPageCount;
  const firstItemIndex = lastItemIndex - itemsPageCount;
  const currentPageItems = employeeTableData.slice(firstItemIndex, lastItemIndex);

  const { mutate: applicationAccept } = usePutApplicationData({
    shopId,
    noticeId,
    applicationId,
    bodydata: { status: "accepted" },
  });
  const { mutate: applicationReject } = usePutApplicationData({
    shopId,
    noticeId,
    applicationId,
    bodydata: { status: "rejected" },
  });

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedEmployees = employeeTableData.map((employee, idx) => {
      if (idx === index) {
        return { ...employee, status: newStatus };
      }
      return employee;
    });
    setEmployeeTableData(updatedEmployees);
    if (newStatus === "accepted") {
      setApplicationId(getShopApplicationsData.items[index].item.id);
      applicationAccept();
    } else if (newStatus === "rejected") {
      setApplicationId(getShopApplicationsData.items[index].item.id);
      applicationReject();
    }
  };

  const statusFormatData = (index: number, status: string | ReactNode): ReactNode => {
    if (status === "accepted") {
      return (
        <Badge color="blue" isResponsive hasCloseIcon={false}>
          승인 완료
        </Badge>
      );
    }
    if (status === "rejected") {
      return (
        <Badge color="red" isResponsive hasCloseIcon={false}>
          거절
        </Badge>
      );
    }
    if (status === "canceled") {
      return (
        <Badge color="red" isResponsive hasCloseIcon={false}>
          취소
        </Badge>
      );
    }
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
  };

  const employeeColumns: TableHeader[] = [
    { header: "이름", accessor: "name" },
    { header: "간략한 소개", accessor: "bio" },
    { header: "전화번호", accessor: "phone" },
    { header: "지원 상태", accessor: "status" },
  ];

  const dataFrom = currentPageItems.map((employee, index) => ({
    ...employee,
    status: statusFormatData(index + firstItemIndex, employee.status),
  }));

  useEffect(() => {
    if (getShopApplicationsData) {
      const applicationsData: EmployeeTableData[] = getShopApplicationsData?.items.map((item) => {
        const user = item.item.user.item;
        return {
          name: user.name,
          phone: user.phone,
          bio: user.bio,
          status: item.item.status,
        };
      });
      setEmployeeTableData(applicationsData);
    }
  }, [getShopApplicationsData]);

  return (
    <div className={cn("noticesTableContainer")}>
      <div className={cn("noticesTableFrame")}>
        <h1>신청자 목록</h1>
        <div className={cn("noticesTable")}>
          <Table columns={employeeColumns} data={dataFrom} />
          <Pagination currentPage={currentPage} totalPage={totalPages} onPageClick={setPage} />
        </div>
      </div>
    </div>
  );
}
