import { useState } from "react";
import Registser from "./Register/Register";
import RegistseredMyShop from "./RegisteredMyShop/RegisteredMyshop";

interface RegisterdShopProps {
  myShopData:
    | {
        item: {
          id: string;
        };
      }[]
    | null;
}

export default function RegisterdShop({ myShopData }: RegisterdShopProps) {
  const [apiData, setApiData] = useState<RegisterdShopProps["myShopData"]>(myShopData);

  return apiData ? <RegistseredMyShop myShopData={myShopData} /> : <Registser />;
}
