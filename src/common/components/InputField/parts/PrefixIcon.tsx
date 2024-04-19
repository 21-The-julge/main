// import classNames from "classnames/bind";
// import styles from "./PrefixIcon.module.scss";

import SearchIcon from "@/images/ic_search.svg";

// const cn = classNames.bind(styles);

interface PrefixIconProp {
  prefix: string;
}

export default function PrefixIcon({ prefix }: PrefixIconProp) {
  return prefix === "search" && <SearchIcon width="20" height="20" stroke="#A4A1AA" />;
}
