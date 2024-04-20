import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { ADDRESSES } from "@/common/constants";
import remove from "../../../utils/remove";

import styles from "./AddressSelector.module.scss";

const cn = classNames.bind(styles);

interface AddressSelectorProps {
  value: string[];
  setAddress: (address: string[]) => void;
}

export default function AddressSelector({ value, setAddress }: AddressSelectorProps) {
  const [badges, setBadge] = useState<string[]>([]);

  const handleAdd = (badge: string) => {
    if (!badges.includes(badge)) {
      setBadge((prev) => [...prev, badge]);
    }
  };

  const handleDelete = (badge: string) => {
    setBadge((pre) => remove<string>(pre, badge));
  };

  useEffect(() => {
    setAddress(badges);
  }, [badges]);

  return (
    <div className={cn("container")}>
      <div className={cn("selectBoxWrapper")}>
        <ul className={cn("selectBox")}>
          {ADDRESSES.map((address: string) => (
            <li key={address} role="presentation" className={cn("item")} onClick={() => handleAdd(address)}>
              {address}
            </li>
          ))}
        </ul>
      </div>

      <ul className={cn("badgeBox")}>
        {value.map((e) => (
          <li key={e}>
            {e}
            <span role="presentation" onClick={() => handleDelete(e)}>
              x
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
