import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";
import useGetAllNotices from "@/shared/hooks/useGetAllNotices";

import { ROUTE } from "@/common/constants";

import FilterBar from "../FilterBar";
import NoticeList from "../NoticeList";
import NoNotice from "../NoNotice";
import Skeleton from "../AllNoticesSkeleton";

import type { FilterValue } from "../../type";

import styles from "./AllNotices.module.scss";

const cn = classNames.bind(styles);

export default function AllNotices() {
  const router = useRouter();

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

    router.push({
      pathname: ROUTE.NOTICES,
      query: { ...filter, ...filters },
    });
  };

  const handleSelect = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    setSelected(value);

    setFilters((prev) => ({
      ...prev,
      sort: value,
    }));

    router.push({
      pathname: ROUTE.NOTICES,
      query: { ...filters, sort: value },
    });
  };

  const { data, error, isPending, isError } = useGetAllNotices(offset * 6, router.query);

  if (isPending) {
    return <Skeleton />;
  }

  if (isError) {
    <div>Error: {error?.message}</div>;
  }

  const items = data ? data.items.map((obj) => obj.item) : [];

  const posts = items.map((obj) => {
    const { id, startsAt, workhour, shop, hourlyPay, closed } = obj;

    const { name, address1, imageUrl, originalHourlyPay } = shop.item;

    return { id, startsAt, workhour, hourlyPay, closed, name, address1, imageUrl, originalHourlyPay };
  });

  return (
    <div>
      <FilterBar
        isOpen={isFilterOpen}
        value={selected}
        onChange={handleSelect}
        onFilter={handleFilter}
        onOpen={() => handleOpen(true)}
        onClose={() => handleOpen(false)}
      />

      {posts.length === 0 ? <NoNotice /> : <NoticeList notices={posts} />}

      <div className={cn("buttons")}>
        <button type="button" onClick={() => setOffset(offset - 1)} disabled={offset === 0}>
          이전
        </button>
        <button type="button" onClick={() => setOffset(offset + 1)} disabled={!data?.hasNext}>
          다음
        </button>
      </div>
    </div>
  );
}
