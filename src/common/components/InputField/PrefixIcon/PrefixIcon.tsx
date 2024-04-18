// import styles from "./PrefixIcon.module.scss";
import SearchIcon from "@/images/ic_search.svg";

interface PrefixIconProp {
  prefix: string;
}

export default function PrefixIcon({ prefix }: PrefixIconProp) {
  return prefix === "search" && <SearchIcon width={20} height={20} />;
}
