import { SORT_VALUE } from "@/common/constants";

interface ShopItem {
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
  item: ShopItem;
  href?: string;
}

interface CurrentUserApplication {
  item?: {
    id: string;
    status: "pending" | "accepted" | "rejected" | "canceled";
    createdAt: string;
  };
}

interface ApplicationWrapper {
  item: Application;
  links: Link[];
}

interface Application {
  id: string;
  status: string;
  createdAt: string;
  user: UserWrapper;
  shop: ShopWrapper;
  notice: NoticeWrapper;
}

interface UserWrapper {
  item: User;
  href: string;
}

interface User {
  id: string;
  email: string;
  type: "employer" | "employee";
  name?: string;
  phone?: string;
  address?: string;
  bio?: string;
}

interface ShopWrapper {
  item: Shop;
  href: string;
}

interface Shop {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

interface NoticeWrapper {
  item: Notice;
  href: string;
}

interface Notice {
  id: string;
  hourlyPay: number;
  description: string;
  startsAt: string;
  workhour: number;
  closed: boolean;
}

export interface GetShopApplicationsDataType {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: ApplicationWrapper[];
  links: Link[];
}

export interface GetSpecificShopNoticeType {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: Shop;
  currentUserApplication?: CurrentUserApplication | null;
}
export interface FilterValue {
  address: string[];
  startsAtGte: string;
  hourlyPayGte: string;
  sort: (typeof SORT_VALUE)[number];
}

interface Link {
  rel: string;
  description: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  href: string;
  body?: {
    status: "pending" | "accepted" | "rejected" | "canceled";
  };
}

interface ApplicationItem {
  id: string;
  status: "pending" | "accepted" | "rejected" | "canceled";
  createdAt: string;
  user: {
    item: User;
    href: string;
  };
  shop: {
    item: ShopItem;
    href: string;
  };
  notice: {
    item: Notice;
    href: string;
  };
  links: Link[];
}

export interface ApplicationListType {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: {
    item: ApplicationItem;
    links: Link[];
  }[];
  links: Link[];
}
