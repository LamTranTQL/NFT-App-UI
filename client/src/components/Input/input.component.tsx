import { forwardRef } from "react";
import InputProps from "./input.interface";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type,
    className,
    placeholder,
    disabled,
    id,
    name,
    checked,
    value,
    maxLength,
    onKeyUp,
    onChange,
    min,
    max,
  } = props;
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      onKeyUp={onKeyUp}
      className={className}
      disabled={disabled}
      onChange={onChange}
      id={id}
      name={name}
      checked={checked}
      value={value}
      maxLength={maxLength}
      min={min}
      max={max}
    />
  );
});

Input.displayName = "Input";
export default Input;
