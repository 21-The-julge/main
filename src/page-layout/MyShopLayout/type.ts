export interface RegisterdShop {
  lastRef: (node?: Element | null | undefined) => void;
  noticeData?: {
    items: ApiData[];
  };
}

export interface ApiData {
  item: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    closed: boolean;
    imageUrl: string;
  };
}

export interface Item extends CommonData {
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  closed: boolean;
}

export interface PostProps extends Item {
  address?: string;
}
export interface ShopData extends CommonData {
  category: string;
}

export interface CommonData {
  id?: string;
  description?: string;
  name?: string;
  address1?: string;
  imageUrl?: string;
  originalHourlyPay?: number;
}
