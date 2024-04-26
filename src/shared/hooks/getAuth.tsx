import usePostSignIn from "../apis/api-hooks/useAuthentications";
import useUserDataStore from "./useUserDataStore";
import { PostSignInParams } from "../apis/apiType";

export default function GetAuth(bodyData: PostSignInParams) {
  const { error, isLoading, mutate } = usePostSignIn(bodyData);
  const { token, userId, type, isLoggedIn, resetAll } = useUserDataStore();

  const handleLogout = () => {
    resetAll();
  };

  return { isLoggedIn, error, isLoading, mutate, token, userId, type, handleLogout };
}
