import Registser from "./Register/Register";
import RegistseredMyShop from "./RegisteredMyShop/RegisteredMyshop";

interface RegisterdShopProps {
  lastRef: (node?: Element | null | undefined) => void;
  myShopData: {
    item: {
      id: string;
      hourlyPay: number;
      startsAt: string;
      workhour: number;
      description: string;
      closed: boolean;
      // 추가
      imageUrl?: string;
      name?: string;
      address1?: string;
      originalHourlyPay?: number;
    };
  }[];
}

export default function RegisterdShop({ lastRef, myShopData }: RegisterdShopProps) {
  return myShopData ? <RegistseredMyShop lastRef={lastRef} myShopData={myShopData} /> : <Registser />;
}
