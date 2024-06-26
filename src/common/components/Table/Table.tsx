import classNames from "classnames/bind";
import { ReactNode } from "react";
import styles from "./table.module.scss";

interface TableProps {
  columns: {
    header: string;
    accessor: string;
  }[];
  data: { id?: string; [key: string]: string | number | ReactNode }[];
}
const cn = classNames.bind(styles);

export default function Table({ columns, data }: TableProps) {
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
        {data.map((item, index) => (
          <tr key={item.id || index}>
            {columns.map((column) => (
              <td key={`${item.id || index}-${column.accessor}`}>{item[column.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
