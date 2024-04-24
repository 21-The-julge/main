import { ChangeEventHandler } from "react";
import classNames from "classnames/bind";

import { Button } from "@/common/components";
import Filter from "../Filter";

import type { FilterValue } from "../../type";

import styles from "./FilterBar.module.scss";

const cn = classNames.bind(styles);

interface FilterBarProps {
  isOpen: boolean;
  value: string;
  onOpen: () => void;
  onClose: () => void;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  onFilter: (filter: Omit<FilterValue, "sort">) => void;
}

export default function FilterBar({ isOpen, value, onChange, onFilter, onOpen, onClose }: FilterBarProps) {
  return (
    <div className={cn("container")}>
      <h2 className={cn("heading")}>전체 공고</h2>

      <div className={cn("filterBar")}>
        <div className={cn("item")}>
          <select name="sort" value={value} onChange={onChange}>
            <option value="time">마감임박순</option>
            <option value="pay">시급많은순</option>
            <option value="hour">시간적은순</option>
            <option value="shop">가나다순</option>
          </select>
        </div>

        <div className={cn("item")}>
          <Button type="button" size="small" className={cn("button")} onClick={onOpen}>
            상세필터
          </Button>
        </div>
      </div>

      {isOpen && <Filter onClose={onClose} onFilter={onFilter} className={cn("filter")} />}
    </div>
  );
}
