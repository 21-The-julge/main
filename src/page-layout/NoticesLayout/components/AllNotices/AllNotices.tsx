import { ChangeEventHandler } from "react";
import classNames from "classnames/bind";
import { Button } from "@/common/components";
import { Post } from "@/shared/components";
import type { FilterValue } from "@/pages/notices";

import Filter from "../Filter";

import styles from "./AllNotices.module.scss";

const cn = classNames.bind(styles);

interface Notice {
  id: string;
  startsAt: string;
  workhour: number;
  hourlyPay: number;
  closed: boolean;
  name: string;
  address1: string;
  imageUrl: string;
  originalHourlyPay: number;
}

interface AllNoticesProps {
  notices: Notice[];
  isOpen: boolean;
  value: string;
  onOpen: () => void;
  onClose: () => void;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  onFilter: (filter: Omit<FilterValue, "sort">) => void;
}

export default function AllNotices({ notices, isOpen, value, onOpen, onClose, onChange, onFilter }: AllNoticesProps) {
  return (
    <div>
      <div className={cn("header")}>
        <h2 className={cn("heading")}>전체 공고</h2>

        <div className={cn("filterBar")}>
          <div className={cn("filterItem")}>
            <select name="sort" value={value} onChange={onChange}>
              <option value="time">마감임박순</option>
              <option value="pay">시급많은순</option>
              <option value="hour">시간적은순</option>
              <option value="shop">가나다순</option>
            </select>
          </div>

          <div className={cn("filterItem")}>
            <Button type="button" size="small" className={cn("filterButton")} onClick={onOpen}>
              상세필터
            </Button>
          </div>
        </div>

        {isOpen && <Filter onClose={onClose} onFilter={onFilter} className={cn("filter")} />}
      </div>

      <div className={cn("postContainer")}>
        {notices.map((notice) => {
          const { id, imageUrl, startsAt, workhour, hourlyPay, closed, name, address1, originalHourlyPay } = notice;

          return (
            <div key={id}>
              <Post
                imageUrl={imageUrl}
                startsAt={startsAt}
                workhour={workhour}
                hourlyPay={hourlyPay}
                closed={closed}
                name={name}
                address={address1}
                originalHourlyPay={originalHourlyPay}
                className={cn("post")}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
