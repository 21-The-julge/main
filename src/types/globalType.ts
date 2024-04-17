export interface LoginPostToken {
  item: {
    token: string; // JWT 토큰
    user: {
      item: {
        id: string;
        email: string;
        type: "employer" | "employee";
        name?: string;
        phone?: string;
        address?: string;
        bio?: string;
      };
      href: string;
    };
  };
}
// 공고에서 사용되는 공통 인터페이스
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

interface NoticeItem {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop?: ShopItem;
}
//각 API 요청에 맞는 인터페이스 정의

interface GetNotices {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  address: string[];
  keyword?: string;
  items: Array<{
    item: NoticeItem & { shop: { item: ShopItem; href: string } };
  }>;
}
