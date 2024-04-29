import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/shared/apis/axiosInstance";

import { CATEGORIES, END_POINT } from "@/common/constants";

import type { FilterValue } from "@/page-layout/NoticesLayout/type";

type Category = (typeof CATEGORIES)[number];

interface Shop {
  id: string;
  name: string;
  category: Category;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

interface NoticeItem {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: {
    item: Shop;
    href: string;
  };
}

interface NoticeLinks {
  rel: string;
  description: string;
  method: string;
  href: string;
}

interface NoticeResponse {
  offset: number;
  limit: number;
  address: string[];
  count: number;
  hasNext: boolean;
  items: { item: NoticeItem; links: NoticeLinks[] }[];
  links: NoticeLinks[];
}

interface Query extends Partial<FilterValue> {
  limit?: number;
  offset?: number;
}

const fetchNotices = async (query: Query): Promise<NoticeResponse> => {
  const res = await axiosInstance.get(END_POINT.NOTICES, {
    params: { ...query },
    paramsSerializer: {
      indexes: null,
    },
  });

  const result = res.data;

  return result;
};

const useGetAllNotices = (query: Query) => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["notices", query],
    queryFn: () => fetchNotices(query),
    placeholderData: keepPreviousData,
  });

  return { data, error, isPending, isError };
};

export default useGetAllNotices;
