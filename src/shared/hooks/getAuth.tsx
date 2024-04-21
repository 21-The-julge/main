import { useState, useEffect } from "react";

export default function GetAuth() {
  const [token, setToken] = useState<string | null>(null);
  const type: "employer" | "employee" = "employer";

  const updateToken = () => {
    const updatedToken = window.sessionStorage.getItem("token");
    setToken(updatedToken);
  };

  useEffect(() => {
    updateToken();
  }, []);

  const isLoggedIn = Boolean(token);

  const handleLogout = () => {
    sessionStorage.clear();
  };

  return { isLoggedIn, type, handleLogout };
}
