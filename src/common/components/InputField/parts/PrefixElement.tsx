import SearchIcon from "@/images/ic_search.svg";

interface PrefixElementProp {
  element: string;
}

export default function PrefixElement({ element }: PrefixElementProp) {
  return element === "search" && <SearchIcon width="20" height="20" stroke="#A4A1AA" />;
}
