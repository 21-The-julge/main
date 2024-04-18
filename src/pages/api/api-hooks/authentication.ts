import { PostData } from "./apiUtill";

interface User {
  item: {
    id: string;
    email: string;
    type: string;
  };
  href: string;
}

interface Response {
  item: {
    token: string;
    user: User;
  };
  links: [];
}

export default async function PostSignIn(url: string, data: object) {
  const { response, error, isLoading } = await PostData(url, data);

  if (response) {
    const responseItem: Response = response;
    const { token } = responseItem.item;
    const { id } = responseItem.item.user.item;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("uid", id);
  }

  return { response, error, isLoading };
}
