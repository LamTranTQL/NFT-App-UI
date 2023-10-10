/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, KeyboardEvent, useEffect } from "react";
import Input from "../Input/input.component";
import InputCounterProps from "./inputCounter.interface";

function InputCounter(props: InputCounterProps) {
  const { title, placeholder, maxLength, onValueChange, type, keyname, value } =
    props;
  const inputRef = useRef<HTMLInputElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inputRef.current && value) {
      inputRef.current.value = value;
    }
    if (counterRef.current && value) {
      counterRef.current.innerText = value.length + "/" + maxLength;
    }
  }, []);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    let val = (e.target as HTMLInputElement).value;
    if (inputRef.current && counterRef.current) {
      counterRef.current.innerText = val.length + "/" + maxLength;
    }
    onValueChange && onValueChange(keyname, val);
  };

  return (
    <div>
      <label>{title}</label>
      <div className='flex flex-col gap-3'>
        <div className='input-wrapper'>
          <Input
            type={type}
            maxLength={maxLength}
            placeholder={placeholder}
            ref={inputRef}
            onKeyUp={handleKeyUp}
          />
        </div>
        <span
          ref={counterRef}
          className='font-normal text-sm text-dark-600 text-right'
        >
          0/{maxLength}
        </span>
      </div>
    </div>
  );
}

export default InputCounter;
