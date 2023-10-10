/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ChangeEvent, forwardRef, useEffect, useRef } from "react";
import Input from "../Input/input.component";
import CheckboxProps from "./checkbox.interface";
import styles from "./checkbox.module.scss";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { label, id, name, value, onClick, isChecked } = props;
  const labelRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isChecked && inputRef.current && labelRef.current) {
      inputRef.current.checked = true;
      labelRef.current.style.fontWeight = "500";
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onClick && onClick(e.target.checked, e.target.value);
    if (labelRef.current) {
      if (e.target.checked) {
        labelRef.current.style.fontWeight = "500";
      } else {
        labelRef.current.style.fontWeight = "300";
      }
    }
  };
  return (
    <div className='flex flex-row gap-3 items-center'>
      <Input
        type='checkbox'
        id={id}
        name={name}
        value={value}
        className={styles.checkbox}
        onChange={handleChange}
        ref={inputRef}
      />
      {label && (
        <label
          ref={labelRef}
          htmlFor={id}
          className='text-base font-light text-dark-100 m-0'
        >
          {value}
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
