import classNames from "classnames/bind";
import IcEnvelopeSquare from "@/images/ic_envelope-square.svg";
import IcFacebookSquare from "@/images/ic_facebook-square.svg";
import IcInstagram from "@/images/ic_instagram.svg";

import styles from "./Footer.module.scss";

const cn = classNames.bind(styles);
const color = "#A4A1AA";

export default function Footer() {
  return (
    <div className={cn("background")}>
      <div className={cn("container")}>
        <div className={cn("credits")}>©codeit - 2023</div>
        <div className={cn("informationAndSupport")}>
          <div>Privacy Policy</div>
          <div>FAQ</div>
        </div>
        <div className={cn("linkIcons")}>
          <IcEnvelopeSquare className={cn("icon")} fill={color} />
          <IcFacebookSquare className={cn("icon")} fill={color} />
          <IcInstagram className={cn("icon")} fill={color} />
        </div>
      </div>
    </div>
  );
}
