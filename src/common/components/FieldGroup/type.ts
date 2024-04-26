import { CSSProperties, ChangeEvent } from "react";

export interface InputFieldProps {
  name?: string;
  type?: "text" | "email" | "password" | "search";
  value?: string | number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  unit?: "원" | "시간";
  prefix?: "search";
  isError?: boolean;
  errorMessage?: string;
  size?: "sm" | "md";
  color?: "white" | "gray";
  border?: "solid" | "none";
  className?: string;
}

export interface DropdownProps {
  options?: readonly string[];
  onClick?: (option: string) => void;
  name?: string;
  placeholder?: string;
  size?: "sm" | "md";
  color?: "white" | "gray";
  className?: string;
}

export interface TextareaProps {
  rows?: number;
  name?: string;
  value?: string | number;
  required?: boolean;
  placeholder?: string;
  onTextareaChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface ClassNameCSSProperties extends CSSProperties {
  "--width"?: string;
}
