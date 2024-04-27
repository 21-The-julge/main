import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";

import useGetAllNotices from "@/shared/hooks/useGetAllNotices";
import usePaginationProps from "@/shared/hooks/usePagination";

import { ROUTE, SORT } from "@/common/constants";

import Pagination from "@/shared/components/Pagination/Pagination";
import FilterBar from "../FilterBar";
import NoticeList from "../NoticeList";
import NoNotice from "../NoNotice";
import Skeleton from "../NoticesSkeleton";

import type { FilterValue } from "../../type";

import styles from "./AllNotices.module.scss";

const cn = classNames.bind(styles);

export default function AllNotices() {
  const router = useRouter();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({});

  const { data, error, isPending, isError } = useGetAllNotices({ limit: 6, ...router.query });

  const [currentPage, totalPages, setPage] = usePaginationProps({
    totalDataCount: data?.count ?? 0,
    itemsPageCount: 6,
  });

  const handleOpen = (state: boolean) => {
    setIsFilterOpen(state);
  };

  const handleFilter = (filter: Partial<FilterValue>) => {
    setPage(1);

    setFilters((prev) => ({
      ...prev,
      ...filter,
    }));

    router.push({
      pathname: ROUTE.HOME,
      query: { ...filters, ...filter },
    });
  };

  const handleSelect = (selected: string) => {
    const sort = SORT.map(({ value, option }) => (selected === option ? value : ""))
      .join("")
      .trim();

    setPage(1);

    setFilters((prev) => ({
      ...prev,
      sort,
    }));

    router.push({
      pathname: ROUTE.HOME,
      query: { ...filters, sort },
    });
  };

  useEffect(() => {
    const offset = (currentPage - 1) * 6;

    setFilters((prev) => ({
      ...prev,
      offset,
    }));

    router.push({
      pathname: ROUTE.HOME,
      query: { ...filters, offset },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (isPending) {
    return <Skeleton isAllNotice />;
  }

  if (isError) {
    <div>Error: {error?.message}</div>;
  }

  const items = data ? data.items.map((obj) => obj.item) : [];

  const posts = items.map((obj) => {
    const { id: noticeId, startsAt, workhour, shop, hourlyPay, closed } = obj;

    const { id: shopId, name, address1, imageUrl, originalHourlyPay } = shop.item;

    return { noticeId, shopId, startsAt, workhour, hourlyPay, closed, name, address1, imageUrl, originalHourlyPay };
  });

  return (
    <div className={cn("container")}>
      <FilterBar
        isOpen={isFilterOpen}
        onChange={handleSelect}
        onFilter={handleFilter}
        onOpen={() => handleOpen(true)}
        onClose={() => handleOpen(false)}
      />

      {posts.length === 0 ? <NoNotice /> : <NoticeList notices={posts} />}

      <Pagination currentPage={currentPage} totalPage={totalPages} onPageClick={setPage} />
    </div>
  );
}
