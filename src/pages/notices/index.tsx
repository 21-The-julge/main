import { useState, ChangeEvent } from "react";
import AllNotices from "@/page-layout/NoticesLayout/components";

import useGetAllNotices from "@/shared/hooks/useGetAllNotices";

import classNames from "classnames/bind";
import styles from "./notices.module.scss";

const cn = classNames.bind(styles);

type Sort = "time" | "pay" | "hour" | "shop" | "";

export interface FilterValue {
  address: string[];
  startsAtGte: string;
  hourlyPayGte: string;
  sort: Sort;
}

export default function NoticesPage() {
  const [offset, setOffset] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({});
  const [selected, setSelected] = useState("");

  const handleOpen = (state: boolean) => {
    setIsFilterOpen(state);
  };

  const handleFilter = (filter: Partial<FilterValue>) => {
    setFilters((prev) => ({
      ...prev,
      ...filter,
    }));
  };

  const handleSelect = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    setSelected(value);
    setFilters((prev) => ({
      ...prev,
      sort: value,
    }));
  };

  const { data, error, isPending, isError } = useGetAllNotices(offset * 6, filters);

  console.log(data);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  if (!data) {
    return <div>검색결과가 없습니다.</div>;
  }

  const items = data.items.map((obj) => obj.item);

  const posts = items.map((obj) => {
    const { id, startsAt, workhour, shop, hourlyPay, closed } = obj;

    const { name, address1, imageUrl, originalHourlyPay } = shop.item;

    return { id, startsAt, workhour, hourlyPay, closed, name, address1, imageUrl, originalHourlyPay };
  });

  return (
    <div className={cn("container")}>
      <div className={cn("allNotices")}>
        <AllNotices
          notices={posts}
          isOpen={isFilterOpen}
          value={selected}
          onChange={handleSelect}
          onFilter={handleFilter}
          onOpen={() => handleOpen(true)}
          onClose={() => handleOpen(false)}
        />

        <div className={cn("buttons")}>
          <button type="button" onClick={() => setOffset(offset - 1)} disabled={offset === 0}>
            이전
          </button>
          <button type="button" onClick={() => setOffset(offset + 1)} disabled={!data?.hasNext}>
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
