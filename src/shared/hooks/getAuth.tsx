import { useState, useEffect } from "react";

export default function GetAuth() {
  const [token, setToken] = useState<string | null>(null);
  const type: "employer" | "employee" = "employer";

  useEffect(() => {
    const newToken = window.sessionStorage.getItem("token");
    setToken(newToken);

    const updateToken = () => {
      const updatedToken = window.sessionStorage.getItem("token");
      setToken(updatedToken);
    };

    window.addEventListener("storage", updateToken);

    return () => {
      window.removeEventListener("storage", updateToken);
    };
  }, []);

  const isLoggedIn = Boolean(token);

  const handleLogout = () => {
    sessionStorage.clear();
  };

  return { isLoggedIn, type, handleLogout };
}
