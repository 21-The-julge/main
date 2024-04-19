interface Item {
  id: string;
  createdAt: string;
  result: "accepted" | "rejected";
  read: boolean;
  application: {
    item: {
      id: string;
      status: "pending" | "accepted" | "rejected";
    };
    href: string;
  };
  shop: {
    item: {
      id: string;
      name: string;
      category: string;
      address1: string;
      address2: string;
      description: string;
      imageUrl: string;
      originalHourlyPay: number;
    };
    href: string;
  };
  notice: {
    item: {
      id: string;
      hourlyPay: number;
      description: string;
      startsAt: string;
      workhour: number;
      closed: boolean;
    };
    href: string;
  };
  links: [];
}

export interface AlertResponseData {
  offset: number;
  limit: number;
  count: number; // 전체 개수
  hasNext: boolean; // 다음 내용 존재 여부
  items: {
    item: Item;
    links: [];
  }[];
}
