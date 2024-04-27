import classNames from "classnames/bind";
import styles from "@/page-layout/RegisterMyShopLayout/component/RegisterMyShop/RegisterMyShop.module.scss";

import Camera from "@/images/ic_camera.svg";
import Close from "@/images/ic_close.svg";
import { Button, InputField, Textarea, Dropdown } from "@/common/components";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ADDRESSES, CATEGORIES } from "@/common/constants";
import { ChangeEvent, useRef, useState } from "react";
import { usePostPresignedURL, usePostShopData } from "@/shared/apis/api-hooks";
import { useRouter } from "next/router";
import ConfirmModal from "@/common/components/Modal/ConfirmModal/ConfirmModal";

interface ShopInfo {
  name: string;
  address: string;
  detailedAddress: string;
  hourlyRate: number;
  classification: string;
}

const schema = z.object({
  name: z.string().min(1, { message: "가게 이름은 필수값입니다." }),
  address: z.string().min(0, { message: "주소는 필수값입니다." }),
  detailedAddress: z.string().min(1, { message: "상세 주소는 필수값입니다." }),
  classification: z.string().min(0, { message: "분류는 필수값입니다." }),
  hourlyRate: z.string().min(1, { message: "시급은 필수값입니다." }),
});

const cn = classNames.bind(styles);

export default function RegisterMyShop() {
  // const { token } = useUserDataStore();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ShopInfo>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const [shopName, setShopName] = useState("");
  const [classification, setClassification] = useState("");
  const [address, setAddress] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [img, setImg] = useState<string | ArrayBuffer>("");
  const [description, setDescription] = useState("");
  const imgRef = useRef<HTMLInputElement>(null);
  const { data, mutate } = usePostPresignedURL();
  const { mutate: shopDataMutate } = usePostShopData({
    name: shopName,
    category: classification,
    address1: address,
    address2: detailedAddress,
    description,
    imageUrl: data,
    originalHourlyPay: Number(hourlyRate),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleClickConfirm = () => {
    shopDataMutate();
    router.push("/my-shop");
  };

  const handleOnchangeShopName = (e: ChangeEvent<HTMLInputElement>) => {
    setShopName(e.target.value);
  };

  const handleOnchangeClassification = (e: ChangeEvent<HTMLInputElement>) => {
    setClassification(e.target.value);
  };

  const handleOnchangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleOnchangeDetailedAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setDetailedAddress(e.target.value);
  };

  const handleOnchangeHourlyRate = (e: ChangeEvent<HTMLInputElement>) => {
    setHourlyRate(e.target.value);
  };

  const handleOnchangeImg = () => {
    const file = imgRef.current?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          const imgData = reader.result;

          setImg(imgData);
          if (file?.name) {
            mutate({ name: file?.name });
          }
        } else {
          setImg("");
        }
      };
    }
  };

  const handleOnchangeDesription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleClickClassification = (option: string) => {
    setClassification(option);
  };

  const handleClickAddress = (option: string) => {
    setAddress(option);
  };

  const handleSubmitFormData = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className={cn("container")}>
      <form onSubmit={handleSubmit(handleSubmitFormData)} className={cn("formContainer")}>
        <div className={cn("shopInfoTitleContainer")}>
          <p>가게 정보</p>
          <Close width={32} height={32} fill="#111322" />
        </div>
        <div className={cn("shopContentContainer")}>
          <div className={cn("gridContainer")}>
            <InputField
              value={shopName}
              placeholder="입력"
              label="가게 이름"
              required
              {...register("name")}
              name="name"
              onChange={handleOnchangeShopName}
              isError={!!errors.name}
              errorMessage={errors.name?.message}
            />
            <Dropdown
              value={classification}
              onOptionClick={handleClickClassification}
              options={CATEGORIES}
              placeholder="선택"
              label="분류"
              required
              {...register("classification")}
              onChange={handleOnchangeClassification}
              isError={!!errors.classification}
              errorMessage={errors.classification?.message}
            />
            <Dropdown
              value={address}
              onOptionClick={handleClickAddress}
              options={ADDRESSES}
              placeholder="선택"
              label="주소"
              required
              {...register("address")}
              onChange={handleOnchangeAddress}
              isError={!!errors.address}
              errorMessage={errors.address?.message}
            />
            <InputField
              value={detailedAddress}
              placeholder="입력"
              label="상세 주소"
              required
              {...register("detailedAddress")}
              onChange={handleOnchangeDetailedAddress}
              isError={!!errors.detailedAddress}
              errorMessage={errors.detailedAddress?.message}
            />
            <InputField
              unit="원"
              value={hourlyRate}
              placeholder="입력"
              label="기본 시급"
              required
              {...register("hourlyRate")}
              onChange={handleOnchangeHourlyRate}
              isError={!!errors.hourlyRate}
              errorMessage={errors.hourlyRate?.message}
            />
          </div>
          <div className={cn("imgContainer")}>
            <p className={cn("imgTitle")}>가게 이미지</p>
            <div className={cn("imgBox")}>
              {img && <img className={cn("img")} src={img} alt="이미지 미리보기" />}
              <label className={cn("inputLabel")} htmlFor="file">
                <div className={cn("imgAddContainer")}>
                  <Camera width={32} height={32} />
                  <p>이미지 추가하기</p>
                </div>
              </label>
              <input id="file" className={cn("input")} ref={imgRef} onChange={handleOnchangeImg} type="file" />
            </div>
          </div>
          <Textarea onChange={handleOnchangeDesription} value={description} placeholder="입력" label="가게 설명" />
        </div>
        <Button type="submit" size="large">
          등록하기
        </Button>
      </form>
      {isModalOpen && (
        <ConfirmModal message="등록이 완료되었습니다." className={cn("modal")} onClick={handleClickConfirm} />
      )}
    </div>
  );
}
