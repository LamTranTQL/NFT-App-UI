"use client";

import * as RadioGroup from "@radix-ui/react-radio-group";
import RadioProps from "./radio.interface";
import styles from "./radio.module.css";

function Radio(props: RadioProps) {
  const {
    value,
    onValueChange,
    className,
    itemClassName,
    inputClassName,
    labelClassName,
    defaultValue,
  } = props;

  return (
    <form>
      <RadioGroup.Root
        className={`${styles.Radio} ${className}`}
        aria-label='View density'
        onValueChange={onValueChange}
        defaultValue={defaultValue}
      >
        {value.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`${styles.RadioOption} ${itemClassName}`}
            >
              <RadioGroup.Item
                className={`${styles.RadioItem} ${inputClassName}`}
                value={item.content}
                id={item.id}
              >
                <RadioGroup.Indicator className={styles.RadioIndicator} />
              </RadioGroup.Item>
              <label
                className={`${styles.RadioLabel} ${labelClassName}`}
                htmlFor={item.id}
              >
                {item.content}
              </label>
            </div>
          );
        })}
      </RadioGroup.Root>
    </form>
  );
}

export default Radio;
