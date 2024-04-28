import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

import classNames from "classnames/bind";

import { ROUTE } from "@/common/constants";
import { InputField } from "@/common/components";

import LOGO from "@/images/logo.svg";

import styles from "./Gnb.module.scss";

import UserAction from "./GnbComponents/UserAction";

const cn = classNames.bind(styles);

interface SearchBar {
  keyword: string;
}

export default function Gnb() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<SearchBar>();

  const onSubmit: SubmitHandler<SearchBar> = (keyword) => {
    router.push({
      pathname: ROUTE.SEARCH,
      query: { ...keyword },
    });
  };

  return (
    <div className={cn("background")}>
      <div className={cn("container")}>
        <Link href={ROUTE.HOME}>
          <LOGO className={cn("logo", "item")} />
        </Link>

        <form onSubmit={handleSubmit(onSubmit)} className={cn("search", "item")}>
          <InputField
            type="search"
            size="sm"
            prefix="search"
            color="gray"
            border="none"
            placeholder="가게 이름으로 찾아보세요."
            {...register("keyword", { required: true })}
          />
        </form>

        <div className={cn("item")}>
          <UserAction />
        </div>
      </div>
    </div>
  );
}
