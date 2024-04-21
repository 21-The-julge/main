import Registser from "./Register/Register";
import RegistseredMyShop from "./RegisteredMyShop/RegisteredMyshop";

interface RegisterdShopProps {
  myShopData: {
    item: {
      startsAt: string;
      workhour: number;
      hourlyPay: number;
      closed: boolean;
      id: string;
      shop: {
        item: {
          address1: string;
          imageUrl: string;
          name: string;
          originalHourlyPay: number;
        };
      };
    };
  }[];
}

export default function RegisterdShop({ myShopData }: RegisterdShopProps) {
  return myShopData ? <RegistseredMyShop myShopData={myShopData} /> : <Registser />;
}
