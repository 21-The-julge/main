import ApiData from "../../type";
import Registser from "./Register/Register";
import RegistseredMyShop from "./RegisteredMyShop/RegisteredMyshop";

interface RegisterdShopProps {
  myShopData: ApiData[];
}

export default function RegisterdShop({ myShopData }: RegisterdShopProps) {
  return myShopData ? <RegistseredMyShop myShopData={myShopData} /> : <Registser />;
}
