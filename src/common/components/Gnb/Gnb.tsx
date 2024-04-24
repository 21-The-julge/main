import { ChangeEvent, KeyboardEvent, useState } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import LOGO from "@/images/logo.svg";
import { useRouter } from "next/router";
import styles from "./Gnb.module.scss";

import UserAction from "./GnbComponents/UserAction";

const cn = classNames.bind(styles);

export default function Gnb() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue !== "") {
      router.push(`/search?inputValue=${inputValue}`);
    }
  };

  return (
    <div className={cn("background")}>
      <div className={cn("container")}>
        <Link href="/">
          <LOGO className={cn("logo")} />
        </Link>
        <input
          className={cn("input")}
          type="text"
          placeholder="가게 이름으로 찾아보세요."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <UserAction />
      </div>
    </div>
  );
}
