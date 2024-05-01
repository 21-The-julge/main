import { useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";

import useGetAllNotices from "@/shared/hooks/useGetAllNotices";
import usePaginationProps from "@/shared/hooks/usePagination";

import { SORT } from "@/common/constants";

import Pagination from "@/shared/components/Pagination/Pagination";
import FilterBar from "../FilterBar";
import NoticeList from "../NoticeList";
import NoNotice from "../NoNotice";
import Skeleton from "../NoticesSkeleton";

import type { FilterValue } from "../../type";

import styles from "./AllNotices.module.scss";

const cn = classNames.bind(styles);

const NUMBER_PER_PAGE = 6;

export default function AllNotices() {
  const router = useRouter();
  const { pathname, query } = router;

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState(query);

  const { data, error, isPending, isError } = useGetAllNotices({ limit: NUMBER_PER_PAGE, ...router.query });

  const [currentPage, totalPages, setPage] = usePaginationProps({
    totalDataCount: data?.count ?? 0,
    itemsPageCount: NUMBER_PER_PAGE,
  });

  const handleOpen = (state: boolean) => {
    setIsFilterOpen(state);
  };

  const handlePageClick = (page: number) => {
    setPage(page);

    const offset = (page - 1) * NUMBER_PER_PAGE;

    setFilters((prev) => ({
      ...prev,
      offset: `${offset}`,
    }));

    router.push({
      pathname,
      query: { ...filters, offset },
    });
  };

  const handleFilter = (filter: Partial<FilterValue>) => {
    setPage(1);

    setFilters((prev) => ({
      ...prev,
      ...filter,
    }));

    router.push({
      pathname,
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
      pathname,
      query: { ...filters, sort },
    });
  };

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
        router={router}
        isOpen={isFilterOpen}
        onChange={handleSelect}
        onFilter={handleFilter}
        onOpen={() => handleOpen(true)}
        onClose={() => handleOpen(false)}
      />

      {posts.length === 0 ? (
        <NoNotice />
      ) : (
        <div className={cn("notices")}>
          <NoticeList notices={posts} />
          <Pagination currentPage={currentPage} totalPage={totalPages} onPageClick={handlePageClick} />
        </div>
      )}
    </div>
  );
}
