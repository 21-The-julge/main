import classNames from "classnames";
import styles from "./table.module.scss";
interface TableProps {
  columns: Array<{
    header: string;
    accessor: string; // 데이터 객체에서 해당 데이터를 어떻게 접근할지 정의
  }>;
  data: Array<any>; // 데이터 배열
}
const cn = classNames.bind(styles);
export default function Table({ columns, data }: TableProps) {
  return (
    <table className={cn(styles.table)}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={`${index}-${column.accessor}`}>{item[column.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
// api 따와서 데이터 정제하기
// table 모바일 css
// git pull
