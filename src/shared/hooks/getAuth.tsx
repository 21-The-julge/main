import usePostSignIn from "../apis/api-hooks/useAuthentications";
import useUserDataStore from "./useUserDataStore";
import { PostSignInParams } from "../apis/apiType";

export default function GetAuth(bodyData: PostSignInParams) {
  const { error, mutate } = usePostSignIn(bodyData);
  const { token, userId, type, isLoggedIn, resetAll } = useUserDataStore();

  const handleLogout = () => {
    resetAll();
  };

  return { isLoggedIn, error, mutate, token, userId, type, handleLogout };
}
