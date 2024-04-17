export interface ApiResponse {
  item: {
    token: string; // JWT 토큰
    user: {
      item: {
        id: string;
        email: string;
        type: "employer" | "employee"; // 유니언 타입으로 'employer' 또는 'employee'
        name?: string; // optional
        phone?: string; // optional
        address?: string; // optional
        bio?: string; // optional
      };
      href: string;
    };
  };
}
