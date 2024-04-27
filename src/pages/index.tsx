import RootLayout from "@/shared/components/RootLayout/RootLayout";
import getUserData from "@/shared/hooks//getUserData";
import usePostSignIn from "@/shared/apis/api-hooks/useAuthentications";

const key = {
  email: "1234@124.com",
  password: "1234qwer",
};

const key2 = {
  email: "1222@124.com",
  password: "1234qwer",
};

export default function Home() {
  const { mutate: login } = usePostSignIn(key);
  const { mutate: login2 } = usePostSignIn(key2);
  const { setShopIdFromData } = getUserData();

  const handleLogin = () => {
    login();
  };

  const handleLogin2 = () => {
    login2();
    setShopIdFromData();
  };

  return (
    <RootLayout>
      메인페이지
      <button type="button" onClick={handleLogin}>
        알바로 로그인하기
      </button>
      <button type="button" onClick={handleLogin2}>
        사장으로 로그인하기
      </button>
    </RootLayout>
  );
}
