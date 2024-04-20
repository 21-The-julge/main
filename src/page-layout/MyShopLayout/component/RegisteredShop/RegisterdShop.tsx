import { useEffect, useState } from "react";
import axiosInstance from "@/pages/api/axiosInstance";
import Registser from "./Register/Register";
import RegistseredMyShop from "./RegisteredMyShop/RegisteredMyshop";

export default function RegisterdShop() {
  const [apiData, setApiData] = useState([]);
  const getMyShopInfo = async () => {
    try {
      const response = await axiosInstance.get("/shops/ae78c3af-a075-4586-bee2-21c8da59d6b2/notices");
      setApiData(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyShopInfo();
  }, []);

  return apiData ? <RegistseredMyShop myShopData={apiData} /> : <Registser />;
}
