import { CSSProperties, ChangeEvent } from "react";

export interface InputFieldProps {
  name?: string;
  type?: "text" | "email" | "password" | "search";
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  unit?: "원" | "시간";
  prefix?: "search";
  isError?: boolean;
  errorMessage?: string;
  size?: "sm" | "md";
  color?: "white" | "gray";
  border?: "solid" | "none";
  className?: string;
}

export interface TextareaProps {
  rows?: number;
  name?: string;
  value?: string | number;
  required?: boolean;
  onTextareaChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface ClassNameCSSProperties extends CSSProperties {
  "--width"?: string;
}
