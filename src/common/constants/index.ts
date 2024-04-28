export const CATEGORIES = ["한식", "중식", "일식", "양식", "분식", "카페", "편의점", "기타"] as const;

export const ADDRESSES = [
  "서울시 종로구",
  "서울시 중구",
  "서울시 용산구",
  "서울시 성동구",
  "서울시 광진구",
  "서울시 동대문구",
  "서울시 중랑구",
  "서울시 성북구",
  "서울시 강북구",
  "서울시 도봉구",
  "서울시 노원구",
  "서울시 은평구",
  "서울시 서대문구",
  "서울시 마포구",
  "서울시 양천구",
  "서울시 강서구",
  "서울시 구로구",
  "서울시 금천구",
  "서울시 영등포구",
  "서울시 동작구",
  "서울시 관악구",
  "서울시 서초구",
  "서울시 강남구",
  "서울시 송파구",
  "서울시 강동구",
] as const;

export const PLACEHOLDERS = {
  SEARCH: "가게 이름으로 찾아보세요",
  EMAIL: "이메일을 입력해주세요",
  PASSWORD: "비밀번호를 8자리 이상으로 입력해주세요",
  NAME: "식당 이름을 입력해주세요",
  DETAIL_ADDRESS: "상세주소를 입력해주세요",
  DESCRIPTION: "식당 설명을 입력해주세요",
} as const;

export const MESSAGES = {
  SUCCESS: "등록이 완료되었습니다.",
  FAIL: "등록이 실패되었습니다.",
  EDIT: "수정이 완료되었습니다.",
  PROFILE: "내 프로필을 먼저 등록해주세요.",
  CANCELLED: "신청을 취소하시겠어요?",

  ACCEPT: "신청을 승인하시겠어요?",
  REJECT: "신청을 거절하시겠어요?",
  NOTIFICATION: "알림이 없습니다.",

  AUTH_ALERT_MESSAGE: {
    SUCCESS: "가입이 완료되었습니다!",
  },
} as const;

export const ERROR_MESSAGE = {
  EMAIL: {
    EMPTY: "이메일을 입력해 주세요.",
    INVALID: "이메일 형식으로 작성해 주세요.",
    INCORRECT: "잘못된 이메일입니다.",
  },
  PASSWORD: {
    SHORT: "8자 이상 입력해 주세요.",
    INCORRECT: "비밀번호가 일치하지 않습니다.",
  },
} as const;

export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/sign-up",
  SEARCH: "/search",
  NOTICES_DETAIL: "/notice-detail",
  MY_NOTICE_DETAIL: "/my-notice-detail",
} as const;

export const END_POINT = {
  NOTICES: "/notices",
} as const;

export const SORT_OPTIONS = ["마감임박순", "시급많은순", "시간적은순", "가나다순"];

export const SORT_VALUE = ["time", "pay", "hour", "shop"] as const;

export const SORT = SORT_OPTIONS.map((option, index) => ({
  value: SORT_VALUE[index],
  option,
}));
