export default interface CheckboxProps {
  label?: boolean;
  id?: string;
  value?: string;
  name?: string;
  isChecked?: boolean;
  onClick?: (checked: boolean, value: string) => void;
}
