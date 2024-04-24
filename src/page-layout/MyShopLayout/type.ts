export interface RegisterdShop {
  lastRef: (node?: Element | null | undefined) => void;
  myShopData: ApiData[];
}

export interface ApiData {
  item: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
    closed: boolean;
    imageUrl?: string;
    name?: string;
    address1?: string;
    originalHourlyPay?: number;
  };
}
