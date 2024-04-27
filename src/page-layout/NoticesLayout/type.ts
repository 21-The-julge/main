import { SORT_VALUE } from "@/common/constants";

export interface FilterValue {
  address: string[];
  startsAtGte: string;
  hourlyPayGte: string;
  sort: typeof SORT_VALUE;
}
