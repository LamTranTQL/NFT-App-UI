export default interface InputCounterProps {
  title?: string;
  placeholder?: string;
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
  maxLength?: number;
  keyname: string;
  value?: string;
  onValueChange?: (keyName: string, value: string) => void;
}
