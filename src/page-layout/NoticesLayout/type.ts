type Sort = "time" | "pay" | "hour" | "shop" | "";

export interface FilterValue {
  address: string[];
  startsAtGte: string;
  hourlyPayGte: string;
  sort: Sort;
}
