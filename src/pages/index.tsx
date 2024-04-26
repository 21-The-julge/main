import RootLayout from "@/shared/components/RootLayout/RootLayout";
import getAuth from "@/shared/hooks/getAuth";

const key = {
  email: "1234@124.com",
  password: "1234qwer",
};
export default function Home() {
  const { mutate } = getAuth(key);

  const handleLogin = () => {
    mutate();
  };
  return (
    <RootLayout>
      메인페이지
      <button type="button" onClick={handleLogin}>
        로그인하기
      </button>
    </RootLayout>
  );
}
