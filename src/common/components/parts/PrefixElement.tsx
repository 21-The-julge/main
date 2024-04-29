import IcSearch from "@/images/ic_search.svg";

interface PrefixElementProps {
  element: "search";
}

export default function PrefixElement({ element }: PrefixElementProps) {
  return element === "search" && <IcSearch width="20" height="20" stroke="#A4A1AA" />;
}
