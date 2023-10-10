import { ChangeEvent, KeyboardEvent } from "react";

export default interface InputProps {
  type:
    | "text"
    | "number"
    | "checkbox"
    | "radio"
    | "email"
    | "password"
    | "button"
    | "submit"
    | "reset"
    | "tel"
    | "file";
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  checked?: boolean;
  value?: string;
  maxLength?: number;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
}
