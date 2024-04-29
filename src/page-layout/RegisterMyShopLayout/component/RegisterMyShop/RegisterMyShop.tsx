import classNames from "classnames/bind";
import styles from "@/page-layout/RegisterMyShopLayout/component/RegisterMyShop/RegisterMyShop.module.scss";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";

import { Button, InputField, Textarea, Dropdown } from "@/common/components";
import Camera from "@/images/ic_camera.svg";
import Close from "@/images/ic_close.svg";

import { ADDRESSES, CATEGORIES, MESSAGES } from "@/common/constants";
import { useRef, useState } from "react";
import { usePostPresignedURL, usePostShopData } from "@/shared/apis/api-hooks";
import axios from "axios";
import useUserDataStore from "@/shared/hooks/useUserDataStore";
// import { useRouter } from "next/router";
import ConfirmModal from "@/common/components/Modal/ConfirmModal/ConfirmModal";

// interface ShopInfo {
//   name: string;
//   address: string;
//   detailedAddress: string;
//   hourlyRate: number;
//   classification: string;
// }

const schema = z.object({
  name: z.string().min(1, { message: "가게 이름은 필수값입니다." }),
  category: z.string().min(1, { message: "분류는 필수값입니다." }),
  address1: z.string().min(1, { message: "주소는 필수값입니다." }),
  address2: z.string().min(1, { message: "상세 주소는 필수값입니다." }),
  originalHourlyPay: z.number(),
  imageUrl: z.string(),
  description: z.string(),
});

const cn = classNames.bind(styles);

type ShopInfo = z.infer<typeof schema>;

export default function RegisterMyShopLayout() {
  // const router = useRouter();
  const [img, setImg] = useState<string>("");
  const imgRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const setUserData = useUserDataStore((state) => ({
    setShopId: state.setShopId,
  }));

  const { mutate: postPresignedURL } = usePostPresignedURL();
  const { mutate: postShopInfo } = usePostShopData();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
  } = useForm<ShopInfo>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      category: "중식",
      address1: "서울시 송파구",
      address2: "",
      originalHourlyPay: 0,
      imageUrl: "",
      description: "",
    },
  });

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
              console.error("이미지 업로드 실패", error);
            }
          },
          onError: (error) => {
            console.error("Failed to get presigned URL:", error);
          },
        },
      );
    }
  };

  const onSubmit: SubmitHandler<ShopInfo> = (data) => {
    console.log(data);
    postShopInfo(data, {
      onSuccess: (response) => {
        console.log("성공", response);
        setUserData.setShopId(response.shopId);
        setAlertMessage(MESSAGES.SUCCESS);
        setIsModalOpen((prev) => !prev);
      },
      onError: (error) => {
        console.error("실패", error);
      },
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <main className={cn("container")}>
      <form onSubmit={handleSubmit(onSubmit)} className={cn("formContainer")}>
        <div className={cn("shopInfoTitleContainer")}>
          <p>가게 정보</p>
          <Close width={32} height={32} fill="#111322" />
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
              options={CATEGORIES}
              placeholder="선택"
              label="분류"
              isError={!!errors.category}
              errorMessage={errors.category?.message}
            />
            <Controller
              name="address1"
              control={control}
              render={({ field: { onChange, value, ...field } }) => (
                <Dropdown
                  {...field}
                  options={ADDRESSES}
                  placeholder="선택"
                  label="주소"
                  isError={!!errors.address1}
                  errorMessage={errors.address1?.message}
                />
              )}
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
                  <Camera width={32} height={32} />
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
