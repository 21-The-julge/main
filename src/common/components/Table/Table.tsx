import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Table.module.scss";
import Button from "@/common/components/Button/Button";

const cn = classNames.bind(styles);

interface TableProps {
  columns: Array<{
    header: string;
    accessor: string;
  }>;
  data: Array<any>;
  position?: "employee" | "employer";
}

export default function Table({ columns, data, position }: TableProps) {
  const [tableData, setTableData] = useState(data);

  // 버튼 클릭 이벤트
  const handleStatusChange = (index: number, buttonStatus: string) => {
    const newData = [...tableData];
    newData[index].status = buttonStatus;
    setTableData(newData);
    // 여기에 PUT /shops/{shop_id}/notices/{notice_id}/applications/{application_id} 넣으면 될 것 같습니다 아직 커스텀 훅 안만들어져서 일단 구현 안했습니다
  };

  return (
    <table className={cn("table")}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={`${index}-${column.accessor}`}>
                {column.accessor === "status" && position === "employer" && item.status === "pending" ? (
                  // column.accessor === "status" 조건부를 달아둔 이유는 status가 없는 테이블이 있을수 있고 이를 반영해야 공용 컴포넌트 역할을 한다 생각해서 넣었습니다.
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
                      onClick={() => handleStatusChange(index, "approved")}
                    >
                      승인하기
                    </Button>
                  </div>
                ) : (
                  item[column.accessor]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
