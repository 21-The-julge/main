import classNames from "classnames/bind";
import { SORT_OPTIONS } from "@/common/constants";
import { Button, Dropdown } from "@/common/components";
import Filter from "../Filter";

import type { FilterValue } from "../../type";

import styles from "./FilterBar.module.scss";

const cn = classNames.bind(styles);

interface FilterBarProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onChange: (option: string) => void;
  onFilter: (filter: Omit<FilterValue, "sort">) => void;
}

export default function FilterBar({ isOpen, onChange, onFilter, onOpen, onClose }: FilterBarProps) {
  return (
    <div className={cn("container")}>
      <h2 className={cn("heading")}>전체 공고</h2>

      <div className={cn("filterBar")}>
        <Dropdown
          onOptionClick={onChange}
          name="sort"
          size="sm"
          color="gray"
          options={SORT_OPTIONS}
          placeholder="마감임박순"
          className={cn("dropdown", "item")}
        />

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
