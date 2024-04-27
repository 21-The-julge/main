import { CSSProperties, ChangeEvent } from "react";

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
