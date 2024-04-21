interface ItemDetail {
  id: string;
  status: "pending" | "accepted" | "rejected";
}

interface Application {
  item: ItemDetail;
  href: string;
}

interface ShopDetail {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

interface Shop {
  item: ShopDetail;
  href: string;
}

interface NoticeDetail {
  id: string;
  hourlyPay: number;
  description: string;
  startsAt: string;
  workhour: number;
  closed: boolean;
}

interface Notice {
  item: NoticeDetail;
  href: string;
}

export interface Item {
  id: string;
  createdAt: string;
  result: "accepted" | "rejected";
  read: boolean;
  application: Application;
  shop: Shop;
  notice: Notice;
  links: [];
}

export interface AlertResponseData {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: Item[];
  links: [];
}
