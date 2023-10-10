export default interface SelectProps {
  value?: SelectType[];
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

export interface SelectType {
  id: string;
  content: string;
}
