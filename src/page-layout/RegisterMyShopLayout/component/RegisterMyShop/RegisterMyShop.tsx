import classNames from "classnames/bind";
import styles from "@/page-layout/RegisterMyShopLayout/component/RegisterMyShop/RegisterMyShop.module.scss";

import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios, { AxiosError } from "axios";

import { ADDRESSES, CATEGORIES, MESSAGES, ROUTE } from "@/common/constants";
import { Button, InputField, Textarea, Dropdown } from "@/common/components";
import ConfirmModal from "@/common/components/Modal/ConfirmModal/ConfirmModal";

import IcCamera from "@/images/ic_camera.svg";
import IcClose from "@/images/ic_close.svg";

import { usePostPresignedURL, usePostShopData } from "@/shared/apis/api-hooks";
import useUserDataStore from "@/shared/hooks/useUserDataStore";

const cn = classNames.bind(styles);

const schema = z.object({
  name: z.string().min(1, { message: "가게 이름은 필수값입니다." }),
  category: z.string().min(1, { message: "분류는 필수값입니다." }),
  address1: z.string().min(1, { message: "주소는 필수값입니다." }),
  address2: z.string().min(1, { message: "상세 주소는 필수값입니다." }),
  originalHourlyPay: z.number(),
  imageUrl: z.string(),
  description: z.string(),
});

type ShopInfo = z.infer<typeof schema>;

export default function RegisterMyShopLayout() {
  const router = useRouter();

  const [img, setImg] = useState<string>("");
  const imgRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [address1Value, setAddress1Value] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const { mutate: postPresignedURL } = usePostPresignedURL();
  const { mutate: postShopInfo } = usePostShopData();
  const setUserData = useUserDataStore((state) => ({
    setShopId: state.setShopId,
  }));

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
  } = useForm<ShopInfo>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      name: "",
      category: "",
      address1: "",
      address2: "",
      originalHourlyPay: 0,
      imageUrl: "",
      description: "",
    },
  });

  const handleAddress1Click = (option: string) => {
    setValue("address1", option, { shouldValidate: true });
    setAddress1Value(option);
  };

  const handleCategoryClick = (option: string) => {
    setValue("category", option, { shouldValidate: true });
    setCategoryValue(option);
  };

  const onImageUpload = () => {
    const file = imgRef.current?.files?.[0];

    if (file) {
      postPresignedURL(
        { name: file.name },
        {
          onSuccess: async (data) => {
            try {
              const response = await axios.put(data.item.url, file, {
                headers: { "Content-Type": file.type },
              });
              if (response.status === 200) {
                const imageUrl = data.item.url.split("?")[0];
                setValue("imageUrl", imageUrl);
                setImg(imageUrl);
              }
            } catch (error) {
              setAddress1Value("잘못된 이미지 입니다.");
              setIsModalOpen((prevOpen) => !prevOpen);
            }
          },
          onError: () => {
            setAddress1Value("이미지 등록에 실패하였습니다.");
            setIsModalOpen((prevOpen) => !prevOpen);
          },
        },
      );
    }
  };

  const onSubmit: SubmitHandler<ShopInfo> = (data) => {
    postShopInfo(data, {
      onSuccess: (response) => {
        setUserData.setShopId(response.shopId);
        setAlertMessage(MESSAGES.SUCCESS);
        setIsModalOpen((prev) => !prev);
      },
      onError: (error: Error) => {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status as number;
          const errorMessage = (axiosError.response.data as { message?: string }).message;

          if (status === 401) {
            setAlertMessage("로그인이 필요합니다.");
          } else if (status === 409) {
            setAlertMessage(errorMessage || MESSAGES.FAIL);
          } else {
            setAlertMessage(MESSAGES.FAIL);
          }
        }

        setIsModalOpen((prevOpen) => !prevOpen);
      },
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);

    if (alertMessage === MESSAGES.SUCCESS) {
      router.replace(ROUTE.MYSHOP);
    }
  };

  return (
    <main className={cn("container")}>
      <form onSubmit={handleSubmit(onSubmit)} className={cn("formContainer")}>
        <div className={cn("shopInfoTitleContainer")}>
          <p>가게 정보</p>
          <IcClose width={32} height={32} fill="#111322" />
        </div>
        <div className={cn("shopContentContainer")}>
          <div className={cn("gridContainer")}>
            <InputField
              {...register("name")}
              name="name"
              placeholder="입력"
              label="가게 이름"
              isError={!!errors.name}
              errorMessage={errors.name?.message}
            />
            <Dropdown
              {...register("category")}
              name="category"
              value={categoryValue}
              options={CATEGORIES}
              placeholder="선택"
              label="분류"
              onOptionClick={handleCategoryClick}
              isError={!!errors.category}
              errorMessage={errors.category?.message}
            />
            <Dropdown
              {...register("address1")}
              name="address1"
              value={address1Value}
              options={ADDRESSES}
              placeholder="선택"
              label="주소"
              onOptionClick={handleAddress1Click}
              isError={!!errors.address1}
              errorMessage={errors.address1?.message}
            />
            <InputField
              {...register("address2")}
              name="address2"
              placeholder="입력"
              label="상세 주소"
              isError={!!errors.address2}
              errorMessage={errors.address2?.message}
            />
            <Controller
              name="originalHourlyPay"
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value, 10) || 0)}
                  placeholder="입력"
                  unit="원"
                  label="기본 시급"
                  isError={!!errors.originalHourlyPay}
                  errorMessage={errors.originalHourlyPay?.message}
                />
              )}
            />
          </div>
          <div className={cn("imgContainer")}>
            <p className={cn("imgTitle")}>가게 이미지</p>
            <div className={cn("imgBox")}>
              {img && <Image className={cn("img")} fill src={img} alt="이미지 미리보기" />}
              <label className={cn("inputLabel")} htmlFor="file">
                <div className={cn("imgAddContainer", { img })}>
                  <IcCamera width={32} height={32} />
                  <p>이미지 추가하기</p>
                </div>
              </label>
              <input id="file" className={cn("input")} ref={imgRef} onChange={onImageUpload} type="file" />
            </div>
          </div>
          <Textarea {...register("description")} name="description" placeholder="입력" label="가게 설명" />
        </div>
        <Button type="submit" size="large">
          등록하기
        </Button>
      </form>
      {isModalOpen && <ConfirmModal message={alertMessage} className={cn("modal")} onClick={handleModalClose} />}
    </main>
  );
}
