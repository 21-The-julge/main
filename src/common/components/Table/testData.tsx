export interface EmployeeData {
  name: string; // 상점 이름
  startsAt: string; // 근무 시작 시간
  workhour: number; // 근무 시간(시간 단위)
  originalHourlyPay: number; // 원래 시간당 급여
  status: "pending" | "accepted" | "rejected" | "canceled"; // 지원 상태
  // href: string // 상점 상세 정보에 접근하는 링크
}

interface EmployerData {
  name: string; // 유저의 이름
  phone: string; // 유저의 전화번호
  bio: string; // 유저의 간략한 소개 또는 전문성 설명
  status: "pending" | "accepted" | "rejected" | "canceled"; // 지원 상태
}

interface employ {
  header: string;
  accessor: string;
}
// Employee 컬럼 설정
export const employeeColumns: employ[] = [
  { header: "상점 이름", accessor: "name" },
  { header: "근무 시작 시간", accessor: "startsAt" },
  { header: "근무 시간(시간)", accessor: "workhour" },
  { header: "시간당 급여", accessor: "originalHourlyPay" },
  { header: "지원 상태", accessor: "status" },
];

// Employer 컬럼 설정
export const employerColumns: employ[] = [
  { header: "이름", accessor: "name" },
  { header: "간략한 소개", accessor: "bio" },
  { header: "전화번호", accessor: "phone" },
  { header: "지원 상태", accessor: "status" },
];

export const employees: EmployeeData[] = [
  {
    name: "강남점",
    startsAt: "2024-04-14T09:00:00",
    workhour: 8,
    originalHourlyPay: 12000,
    status: "accepted",
  },
  {
    name: "홍대점",
    startsAt: "2024-04-15T10:00:00",
    workhour: 6,
    originalHourlyPay: 11500,
    status: "pending",
  },
  {
    name: "잠실점",
    startsAt: "2024-04-14T08:00:00",
    workhour: 5,
    originalHourlyPay: 11000,
    status: "rejected",
  },
  {
    name: "부산점",
    startsAt: "2024-04-16T11:00:00",
    workhour: 9,
    originalHourlyPay: 13000,
    status: "accepted",
  },
  {
    name: "대구점",
    startsAt: "2024-04-14T07:30:00",
    workhour: 7,
    originalHourlyPay: 9000,
    status: "accepted",
  },
];

export const employers: EmployerData[] = [
  {
    name: "홍길동",
    phone: "010-1234-5678",
    bio: "다년간의 관리 경험을 가진 중견 관리자 다년간의 관리 경험을 가진 중견 관리자다년간의 관리 경험을 가진 중견 관리자다년간의 관리 경험을 가진 중견 관리자다년간의 관리 경험을 가진 중견 관리자",
    status: "pending",
  },
  {
    name: "김철수",
    phone: "010-9876-5432",
    bio: "신입 사업자로서 새로운 기회를 모색중",
    status: "accepted",
  },
  {
    name: "이영희",
    phone: "010-5555-3333",
    bio: "고객 서비스에 특화된 경력을 보유",
    status: "rejected",
  },
  {
    name: "박준혁",
    phone: "010-2222-4444",
    bio: "프랜차이즈 관리 전문가",
    status: "accepted",
  },
  {
    name: "최유리",
    phone: "010-6666-7777",
    bio: "마케팅과 광고 전문으로 10년 경력",
    status: "pending",
  },
];
