import { RegisterdShop as RegisterdShopProps } from "../../type";

import Registser from "./Register/Register";
import RegistseredMyShop from "./RegisteredMyShop/RegisteredMyshop";

export default function RegisterdShop({ lastRef, myShopData }: RegisterdShopProps) {
  return myShopData ? <RegistseredMyShop lastRef={lastRef} myShopData={myShopData} /> : <Registser />;
}
