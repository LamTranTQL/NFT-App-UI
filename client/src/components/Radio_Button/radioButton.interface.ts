export default interface RadioButtonProps {
  label?: string;
  value: RadioValueType[];
  onValueChange?: (value: string) => void;
  defaultValue: string;
}

export interface RadioValueType {
  id: string;
  value: string;
}
