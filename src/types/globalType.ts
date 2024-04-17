// 공통 인터페이스 정의
interface Link {
  rel: string;
  description: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  href: string;
}

interface BasicUser {
  id: string;
  email: string;
  type: "employer" | "employee";
}
interface User extends BasicUser {
  name?: string;
  phone?: string;
  address?: string;
  bio?: string;
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

interface Notice {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
}

interface NoticeItem extends Notice {
  shop: Shop;
  href: string;
}

interface Application {
  id: string;
  status: "pending" | "accepted" | "rejected" | "canceled";
  createdAt: string;
}

interface Notification {
  id: string;
  createdAt: string;
  result: "accepted" | "rejected";
  read: boolean;
}

interface Pagination {
  offset: number; // 현재 페이지의 시작 인덱스
  limit: number; // 페이지 당 표시할 항목의 수
  count: number; // 전체 항목 수
  hasNext: boolean; // 다음 페이지 존재 여부
}

// 인증

// 로그인
interface AuthLoginPost {
  item: {
    token: string; // jwt 토큰 decode하면 payload에 userId 활용 가능 (참고)
    user: {
      item: User;
      href: string;
    };
  };
  links: Link[];
}

// 유저 (User)

// 회원가입
interface UserPostCreate {
  item: BasicUser;
  links: Link[];
}

// 내 정보 조회 및 내 정보 수정
interface UserGetDetailPutUpdate {
  item: User & { shop?: Shop | null };
  links: Link[];
}

// 가게

// 가게 정보 등록 조회 및 수정
interface ShopAPI {
  item: Shop & { user: User };
  links: Link[];
}

// 공고

// 공고 조회

interface NoticeGetList extends Pagination {
  address: string[]; // 검색에 사용할 주소 필터
  keyword?: string; // 검색 키워드 (선택적)
  items: Array<{
    item: NoticeItem;
    links: Link[];
  }>;
  links: Link[];
}
// 가게 공고 목록 조회

interface NoticeGetShopList extends Pagination {
  items: Array<{
    item: Notice; // 'shop' 속성이 제외된 Notice 타입
    links: Link[];
  }>;
  links: Link[];
}

//가게 공고 등록
interface NoticePostCreate {
  item: NoticeItem;
  links: Link[];
}

// 가게의 특정 공고 조회

interface NoticeGetDetail {
  item: NoticeItem & {
    currentUserApplication?: {
      item: Application;
    };
  };
  links: Link[];
}

// 가게의 특정 공고 수정

interface NoticePutUpdate {
  item: NoticeItem;
  links: Link[];
}

// 지원 (Application)
interface DetailApplication extends Application {
  user: {
    item: User;
    href: string;
  };
  shop: {
    item: Shop;
    href: string;
  };
  notice: {
    item: Notice;
    href: string;
  };
}

// 가게의 특정 공고의 지원 목록 조회
interface ApplicationList extends Pagination {
  items: [{ item: ApplicationAction; links: Link[] }];
  links: Link[];
}

// 가게의 특정 공고 지원 등록
// 가게의 특정 공고 지원 승인, 거절 또는 취소
interface ApplicationAction {
  item: DetailApplication;
  links: Link[];
}

// 유저의 지원 목록
interface UserApplicationList extends Pagination {
  items: [{ item: Omit<DetailApplication, "user">; links: Link[] }];
  links: Link[];
}

// 유저의 알림 목록 조회
interface AlertGetUserList extends Pagination {
  items: [{ item: ApplicationAction; links: Link[] }];
}
// 알림 읽음 처리
