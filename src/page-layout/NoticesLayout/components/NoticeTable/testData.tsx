// 더미 데이터들입니다!

// EmployeeData 변경 하기전
interface EmployeeTableData {
  name: string; // 상점 이름
  startsAt: string; // 근무 시작 시간
  workhour: number; // 근무 시간(시간 단위)
  originalHourlyPay: number; // 원래 시간당 급여
  status: "pending" | "accepted" | "rejected" | "canceled"; // 지원 상태
}

interface EmployeeDataForm {
  name: string;
  date: string;
  originalHourlyPay: number;
  status: string;
}

interface EmployerTableData {
  name: string; // 유저의 이름
  phone: string; // 유저의 전화번호
  bio: string; // 유저의 간략한 소개 또는 전문성 설명
  status: "pending" | "accepted" | "rejected" | "canceled"; // 지원 상태
}

interface TableHeader {
  header: string;
  accessor: string;
}

// Employer 컬럼 설정
const employerColumns: TableHeader[] = [
  { header: "이름", accessor: "name" },
  { header: "간략한 소개", accessor: "bio" },
  { header: "전화번호", accessor: "phone" },
  { header: "지원 상태", accessor: "status" },
];

export const employeeTableData: EmployeeDataForm[] = [
  {
    name: "에바네 한식❤️",
    date: "2023-07-26 15:00~17:00",
    originalHourlyPay: 10000,
    status: "pending",
  },
  {
    name: "에바네 한식❤️",
    date: "2023-07-26 15:00~01:00",
    originalHourlyPay: 10000,
    status: "pending",
  },
  {
    name: "와인 한 모금",
    date: "2023-07-27 15:00~18:00",
    originalHourlyPay: 40000,
    status: "pending",
  },
  {
    name: "내 가게 이름은 엄청 길어 내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어",
    date: "2024-04-15 15:00~03:00",
    originalHourlyPay: 200000000,
    status: "accepted",
  },
  {
    name: "에바 테스트중",
    date: "2023-07-20 15:00~02:00",
    originalHourlyPay: 10000,
    status: "rejected",
  },
  {
    name: "에바네 한식❤️",
    date: "2023-07-26 15:00~17:00",
    originalHourlyPay: 10000,
    status: "pending",
  },
  {
    name: "에바네 한식❤️",
    date: "2023-07-26 15:00~01:00",
    originalHourlyPay: 10000,
    status: "pending",
  },
  {
    name: "에바네 한식❤️",
    date: "2023-07-26 15:00~17:00",
    originalHourlyPay: 10000,
    status: "pending",
  },
  {
    name: "에바네 한식❤️",
    date: "2023-07-26 15:00~01:00",
    originalHourlyPay: 10000,
    status: "pending",
  },
  {
    name: "에바네 한식❤️",
    date: "2023-07-26 15:00~17:00",
    originalHourlyPay: 10000,
    status: "pending",
  },
  {
    name: "에바네 한식❤️",
    date: "2023-07-26 15:00~01:00",
    originalHourlyPay: 10000,
    status: "pending",
  },
  {
    name: "에바네 한식❤️",
    date: "2023-07-26 15:00~17:00",
    originalHourlyPay: 10000,
    status: "pending",
  },
  {
    name: "에바네 한식❤️",
    date: "2023-07-26 15:00~01:00",
    originalHourlyPay: 10000,
    status: "pending",
  },
  {
    name: "와인 한 모금",
    date: "2023-07-27 15:00~18:00",
    originalHourlyPay: 40000,
    status: "pending",
  },
  {
    name: "내 가게 이름은 엄청 길어 내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어",
    date: "2024-04-15 15:00~03:00",
    originalHourlyPay: 200000000,
    status: "accepted",
  },
  {
    name: "에바 테스트중",
    date: "2023-07-20 15:00~02:00",
    originalHourlyPay: 10000,
    status: "rejected",
  },
  {
    name: "와인 한 모금",
    date: "2023-07-27 15:00~18:00",
    originalHourlyPay: 40000,
    status: "pending",
  },
  {
    name: "내 가게 이름은 엄청 길어 내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어",
    date: "2024-04-15 15:00~03:00",
    originalHourlyPay: 200000000,
    status: "accepted",
  },
  {
    name: "에바 테스트중",
    date: "2023-07-20 15:00~02:00",
    originalHourlyPay: 10000,
    status: "rejected",
  },
  {
    name: "와인 한 모금",
    date: "2023-07-27 15:00~18:00",
    originalHourlyPay: 40000,
    status: "pending",
  },
  {
    name: "내 가게 이름은 엄청 길어 내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어내 가게 이름은 엄청 길어",
    date: "2024-04-15 15:00~03:00",
    originalHourlyPay: 200000000,
    status: "accepted",
  },
  {
    name: "에바 테스트중",
    date: "2023-07-20 15:00~02:00",
    originalHourlyPay: 10000,
    status: "rejected",
  },
];

export const employersData: EmployerTableData[] = [
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
