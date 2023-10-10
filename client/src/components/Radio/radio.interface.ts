export default interface RadioProps {
  value: RadioType[];
  onValueChange?: (value: string) => void;
  className?: string;
  itemClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  defaultValue?: string;
}

export interface RadioType {
  id: string;
  content: string;
}
