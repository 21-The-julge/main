import classNames from "classnames/bind";
import IC_ENVELOPE from "@/images/ic_envelope-square.svg";
import IC_FACEBOOK from "@/images/ic_facebook-square.svg";
import IC_INSTAGRAM from "@/images/ic_instagram.svg";

import styles from "./Footer.module.scss";

const cn = classNames.bind(styles);
const color = "#A4A1AA";

export default function Footer() {
  return (
    <div className={cn("container")}>
      <div className={cn("credits")}>©codeit - 2023</div>
      <div className={cn("informationAndSupport")}>
        <div>Privacy Policy</div>
        <div>FAQ</div>
      </div>
      <div className={cn("linkIcons")}>
        <IC_ENVELOPE className={cn("icon")} fill={color} />
        <IC_FACEBOOK className={cn("icon")} fill={color} />
        <IC_INSTAGRAM className={cn("icon")} fill={color} />
      </div>
    </div>
  );
}
